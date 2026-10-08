const API='https://api.github.com/repos/somomentous/award-atlas/releases';
const isPackage=asset=>/^Award-Atlas(?:-\d+\.\d+\.\d+(?:-[\w.-]+)?)?\.zip$/i.test(asset.name??'');

export function summarizeDownloads(releases,latestId) {
  let total=0,latest=0;const seen=new Set();
  for(const release of releases) {
    if(release.draft)continue;
    for(const asset of release.assets??[]) {
      if(!isPackage(asset)||seen.has(asset.id))continue;
      if(!Number.isSafeInteger(asset.download_count)||asset.download_count<0)throw new Error('Invalid GitHub download count');
      seen.add(asset.id);total+=asset.download_count;
      if(release.id===latestId)latest+=asset.download_count;
    }
  }
  return {total,latest};
}

export async function fetchDownloadStats(fetcher=globalThis.fetch) {
  async function json(url) {
    const response=await fetcher(url,{headers:{Accept:'application/vnd.github+json'},credentials:'omit',referrerPolicy:'no-referrer',signal:AbortSignal.timeout(10000)});
    if(!response.ok)throw new Error('GitHub counts unavailable');
    return response.json();
  }
  const [latest,first]=await Promise.all([json(API+'/latest'),json(API+'?per_page=100&page=1')]);
  if(!Number.isInteger(latest?.id)||typeof latest.tag_name!=='string'||!Array.isArray(first))throw new Error('Invalid release information');
  let page=first;const releases=[...page];
  for(let number=2;page.length===100;number++) {
    if(number>10)throw new Error('Release list too large to count completely');
    page=await json(API+`?per_page=100&page=${number}`);
    if(!Array.isArray(page))throw new Error('Invalid release list');
    releases.push(...page);
  }
  if(!releases.some(release=>release.id===latest.id))throw new Error('Release list changed; try later');
  return {...summarizeDownloads(releases,latest.id),version:latest.tag_name};
}

if(typeof document!=='undefined') {
  const section=document.getElementById('download-stats');
  if(section)fetchDownloadStats().then(stats=>{
    const format=new Intl.NumberFormat('en-US');
    document.getElementById('total-downloads').textContent=format.format(stats.total);
    document.getElementById('latest-downloads').textContent=format.format(stats.latest);
    document.getElementById('latest-download-label').textContent=stats.version+' downloads';
    document.getElementById('download-stats-status').textContent='GitHub ZIP downloads · Counts include repeat downloads, not unique users or installs.';
    section.setAttribute('aria-busy','false');
  }).catch(()=>{
    document.getElementById('download-stats-status').textContent='Download counts are temporarily unavailable. Downloads still work.';
    section.setAttribute('aria-busy','false');
  });
}

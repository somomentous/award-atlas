# Award Atlas

A free Chrome extension for searching Cathay Pacific award seats in a compact panel on Cathay’s website.

[Website](https://somomentous.github.io/award-atlas/) · [Download ZIP](https://github.com/somomentous/award-atlas/releases/latest/download/Award-Atlas.zip) · [Release notes](https://github.com/somomentous/award-atlas/releases)

## Install

Download the release ZIP asset, not GitHub’s Source code archive. Extract it (double-click on Mac; Extract All on Windows), keep the `award-atlas-extension` folder in a permanent location, then open `chrome://extensions` in desktop Chrome 120+. Enable Developer mode, click Load unpacked, and select the folder containing `manifest.json`. Pin Award Atlas, sign in directly on Cathay, refresh that tab, and click the extension icon.

Choose airports with city/country/name/IATA suggestions, then cabin, adults, and 7/14/30 days or a month. Keep the Cathay tab open. Save Search stores named configurations for later use; Saved Searches lets you run, rename, edit or delete them.

## Update

Settings > Check for Updates checks GitHub releases. Update Now opens the release page; it does not install a ZIP automatically. Stop your search, download/extract the latest ZIP, replace files in the **same installed folder**, click Reload on Award Atlas’s card, and refresh Cathay. Do not remove the extension or load a new folder.

Local preferences, saved searches and normalized progress persist from 0.4.0 onward if the extension identity stays the same. Earlier 0.3.x results used session storage and cannot survive Chrome clearing them on the first upgrade. Managed-device installation requires administrator policies; this ZIP does not configure that deployment.

## Privacy and help

Searches go directly to Cathay; local airport lookup works offline. GitHub receives public release/policy metadata requests, not Cathay account/search data. The extension uses no analytics or developer-operated search backend. [Privacy](https://somomentous.github.io/award-atlas/privacy.html) · [GitHub issues](https://github.com/somomentous/award-atlas/issues).

Cathay website changes, session expiry and limits can interrupt searches. Unchecked dates are unknown. An owner minimum-version policy can require an update without deleting your local data. ZIP installation/updates remain manual.

**Non-Affiliated Tool · Always confirm miles & taxes on Cathay Pacific**

Not affiliated with Cathay Pacific or Asia Miles. [MIT License](LICENSE). This repository hosts the public website, JSON version policy and release assets.

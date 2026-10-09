# Award Atlas

A free Chrome extension for searching Cathay Pacific award seats in a compact panel on Cathay’s website.

[Website](https://somomentous.github.io/award-atlas/) · [Download ZIP](https://github.com/somomentous/award-atlas/releases/latest/download/Award-Atlas.zip) · [Release notes](https://github.com/somomentous/award-atlas/releases)

## Install

Download the release ZIP asset, not GitHub’s Source code archive. Extract it (double-click on Mac; Extract All on Windows), keep the `award-atlas-extension` folder in a permanent location, then open `chrome://extensions` in desktop Chrome 120+. Enable Developer mode, click Load unpacked, and select the folder containing `manifest.json`. Pin Award Atlas, sign in directly on Cathay, refresh that tab, and click the extension icon.

Choose airports with city/country/name/IATA suggestions, then cabin, adults, and 1/7/14/30 days or a month for a single route. Select up to two airports per field to compare routes over 1 or 7 days (at most 28 route/date checks). Keep the Cathay tab open. Save Search stores named configurations for later use; Saved Searches lets you run, rename, edit or delete them.

Version 0.6.2 includes Oneworld partner itineraries returned by Cathay by default. Turn on **Exclude Oneworld Partners** for Cathay-only results. Circular airline icons, including Hawaiian, identify each distinct carrier on mixed itineraries, with a generic Oneworld fallback where needed.

## Update

Settings > Check for Updates checks GitHub releases. Update Now opens the release page; it does not install a ZIP automatically. Stop your search, download/extract the latest ZIP, replace files in the **same installed folder**, click Reload on Award Atlas’s card, and refresh Cathay. Do not remove the extension or load a new folder.

Local preferences, saved searches and normalized progress persist from 0.4.0 onward if the extension identity stays the same. Earlier 0.3.x results used session storage and cannot survive Chrome clearing them on the first upgrade. Managed-device installation requires administrator policies; this ZIP does not configure that deployment.

## Privacy and help

Searches go directly to Cathay; local airport lookup works offline. GitHub receives public release/policy metadata requests, not Cathay account/search data. The extension uses no analytics or developer-operated search backend. [Privacy](https://somomentous.github.io/award-atlas/privacy.html) · [GitHub issues](https://github.com/somomentous/award-atlas/issues).

Cathay website changes, session expiry and limits can interrupt searches. Unchecked dates are unknown. An owner minimum-version policy can require an update without deleting your local data. ZIP installation/updates remain manual.

**Non-Affiliated Tool · Always confirm miles & taxes on Cathay Pacific**

Not affiliated with Cathay Pacific or Asia Miles. [MIT License](LICENSE). This repository hosts the public website, JSON version policy and release assets.

## New in v0.6.2

- Fix missing Business results when Premium Economy + Business are selected together, without extra date checks.
- Start every new search with Departure Time / Earliest First. Changing the sort for existing results still persists through reloads.

## Included from v0.6.1

- Month searches allow one departure airport and one arrival airport.
- Switching to Date range restores Add airport on both sides, with up to two airports per field for 1-day or 7-day searches.
- Switching to Month cancels unfinished second-airport entries.

## Included from v0.6.0

- Select multiple cabin classes, or the mutually exclusive All Cabins option.
- Sort by departure, arrival, travel time, stops, or cabin class in both directions, with unknown values last.
- See every matching cabin on one itinerary card, Cathay's total travel time, and arrival-day offsets such as +1/+2.
- Preserve saved cabin choices and the sort order of existing results; no extra date checks are added.

## Included from v0.5.4

- Keep the swap button aligned with the first airport row.
- Keep the × icon at the same position in empty and selected airport fields.
- Choose dates from a calendar that only offers the current year and next year. Past dates and dates outside the full search range’s booking window are disabled.

## Included from v0.5.3

- Search one date, or compare up to four routes using two airports per field.
- One-day route cards and a combined seven-day calendar keep results grouped by route.
- Green with one diamond means a matching all-CX itinerary is available; blue with two diamonds means only Oneworld or mixed options were found.
- Confirmed Cathay 9100 no-flight responses are normal empty results, including redirects to the redemption form.
- Skip eligible date errors and retry them later. Skipped dates are light red; unfinished checks remain unknown.
- Improved partial-results notices and spacing.

Earlier fixes for unavailable partner seat statuses and supported Heathrow/Gatwick airport changes are included. Always review connection and airport-change details with Cathay.

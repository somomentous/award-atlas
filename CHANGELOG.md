# Changelog

## 0.4.0 — 2026-10-08

- GitHub Releases distribution with versioned production ZIPs and an Actions build workflow.
- Startup, six-hour background, and manual update checks with cached release notes.
- Owner-managed minimum-version policy. A cached valid policy remains effective offline; network errors alone never lock the extension.
- Saved Searches: create, name, rename, edit, rerun, and confirm deletion.
- Dates Past badges identify saved dates needing edits; names preserve user-selected capitalization.
- Persistent local preferences and normalized search progress; restored searches require a fresh Cathay booking session.
- Offline OurAirports autocomplete for cities, countries, airport names, IATA codes, aliases, and typos.
- Removed support email links from the extension and user documentation.
- Website shows aggregate GitHub ZIP-download counts for all releases and the latest version.

Update Now opens the GitHub release. ZIP installation and updates require a
manual file replacement and Chrome Reload. Existing 0.3.x session-only results
cannot be recovered after Chrome clears them during a reload. Retain the same
extension folder and installation to preserve local data from 0.4.0 onward.

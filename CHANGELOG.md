# Changelog

## 0.5.4 — 2026-10-08

- Replace the native start-date popup with a calendar that only offers the current year and next year, and disables dates outside the selected range’s booking window.

- Keep the airport remove/cancel icon centered at the same position in empty inputs and selected airport chips.
- Center the airport-swap button on the first airport row, regardless of extra airports or Add airport controls.
- Match the center grid column to the button width so both horizontal gaps are even.

## 0.5.3 — 2026-10-08

- Add consistent space above and below the partial-results notice so it clears route cards, the calendar and the legend.

## 0.5.2 — 2026-10-08

- Update the partial-results message to “Unfinished routes remain unknown or no flights available.”

## 0.5.1 — 2026-10-08

- Recognize Cathay’s ERR_DDS_9100 no-flight redirect back to its redemption form as a completed empty result, without a red error or Skip step.
- Continue to the next route/date automatically even when the empty search never created a booking session.
- Match the redirect to the requested airports, date, cabin and travelers, and require a fresh navigation and visible no-flight alert before recording No matches.

## 0.5.0 — 2026-10-08

- Select up to two departure and two arrival airports using removable airport chips.
- Multiple airports support 1 or 7 days, for a maximum of 28 route/date checks. Single routes retain 1/7/14/30 days and Month.
- Show route comparison cards for a single day, or a calendar summarizing all routes for seven days. Group flight results by route and keep Cathay links tied to the correct airports.
- Track each route/date separately through sequential requests, fresh booking navigation on route changes, stop/continue, Skip/Retry, saved searches and restored results.
- Mark partial date results explicitly; unfinished or failed routes never imply zero availability.

## 0.4.10 — 2026-10-08

- Add a 1 day choice to Search length alongside 7, 14 and 30 days.
- Preserve single-date selections in preferences, saved searches and restored results, with singular day/date labels.
- A single-date search checks only the chosen date and can use the final bookable date.

## 0.4.9 — 2026-10-08

- Keep calendar days green with one diamond when at least one matching itinerary uses only Cathay Pacific flight legs.
- Show days with only Oneworld partner or mixed itineraries in light blue with two diamonds; keep the displayed count as the total matching options.
- Apply the classification after cabin, traveler, nonstop and partner filters, including all-Cathay connections.
- Left-align the naturally wrapping legend in this order: CX Seats Found, Oneworld/Mixed Seats Found, No Matches, Not Checked, Skipped. Retain light red question marks for unknown skipped/error dates.

## 0.4.8 — 2026-10-08

- Recognize Cathay's message type metadata in its no-flight response (9100), allowing the search to continue to later dates.
- Retain strict handling of conflicting errors, unfamiliar message records and contradictory flight lists.
- Include Skip, Retry skipped dates, and the light red unknown-date calendar introduced in the local 0.4.6 candidate.

## 0.4.7 (local diagnostic candidate) — 2026-10-08

- Versioned the parser diagnostic build separately to confirm Chrome has loaded the updated error handling.

## 0.4.6 (local candidate) — 2026-10-08

- Add **Skip this date and continue** for individual flight-data parsing errors, keeping completed results and skipped dates separate.
- Add **Retry skipped dates** after the remaining dates finish, preserving progress across extension reloads.
- Show skipped/error dates in light red with a question mark and unknown-availability labels; never count them as zero-seat or verified dates.
- Keep session, rate-limit and unrecognized server errors paused rather than skipping them.
- Improve bounded 9100 diagnostics without exposing free-form messages or session values.

## 0.4.5 (local candidate) — 2026-10-08

- Recognize Cathay's observed no-flight response (code 9100) and continue checking the remaining dates.
- Require that no other errors or contradictory flight results accompany that response; unknown failures remain unchecked.
- Show bounded Cathay error codes for troubleshooting without including free-form server messages, account data, or booking tokens.

## 0.4.4 — 2026-10-08

- Support the Heathrow/Gatwick airport changes displayed in Cathay's British Airways itineraries, with an explicit airport-change warning.
- Continue checking every flight leg's inventory; unavailable transfers do not become available seats.
- Include the flight numbers and airport gap in unsupported-connection errors for easier diagnosis.

## 0.4.3 — 2026-10-08

- Handle Cathay's observed partner `N` inventory status as unavailable, so those flights no longer stop the date search.
- Remove the duplicate airport names below selected From/To inputs to keep the form aligned. Airport details remain in suggestions and the field tooltip.
- Check inventory in the selected cabin, so an unfamiliar status in another cabin cannot stop a valid search. Unrequested cabins remain unverified rather than being assigned zero seats.
- Keep unfamiliar statuses in the requested cabin as errors and identify the affected flight, cabin and bounded status code for troubleshooting.

## 0.4.2 — 2026-10-08

- Replace wordmarks with the supplied circular SVG airline icons at a consistent 28×28 px size.
- Include the supplied Hawaiian Airlines icon; use the circular Oneworld fallback for airlines without a matching icon.
- Show distinct airline logos alongside names, including both airlines on mixed itineraries.
- Use the supplied generic Oneworld logo when there is no matching image or an image fails to load; retain text if the fallback fails too.
- Load logos locally with access limited to the existing Cathay hosts, without external image requests.

## 0.4.1 — 2026-10-08

- Show Cathay Pacific and Oneworld partner itineraries returned by Cathay by default.
- Add an Exclude Oneworld partners toggle for instant Cathay-only filtering, saved with searches and restored results.
- Label airlines on mixed itineraries and warn about supported NRT/HND airport transfers.
- Keep per-leg cabin and passenger checks; mileage prices alone never establish award availability.
- Older restored searches explain that a fresh search is needed to collect partner results.

## 0.4.0 — 2026-10-08

- GitHub Releases distribution with versioned production ZIPs and an Actions build workflow.
- Startup, six-hour background, and manual update checks with cached release notes.
- Owner-managed minimum-version policy. A cached valid policy remains effective offline; network errors alone never lock the extension.
- Saved Searches: create, name, rename, edit, rerun, and confirm deletion.
- Dates Past badges identify saved dates needing edits; names preserve user-selected capitalization.
- Persistent local preferences and normalized search progress; restored searches require a fresh Cathay booking session.
- Offline OurAirports autocomplete for cities, countries, airport names, IATA codes, aliases, and typos.
- Removed support email links from the extension and user documentation.

Update Now opens the GitHub release. ZIP installation and updates require a
manual file replacement and Chrome Reload. Existing 0.3.x session-only results
cannot be recovered after Chrome clears them during a reload. Retain the same
extension folder and installation to preserve local data from 0.4.0 onward.

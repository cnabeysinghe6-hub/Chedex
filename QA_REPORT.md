# CHEDEX website – QA report

Tested with headless Chromium (Playwright) on the final index.html.

## Passed
- Horizontal overflow: 0 failures in 88 checks (8 viewports: 360, 390, 430, 768, 1024, 1440, 1920, 2560 px x dark/light x home + 4 service pages). One real overflow bug (hero stats at 390 px) was found and fixed.
- Loading screen: logo centred and square at all 8 sizes; loader hides after load (also a 4 s failsafe).
- Hero: 0 infinite/moving animations on the page. Orbs, grid and ticker animation removed; static logo watermark added.
- Navigation: mobile menu opens/closes, Escape closes, aria-expanded updates; theme toggle works; all 4 service pages route and return home.
- Internal anchors: 0 broken. Skip-to-content link works.
- Form: empty name, invalid email and short message are rejected with a message; valid input builds the correct wa.me link with the message.
- Console: no JavaScript errors.
- Images: 0 broken (logo is embedded).

## Not verified / open issues
1. Educational Academy link: https://educationalwebl.netlify.app was fetched and loads (page title "Kavindu Perera | Mathematics Education (Demo)"). It is wired to the card and opens in a new tab.
2. External links (restaurant demo, fashion demo, Instagram, wa.me) were format-checked only; the sandbox is offline.
3. Google Fonts could not load offline, so layouts were tested with fallback fonts. The only console message was the blocked font request. Re-check once online.
4. Real iPhone/Android devices and Safari/Firefox were not tested (Chromium only).
5. Package prices and the removed testimonials: prices are still sample values and need your real figures.

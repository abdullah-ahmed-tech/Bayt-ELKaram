# Bayt Elkaram — Project Overview and Handover Status

## The product

Bayt Elkaram is a planned multi-branch restaurant experience for Syrian and Egyptian cuisine in Greater Cairo. The digital ecosystem has three customer-facing and operational parts:

| Product | Planned platform | Purpose |
| --- | --- | --- |
| Customer application | Flutter for Android and iOS | Discover branches and dishes, order delivery or pickup, make reservations, track orders, manage loyalty and support. |
| Administration dashboard | Next.js | Run branches, menus, orders, reservations, staff permissions, campaigns, customers and reports. |
| Marketing website | Next.js proposed | Introduce the brand, show locations, capture catering enquiries and reservations, and direct visitors to ordering. |

The planning documents propose a shared NestJS backend. The backend and all three production applications **have not been implemented in this handover**. The HTML files are editable design artifacts, not deployed applications.

## Completed work

1. Product discovery: a sitemap of 56 customer-app screens and states and 39 administration screens and states; 16 customer/operations journeys; and detailed wireframe specifications for 18 flagship screens.
2. Visual design: 85 editable artboards in the shared application/dashboard canvas—50 English customer screens, 30 dashboard screens and five Arabic demonstration screens—plus a visual design-system artifact.
3. Marketing website: a six-page sitemap, eight visitor journeys, page specifications and six desktop artboards.
4. Content and identity: a 52-item bilingual menu with stable SKUs; 66 generated food, branch, hero and social images; logo source files; two supplied display/body font families; and 50 one-timescale mobile screenshots.
5. Map visualization: five illustrative Cairo map preview assets were inserted into the relevant artboards. They show the intended appearance of branch selection, address picking, tracking and delivery zones. They are **not live Google Maps data**.
6. A proposed one-week development plan exists as planning material. It is not evidence of completed software or a committed public-launch date.

## Design and discovery approach

The project was structured from sitemap to user journeys, screen specifications and finally the UI system. The first 18 screens established the visual and interaction patterns; remaining screens were then laid out in the canvas. A screenshot is supplied for every English customer-app artboard.

The supplied visual reference is Roberta's Pizza. The planning notes explicitly call for faithful reuse of its visual language and the website's structure, with Bayt Elkaram content and imagery. This is a disclosed design reference, not a claim that the entire aesthetic was independently invented for this project. The customer app and administration flows extend the reference with ordering and operations components.

## What this handover proves

The package demonstrates product scope, journey design, detailed UI concepts, asset planning, and a coherent cross-product visual system. It does **not** prove deployed software, production integrations, live store listings, usability-study results, payment processing, live rider coordinates, or business performance.

## Practical review order

1. Open `START_HERE.html` at the package root for a visual overview and links to every exhibit.
2. Read the English documentation in numerical order. The scope and user-journey document makes the large canvas easier to understand.
3. Open the three main application/dashboard HTML exports and the website export. The exports are self-contained design canvases; the three main exports contain largely the same artboard library and differ in their initial canvas view and a small number of saved artboard states.
4. Use the 50 mobile PNG screenshots for quick slide decks or a portfolio case study. Use the HTML artboards for editable detail and admin/site review.
5. Consult `04-Original-Planning-Reference` only when exact source wording or historical rationale is needed. It preserves the original Arabic planning files.

## Material open decisions before development

- Verify actual branch names, coordinates, opening hours and delivery-zone geometry; the existing data is presentation content.
- Approve menu prices, recipes, allergen information, tax and delivery fees.
- Select and configure Google Maps, SMS/OTP, push and payment providers; provide the necessary accounts and restricted keys.
- Define fulfillment ownership and a source for live rider location. A rider interface or delivery-system integration is not among the original admin artboards.
- Decide whether the website will support browser ordering. The visitor-flow document describes it as a possible additional design, while the six finished website pages focus on discovery and conversion.
- Review all English/Arabic customer flows. Five Arabic artboards demonstrate direction and localization; they do not constitute a full translated product.

## Package map

| Folder | Content |
| --- | --- |
| `01-English-Documentation` | Curated English handover documents and content tables. |
| `02-Design-Artifacts` | The seven original editable HTML exports. |
| `03-Visual-Assets` | Mobile screenshots, generated images, maps, logos, font files and Illustrator source. |
| `04-Original-Planning-Reference` | Original detailed planning and design-system files, retained for traceability. |
| `05-Future-Development` | A separate English execution plan; not part of completed design work. |

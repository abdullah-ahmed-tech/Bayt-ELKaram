# Marketing Website — Scope, Pages and Visitor Journeys

The marketing website is a separate six-page design canvas at a 1440 px desktop reference width, with a centred content area up to 1200 px and full-width editorial sections. It is intended to introduce the brand and move visitors toward ordering, reservations, event enquiries or the mobile application. The current handover contains desktop artboards and responsive notes, **not an implemented Next.js website**.

The source brief explicitly requested the same page count, ordering and much of the section structure of the supplied Roberta's Pizza reference. Bayt Elkaram copy, restaurant concepts and generated image assets replace the original subject matter. This design reference is documented rather than presented as independently invented structure.

## Shared website elements

- Navigation: Home, Locations, Catering & Events, What's On, About Us, Contact.
- A fixed header that starts transparent over a media hero and becomes solid on scroll; text-only pages use a solid header from the beginning.
- Prominent delivery, pickup, reservation and catering actions where relevant.
- Footer newsletter sign-up, press/privacy/credits links, copyright and social links.
- Red star ribbon, checkered dividers, display typography, editorial photography and social Polaroid treatment from the visual system.
- English LTR is the designed version. A complete Arabic website is not part of the six supplied artboards.

## The six designed pages

| Page and route | Main sections in design order | Essential behavior or state |
| --- | --- | --- |
| **Home** `/` | Media hero and action cluster; short brand introduction; star divider; catering/delivery feature; branch locations; events and news; shop content; red call-to-action band; app download; social wall; newsletter/footer. | The header changes appearance after the hero. A static poster image should be shown while hero video loads or if it fails. |
| **Locations** `/locations` | Photo hero; five branch entries with address, contact, weekly hours, map link, menu and booking action. | A temporarily closed branch remains listed and labelled clearly. Links should open the correct phone, directions or booking destination. |
| **Catering & Events** `/catering-and-events` | Hero; three service modes; event imagery and copy; full enquiry form. | Validate required contact, event date and party-size fields inline; show unambiguous success and retry states. |
| **What's On** `/whats-on` | Media hero; branch filter; events/offers listing; related merchandise section. | A branch with no items shows a helpful empty message and route back to all branches. Failure to load content shows retry rather than being confused with an empty result. |
| **About Us** `/about-us` | Brand introduction; year-by-year milestone timeline; founder cards; footer. | Timeline stacks vertically on smaller screens. Milestone dates and founder information are example content pending real brand approval. |
| **Contact** `/contact` | Contact introduction and email; single-open FAQ accordion; media/partnership contact section; footer. | One FAQ answer opens at a time. Other enquiries route to an address or dedicated follow-up form. |

## Visitor journeys W1–W8

| ID | Journey | Target and open dependency |
| --- | --- | --- |
| W1 | A new visitor lands on Home, learns what the restaurant offers and chooses a next action. | Ordering, booking, event enquiry, app install or newsletter. The hero needs a fast image fallback. |
| W2 | The Delivery action opens a choice between app download and ordering in a browser. | **Browser ordering is described as a possible later design, outside the six finished page artboards.** Do not promise an active browser checkout until separately designed and built. |
| W3 | A visitor opens booking from the header or a specific branch. | Branch/date/time/party size and contact details should use the same reservation availability as the app and admin system. Closed branches offer another option. |
| W4 | A visitor reviews event services and sends a catering enquiry. | Required fields are validated and the visitor sees a success or network-failure message. |
| W5 | A visitor reads the brand story and founders, then uses the persistent header actions. | Historical dates, claims and people need real-world approval before publication. |
| W6 | A visitor compares the five branches and opens directions, calls or reserves. | A maintenance closure appears explicitly. A separate interactive website map was not required in the page design. |
| W7 | A visitor filters news/events by branch and may leave for the external merchandise destination. | Empty results and service errors have distinct treatment. External shop links require an actual destination. |
| W8 | A visitor reads FAQ content and contacts the business if the question is unresolved. | The FAQ accordion is single-expand; email or partnership contact is the escape route. |

## Deliberate content adaptations

The source planning notes document five adaptations where an exact subject equivalent did not make sense for Bayt Elkaram. Examples include replacing a frozen-food order action with pickup, and replacing a sister-brand promotion with a “Get the App” section. The larger page structure remains aligned with the supplied reference. The exact source rationale and page-by-page section tables are preserved in `04-Original-Planning-Reference/07-Website-Sitemap.md` and `09-Website-Wireframes-Spec.md`.

## Production content still to confirm

Branch addresses and hours; real booking and event policies; brand founding dates and founder identities; store badges and destinations; social/merchandise links; privacy/newsletter copy; and the relationship between website delivery actions and any future web-ordering experience.

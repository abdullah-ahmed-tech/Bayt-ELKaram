# Product Scope and User Journeys

This document is the English navigation map for the original sitemap and 16 flow diagrams. A screen or state in the sitemap is a design/planning item, not proof of an implemented feature. The canvas uses 85 distinct artboards to express 95 planned application/dashboard items; several related settings and states share an explicit pattern.

## Customer application — 56 screens and states

| Area | Planned screens and states |
| --- | --- |
| Onboarding and access (9) | Splash; language choice; three-slide onboarding; location permission; phone login; account creation; OTP confirmation; password recovery; guest entry. |
| Home and discovery (7) | Home; branch selector; all-branches map; search; search results; notification centre; offers and loyalty hub. |
| Menu and ordering (13) | Main menu; category listing; item detail and options; combo builder; cart; delivery/pickup/dine-in choice; address book; add address with map pin; delivery-time choice; promotion code; payment method; checkout review; order confirmation. |
| Order follow-up (6) | Live tracking; previous-order detail; order history; one-tap reorder; rate and review; order-specific support. |
| Reservations (5) | Branch choice; date/time/party size; confirmation; current/past reservations; modify or cancel. |
| Account (12) | Profile; edit details; saved addresses; saved payment methods; loyalty and rewards; favourites; language/notification settings; about; support; FAQ; terms/privacy; sign out/account deletion. |
| System states (4) | Offline; empty states; general loading/server error; required app update. |

## Administration dashboard — 39 screens and states

| Area | Planned screens and states |
| --- | --- |
| Access (3) | Sign in; two-factor check; password recovery. |
| Overview (2) | Key performance dashboard; branch comparison. |
| Live operations (3) | Order Kanban; order detail/status; reservation calendar/list. |
| Menu management (5) | Categories; items and filters; item editor; modifier groups; combo builder. |
| Branch management (3) | Branch list; branch editor; delivery zones and fees. |
| Customer relationship (4) | Customer list; customer profile; loyalty rules; segmentation. |
| Staff and permissions (4) | Staff list; employee editor; role/permission matrix; audit log. |
| Marketing (3) | Coupons; offers and banners; push campaigns. |
| Reviews and support (2) | Ratings moderation; support tickets. |
| Reporting (4) | Sales; item performance; customer behaviour; delivery performance. |
| Settings (6) | Organization/tax/currency; payment providers; notification templates; app content; language/localization; maps/SMS/payment integrations. |

## Customer journeys (F1–F10)

| ID | Journey and successful path | Important alternative or failure path |
| --- | --- | --- |
| F1 | First use: select language, view onboarding, choose branch, browse as guest, authenticate by phone/OTP at checkout, place first order. | Denied location uses manual branch choice; expired/incorrect OTP has resend and temporary lockout; closed nearest branch suggests an open alternative. |
| F2 | Delivery: choose category and item options, add to cart, select address and time, apply discount if eligible, choose payment, confirm, follow status, receive completion notification and rate. | Sold-out items disable purchase; failed card payment preserves cart; out-of-zone address offers another branch or pickup. |
| F3 | Pickup: select pickup branch/time, pay, receive a reference number, collect at the branch. | Early arrival shows remaining preparation time. |
| F4 | Dine-in reservation: choose branch/date/time/party size, confirm and receive reminder. | Full slot suggests another time or branch; late cancellation warning depends on an approved policy. |
| F5 | Reorder: open a previous order and add available items to the cart. | If items are unavailable, show an item-by-item availability review. |
| F6 | Promotion or rewards: enter a code or redeem points during checkout. | State the exact rejection reason, such as minimum order value. |
| F7 | Manage addresses: set location via map/GPS, add label and building details, save and assign a default. | Editing/deleting is supported; deleting the default requires choosing a replacement. |
| F8 | Cancel an order through order detail while policy permits. | New orders may cancel immediately; preparation may require branch approval and fees; dispatched/delivered orders route to support. |
| F9 | Raise an order-specific support ticket with issue type and optional image. | Some cases can receive automated compensation under a defined policy; others go to human support. |
| F10 | Guest versus member: browse without account and sign in only when committing to checkout. | Returning member signs in and resumes the same cart. |

## Administration journeys (F11–F16)

| ID | Journey and successful path | Key operational rule |
| --- | --- | --- |
| F11 | Branch manager reviews dashboard and live-order Kanban, moves orders through preparation and completion, then reviews daily sales. | Overdue orders are highlighted; each status change is controlled by role and branch. |
| F12 | Editor creates a bilingual item, image, category, price, modifiers and branch availability; saves draft, then publishes. | Drafts stay hidden from customers; published changes appear in the relevant branches. |
| F13 | General manager compares branch sales, orders and ratings, then drills into a weak branch and exports a report. | Branch filters and date ranges must match underlying transactions. |
| F14 | Support agent reviews a complaint and linked order, decides on full/partial refund, coupon or explanation, then closes the ticket. | Financial actions need permission and an audit trail. |
| F15 | Marketer creates a coupon, selects eligible branches and customers, schedules a push campaign, and later reviews uptake. | Preview and audience checks prevent accidental or duplicate sends. |
| F16 | Administrator invites a staff member and assigns role plus one or more branches. | A super administrator can access all branches; branch roles remain scoped. |

## Cross-product dependencies

1. Branch, menu, price and availability are shared data. Customer screens must reflect the administration source of truth.
2. Orders, payments and refunds need one authoritative state machine. A visual status change in the dashboard must correspond to a real backend event and customer update.
3. Maps show branches, address selection, delivery zones and potentially a rider route. The design preview does not include verified coordinates or an actual rider position feed.
4. Reservations appear in the customer application, administration dashboard and website flow; all three must use one availability model when developed.
5. The English UI is the base direction. The Arabic examples show RTL intent, but the full product needs localization work and review before an Arabic release claim.

For the original branching diagrams, see `04-Original-Planning-Reference/02-User-Flows.md` and the English visual artifact `02-Design-Artifacts/Bayt Elkaram User Flows.html`.

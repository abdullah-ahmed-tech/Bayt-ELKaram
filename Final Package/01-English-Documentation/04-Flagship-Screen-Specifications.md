# Flagship Screen Specifications

Eighteen screens established the layout and interaction patterns used across the wider canvas: 12 in the customer application at a 390 × 844 reference viewport and six in the dashboard at 1440 × 900. The finished HTML artboards take precedence over the text-only wireframe diagrams for **direction**: early diagrams were drawn RTL, then corrected to English-first LTR before final UI work.

## Customer application

| Screen | Main composition | Interaction, empty state or exception |
| --- | --- | --- |
| 1. Splash | Centered Bayt Elkaram wordmark on a clean white field, with minimal loading feedback. | The original spec caps its appearance around 1.5 seconds; connection failure leads to the offline state rather than leaving the user on the splash. |
| 2. Home | Active branch and notifications in the header; campaign hero; search; horizontal categories; popular items; reorder card; bottom navigation. | The active branch stays visible. A first-time customer sees discovery content in place of the reorder block. |
| 3. Branch Selector | Compact map, branch cards with distance and opening status, clear select actions. | Closed branches remain visible but disabled; manual search is available if location access fails. The inserted map is an illustrative preview. |
| 4. Branch Locator | Larger map with pins and a draggable branch-list sheet containing image, address, hours and call/directions actions. | The sheet should expose all branches without losing the map context. The current artboard map is an illustrative preview. |
| 5. Menu | Sticky category tabs, photo-led item rows/cards, concise description, price and quick add. | Simple items can be added quickly; items with required choices open their detail screen. Empty categories suggest another category. |
| 6. Item Detail | Large image, name, price, description, options/modifiers, notes and quantity, with a persistent Add to Cart action. | The displayed total updates with selections. Unavailable modifiers are disabled before checkout. |
| 7. Cart | Editable item lines, coupon entry, subtotal, delivery fee, total and a prominent checkout action. | Editing reopens the item with previous options preserved. An empty cart offers a clear route back to the menu. |
| 8. Checkout Review | Delivery/pickup address, timing, payment choice, collapsible order details, final total and confirm action. | Each key choice can be changed in context without restarting the entire checkout. |
| 9. Live Tracking | Route/status map, order-step indicator, ETA, rider contact and help. | Pickup replaces the rider map with preparation readiness. Live rider movement needs an operational location feed; the current map is a static preview. |
| 10. Reservation | Branch, date, time slots, party-size stepper and confirmation. | Full slots appear disabled; when all slots are full the next available day or branch is suggested. |
| 11. Profile | Customer identity and loyalty tier, with shortcuts to addresses, payment methods, rewards, favourites, language and support. | Loyalty status is immediately visible near the name. |
| 12. Loyalty | Prominent red points card, tier progress, redeemable rewards and points history. | Rules and balances require authoritative backend data during implementation. |

## Administration dashboard

| Screen | Main composition | Interaction, empty state or exception |
| --- | --- | --- |
| 13. Login | Brand mark, email/password form, reset link and subdued decorative frame. | Two-factor verification is part of the larger administration scope. |
| 14. Overview | Branch filter, revenue/order/average/rating tiles, sales-over-time chart, best sellers and branch comparison. | The branch filter must change every related metric consistently. |
| 15. Live Orders | Status-based Kanban with order summaries, elapsed time and operational alerts. | Overdue preparation highlights the affected card. Status movement must follow permissions and valid transitions. |
| 16. Item Editor | Bilingual names, image, description, category, price, modifiers and availability per branch, with draft/publish controls. | A draft is hidden from customers. Branch-specific availability is edited directly here. |
| 17. Branch Management | Branch list with live/open/maintenance state, order volume, quick status change and drill-down. | Emergency closing is possible from the list without opening a full edit form. |
| 18. Sales Reports | Date and branch selectors, trend and breakdown charts, sortable table and export control. | Export must match active filters when built. |

## Shared screen-state rules

- Loading is shown with skeletons that resemble the final layout.
- Network or server failure uses a plain-language message and retry action.
- Empty content includes a small illustration or concise explanation and an action to recover.
- English uses LTR positioning and directional icons; Arabic mirrors directional elements when enabled.
- These specifications are design intent. The accompanying PNGs and artboards show appearance; no functional prototype or deployed backend is included in the handover.

# Visual Design System

## Design intent and provenance

English, left-to-right screens are the primary design direction; Arabic is a secondary right-to-left mode. The supplied Roberta's Pizza design reference was adopted very closely for colour, typography, structural decoration and the six-page marketing-site framework. The Bayt Elkaram product introduces original ordering and administration patterns within those visual rules. This relationship should be disclosed when presenting the work.

The editable design-system canvas is `02-Design-Artifacts/Bayt Elkaram Design System.html`; CSS variables and token files are retained in `04-Original-Planning-Reference`.

## Core tokens

| Token | Value | Use |
| --- | --- | --- |
| Primary red | `#ED2023` | Main action, urgent emphasis, brand ribbons and active state. |
| Charcoal | `#2B2F36` | Primary text, outlines and secondary controls. |
| White | `#FFFFFF` | Surfaces and text on dark areas. |
| Black | `#000000` | High-contrast form boundaries. |
| Shadow grey | `#BFBFBF` | Disabled controls, low-priority separators. |
| Body font | Offset TM | Navigation, labels, forms and most headings. |
| Display font | Borensa | Large editorial and campaign headings. |
| Spacing unit | 4 px | Core rhythm; common sizes are 12, 16, 20, 24, 28, 32, 40, 44, 48, 64, 68, 96, 128 and 196 px. |
| Button radius | 7.2 px | Standard action buttons. |
| Pill radius | 9999 px | Chips and capsules. |
| Interactive shadow | `rgba(0,0,0,.25) 0 4px 4px` | Hover or active feedback, not permanent elevation. |
| Content width | 1200 px maximum | Centred desktop content; hero/ribbon sections may run full width. |

Typography scale: caption 14 px, small body 16 px, body 20 px, subheading 24 px, small heading 34 px, heading 54 px, large heading 80 px and display 120 px. English Offset TM text uses approximately `+0.04em` tracking; oversized Borensa display text uses approximately `-0.02em`.

## Structural elements

- **Red star band:** a full-width 80–120 px red divider with repeated white eight-point stars.
- **Checkered ribbon:** a 30–40 px charcoal/white border used to frame or divide sections.
- **Hand-drawn iconography:** white outlines, roughly 3–4 px stroke, placed on red or dark backgrounds. Restaurant-related subjects include a grill flame or skewer.
- **Social wall:** full-width red area, oversized display heading and slightly rotated white-frame image cards with a firm shadow.
- **Hero media:** full-bleed food/restaurant video or image, charcoal overlay and prominent actions.
- **Controls:** filled, outline and ghost calls to action, navigation, text input, hamburger menu and form states follow the same red/charcoal language.

The ordering application adds menu-item cards, category chips, quantity steppers, modifier groups, coupon fields, cart lines, order progress, branch cards, bottom sheets, five-tab navigation and feedback toasts. The administration dashboard adds data tables, Kanban cards, metric tiles, state badges and a left sidebar. These are needed for the product even though they are absent from the marketing-site reference.

## Direction and localization

- English defaults to LTR. The dashboard sidebar is on the left, the back arrow points left and the Home tab begins the bottom navigation on the left.
- Switching to Arabic should mirror layout and directional icons, while leaving SKU identifiers and Western digits legible. The original system names Lalezar for Arabic display and Cairo for Arabic body UI; those fonts are **not included among the supplied font binaries** and would need acquisition and verification before a full Arabic implementation.
- Five Arabic artboards are illustrative examples. A full Arabic product requires translation, responsive checks and state-by-state QA beyond those five screens.

## Experience principles

1. Show branch, availability, fees and final price before the customer commits.
2. Let a guest browse the entire catalogue; ask for sign-in at checkout.
3. Keep the active branch visible throughout the shopping flow.
4. Use red for the single most important action in a view; preserve strong typographic hierarchy.
5. Give loading skeletons, clear retry states and useful empty states instead of blank surfaces or raw server messages.

## Review checklist

- Consistent typography, spacing and button states across mobile, admin and website.
- Contrast and legibility on photo overlays, especially hero actions and banners.
- Every icon has a clear meaning and interactive controls have hover/focus/disabled states.
- All map artboards identify their imagery as illustrative; actual Google Maps integration is a future implementation task.
- The 50 mobile PNGs match the artboards visually; use the HTML exports for editable source.

# Proposed Implementation Plan — Not Yet Executed

This is an English handover of the proposed development approach. The supplied project currently contains planning, design artboards and assets, **not a coded customer app, dashboard, marketing website or backend**. The owner requested a one-week maximum execution attempt while working alone with AI tools and requiring every advertised function before public launch. Seven days can organize and test an intensive build attempt, but they cannot guarantee a complete, independently reviewed public release.

## Delivery principle

Build **vertical slices**. A story is complete only when its data model, NestJS endpoint, Flutter/Next.js interface, permissions, error states and test all work together on staging. OpenAPI is the shared API contract. No visual-only mock or unconsumed backend endpoint counts as an accepted feature.

The proposed applications are Flutter mobile, Next.js administration and website, with a NestJS service and PostgreSQL database. These are planned choices from the original overview plus an implementation proposal; no repository scaffold is included in the current handover.

## Seven one-day sprint sequence

| Day | Backend/data work | App, admin and website work | End-of-day proof |
| --- | --- | --- | --- |
| 1 | Repository structure; database migrations; OpenAPI; seeded, source-labelled branch and menu data; staff access; staging and error logging. | App/admin/site shells, shared visual tokens, navigation and locale framework. | Builds deploy automatically; mobile and admin read the same branch API. |
| 2 | Branches, hours, coverage, catalogue, per-branch prices and availability, search. | Branch, map, home, menu, item and search screens; admin branch/item editor; website branch data. | An availability change in admin appears in the customer app. |
| 3 | Modifiers, cart pricing, address, delivery quote, promotion rules, phone OTP, cash order creation. | Item customization, cart, address/pickup and checkout; live admin intake. | A delivery and a pickup order reach the dashboard; repeated submission creates no duplicate. |
| 4 | Order state transitions, notifications, history, payment gateway sandbox, webhooks and refunds under approved policy. | Live orders, customer history/status, payment failure recovery and cancellation. | Cash and electronic sandbox orders complete; cart survives payment failure. |
| 5 | Reservation capacity, rider assignment/location source, favourites, reorder, loyalty, ratings and support. | Reservation, tracking, loyalty, support and rider/admin controls. | Reservation collision prevented; real location source or a clearly limited status-only view. |
| 6 | Staff roles, audit, CRM, offers/campaigns, reports, settings and content/forms. | Remaining admin sections, six responsive website pages, forms and full Arabic review. | Reports reconcile to orders; enquiries reach operations; all visible calls to action have working destinations. |
| 7 | Feature freeze, backup/restore test, observability, security and production configuration. | Android/iOS/browser journeys, accessibility, content and store submission preparation. | Documented GO/NO-GO decision against the acceptance gates below. |

Day five and six are likely beyond a single person's capacity even with AI assistance. The order above is a critical-path attempt, not a promise that all features can be delivered in one week.

## External inputs required for full functionality

Verified branch coordinates/hours/delivery areas; approved menu and tax data; reservation, cancellation, refund and loyalty rules; restricted Google Maps keys with billing; OTP/SMS service; payment provider account and test/live credentials; notification setup; rider location source; hosting/domain; and Apple/Google developer accounts. These inputs cannot be inferred from visual designs.

The website's potential browser checkout is mentioned in a visitor flow but is **not among the six finished web page artboards**. It needs a separate design/build decision before being advertised as live.

## GO/NO-GO gate for public use

- Every advertised sitemap item and all essential journeys work on staging with authorized data. Shared screen patterns may cover multiple sitemap entries if their behaviors are actually implemented.
- Delivery/pickup and any advertised reservations can be accepted and fulfilled by a real branch; prices, taxes, discounts and refunds are correct; no duplicate charges or orders on retries.
- Maps and rider movement are genuine where shown as live; customers do not see illustrative coordinates as operational truth.
- Staff permissions are branch-scoped; OTP is rate-limited; secrets are protected; sensitive changes have audit events.
- End-to-end flows pass on intended Android/iOS devices and browsers in both advertised languages; load, network failure, backup restore and rollback are exercised.
- Store metadata and distribution requirements are met. Some new personal Google Play accounts require a closed test with 12 testers for 14 continuous days before production access, so public Android-store launch may be impossible within the seven-day window regardless of code completion.

If a gate fails, the result is a test build or closed beta with a named gap—not a public release advertised as complete.

## Reference links

- [NestJS OpenAPI](https://docs.nestjs.com/openapi/introduction), [NestJS testing](https://docs.nestjs.com/fundamentals/testing).
- [Flutter testing](https://docs.flutter.dev/testing/overview), [Flutter internationalization](https://docs.flutter.dev/ui/internationalization).
- [Next.js testing](https://nextjs.org/docs/app/guides/testing).
- [Google Maps for Flutter prerequisites](https://developers.google.com/maps/flutter-package/overview).
- [Google Play testing requirements for newer personal accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB), [Apple TestFlight overview](https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/).

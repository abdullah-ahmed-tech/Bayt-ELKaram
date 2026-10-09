# Bayt Elkaram map previews

These five PNGs are **illustrative design previews** for the original Appifact
canvas. They are not Google Maps tiles, verified street geometry, live branch
locations, navigation, or delivery coverage.

| Preview | Artboard |
| --- | --- |
| `branch-selector.png` | `BranchSelector.dc.html` |
| `branch-locator.png` | `BranchLocator.dc.html` |
| `add-address.png` | `AddAddress.dc.html` |
| `live-tracking.png` | `LiveTracking.dc.html` |
| `delivery-zones.png` | `DashDeliveryZones.dc.html` |

The map backgrounds are stored as editable canvas assets inside each of the
three original mobile/admin HTML exports. Pins, labels, controls, route status,
and delivery zone rings remain separate HTML/SVG layers on their artboards.

To change the preview artwork, edit `generate_maps.py`, run it, then run
`node apply_maps.js`. The second script updates all three exports and can be
run again without duplicating artboards or assets.

For actual Google Maps integration, the implementation will need a restricted
Maps API key, billing enabled, verified branch coordinates, customer address
coordinates, rider position updates, and approved delivery-zone geometry.
Replace the illustrative background layer in each artboard with the relevant
Google Maps view. Live tracking and address selection also need application
logic; these HTML exports are static design canvases.

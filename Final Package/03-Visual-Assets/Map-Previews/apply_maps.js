/** Embed the map previews in all three editable Appifact canvas exports. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EXPORTS = [
  'Bayt Elkaram Mobile App.html',
  'Bayt Elkaram Mobile App (Arabic).html',
  'Bayt Elkaram Admin Dashboard.html',
];
const ASSETS = {
  'map-branch-selector.png': 'branch-selector.png',
  'map-branch-locator.png': 'branch-locator.png',
  'map-add-address.png': 'add-address.png',
  'map-live-tracking.png': 'live-tracking.png',
  'map-delivery-zones.png': 'delivery-zones.png',
};

function between(text, start, end, replacement, name) {
  const a = text.indexOf(start);
  const b = a < 0 ? -1 : text.indexOf(end, a + start.length);
  if (a < 0 || b < 0 || text.indexOf(start, a + start.length) >= 0) {
    throw new Error(`Map region not uniquely found in ${name}`);
  }
  return text.slice(0, a) + replacement + text.slice(b);
}

function pin(left, top, color, size = 27) {
  return `<div style="position:absolute;left:${left};top:${top};transform:translate(-50%,-100%);filter:drop-shadow(0 2px 3px rgba(31,41,55,.32));z-index:2;line-height:0"><svg width="${size}" height="${size+6}" viewBox="0 0 28 34" fill="none" aria-hidden="true"><path d="M14 32S2 20.2 2 14a12 12 0 1 1 24 0c0 6.2-12 18-12 18Z" fill="${color}" stroke="#fff" stroke-width="2"/><circle cx="14" cy="14" r="4.6" fill="#fff"/></svg></div>`;
}

function img(name) {
  return `<img src="${name}" alt="Illustrative Greater Cairo map preview" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;"/>`;
}

function control(symbol, style) {
  return `<div style="${style};width:34px;height:34px;background:#fff;border-radius:7px;box-shadow:0 2px 7px rgba(31,41,55,.18);display:flex;align-items:center;justify-content:center;color:#4a5660;font:700 22px Arial,sans-serif;z-index:3">${symbol}</div>`;
}

const mini = `<div style="margin:0 20px 20px;height:150px;border-radius:14px;background:#f5f4f0;position:relative;overflow:hidden;border:1px solid #e5e4df;box-sizing:border-box;">
    ${img('map-branch-selector.png')}
    ${pin('19%','67%','#7a7368',22)}
    ${pin('43%','57%','#ed2023',29)}
    ${pin('83%','61%','#2b2f36',22)}
    <div style="position:absolute;left:41%;top:62%;transform:translateX(-50%);background:#fff;color:#2b2f36;border-radius:5px;padding:3px 6px;font-size:10px;font-weight:700;box-shadow:0 1px 5px rgba(0,0,0,.2);z-index:3;white-space:nowrap;">Mohandessin</div>
    ${control('+','position:absolute;right:9px;bottom:45px;')}
    ${control('−','position:absolute;right:9px;bottom:9px;')}
  </div>

  `;

const locator = `<div dir="ltr" style="width: 390px; height: 844px; font-family: 'Offset TM',sans-serif; color: #2b2f36; display: flex; flex-direction: column; position: relative; overflow: hidden; background-color: #f5f4f0">
  ${img('map-branch-locator.png')}
`;
const locatorPins = `
  ${pin('22%','20%','#7a7368',25)}
  ${pin('35%','49%','#ed2023',34)}
  ${pin('82%','45%','#2b2f36',27)}
  ${pin('69%','61%','#2b2f36',24)}
  <div style="position:absolute;left:36%;top:49%;transform:translate(0,-120%);background:#fff;border-radius:7px;padding:6px 9px;font-size:11px;font-weight:800;box-shadow:0 2px 9px rgba(0,0,0,.19);z-index:2;white-space:nowrap;">Mohandessin Branch</div>
  ${control('+','position:absolute;right:16px;top:394px;')}
  ${control('−','position:absolute;right:16px;top:431px;')}
  <div style="position:absolute;right:16px;top:481px;width:36px;height:36px;background:#fff;border-radius:7px;box-shadow:0 2px 7px rgba(31,41,55,.18);display:flex;align-items:center;justify-content:center;z-index:3;"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="#4a5660" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="4" fill="#4285f4" stroke="#fff" stroke-width="1.5"/></svg></div>

  `;

const addressMap = `<div style="height:280px;background:#f5f4f0;position:relative;overflow:hidden;flex-shrink:0;">
    ${img('map-add-address.png')}
    <div style="position:absolute;left:50%;top:50%;width:18px;height:18px;transform:translate(-50%,-50%);border:2px solid #fff;border-radius:50%;background:rgba(237,32,35,.2);box-shadow:0 0 0 8px rgba(237,32,35,.11);z-index:1;"></div>
    ${pin('50%','50%','#ed2023',34)}
    <div style="position:absolute;left:50%;bottom:13px;transform:translateX(-50%);background:#fff;border-radius:6px;padding:7px 10px;box-shadow:0 2px 8px rgba(0,0,0,.18);font-size:11px;font-weight:700;white-space:nowrap;">Move map to set your location</div>
    <div style="position:absolute;top:24px;left:20px;width:36px;height:36px;border-radius:50%;background:#fff;box-shadow:0 2px 7px rgba(0,0,0,.16);display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#2b2f36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div style="position:absolute;right:14px;bottom:49px;width:34px;height:34px;background:#fff;border-radius:7px;box-shadow:0 2px 7px rgba(0,0,0,.18);display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="#4a5660" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="4" fill="#4285f4" stroke="#fff" stroke-width="1.5"/></svg></div>
  </div>
  `;

const trackingMap = `<div style="height:420px;background:#f5f4f0;position:relative;overflow:hidden;flex-shrink:0;">
    ${img('map-live-tracking.png')}
    <div style="position:absolute;top:24px;left:20px;width:36px;height:36px;border-radius:50%;background:#fff;box-shadow:0 2px 7px rgba(0,0,0,.16);display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#2b2f36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div style="position:absolute;top:24px;right:18px;background:#fff;border-radius:7px;padding:9px 12px;box-shadow:0 2px 7px rgba(0,0,0,.16);font-size:12px;font-weight:800;">15 min away</div>
    <div style="position:absolute;left:50%;top:47%;transform:translate(18px,-50%);background:#fff;border-radius:6px;padding:5px 7px;box-shadow:0 2px 6px rgba(0,0,0,.16);font-size:10px;font-weight:700;">Mahmoud is here</div>
  </div>`;

const zonesMap = `<div style="height:420px;border-radius:12px;background:#f5f4f0;position:relative;overflow:hidden;border:1px solid #e5e4df;box-sizing:border-box;">
        ${img('map-delivery-zones.png')}
        <svg viewBox="0 0 650 420" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;"><circle cx="300" cy="210" r="177" fill="rgba(43,47,54,.07)" stroke="rgba(43,47,54,.55)" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="300" cy="210" r="88" fill="rgba(237,32,35,.13)" stroke="#ed2023" stroke-width="3" stroke-dasharray="8 5"/></svg>
        ${pin('46%','50%','#ed2023',33)}
        <div style="position:absolute;left:53%;top:38%;background:#fff;color:#ed2023;border-radius:5px;padding:5px 7px;font-size:11px;font-weight:800;box-shadow:0 1px 5px rgba(0,0,0,.17);z-index:2;">0–3 km</div>
        <div style="position:absolute;left:69%;top:68%;background:#fff;color:#2b2f36;border-radius:5px;padding:5px 7px;font-size:11px;font-weight:800;box-shadow:0 1px 5px rgba(0,0,0,.17);z-index:2;">3–6 km</div>
        ${control('+','position:absolute;right:13px;top:13px;')}
        ${control('−','position:absolute;right:13px;top:50px;')}
      </div>
      `;

function updateFiles(files) {
  const out = {...files};
  for (const [key, file] of Object.entries(ASSETS)) {
    out[key] = fs.readFileSync(path.join(__dirname, file)).toString('base64');
  }
  if (!out['BranchSelector.dc.html'].includes('map-branch-selector.png')) out['BranchSelector.dc.html'] = between(out['BranchSelector.dc.html'],
    '<div style="margin:0 20px 20px;height:150px;',
    '<div style="display:flex;flex-direction:column;gap:12px;padding:0 20px 24px;">',
    mini, 'BranchSelector');
  if (!out['BranchLocator.dc.html'].includes('map-branch-locator.png')) {
    let loc = out['BranchLocator.dc.html'];
    loc = between(loc, '<div dir="ltr" style="width: 390px; height: 844px;',
      '<div style="position:absolute;top:28px;', locator, 'BranchLocator wrapper');
    loc = between(loc, '<svg width="26" height="26"',
      '<div style="position:absolute;bottom:0;', locatorPins, 'BranchLocator pins');
    out['BranchLocator.dc.html'] = loc;
  }
  if (!out['AddAddress.dc.html'].includes('map-add-address.png')) out['AddAddress.dc.html'] = between(out['AddAddress.dc.html'],
    '<div style="height:280px;background:', '<div style="flex:1;padding:24px 20px;',
    addressMap, 'AddAddress');
  if (!out['LiveTracking.dc.html'].includes('map-live-tracking.png')) out['LiveTracking.dc.html'] = between(out['LiveTracking.dc.html'],
    '<div style="height: 420px; background:', '<div style="flex:1;background:#ffffff;',
    trackingMap, 'LiveTracking');
  if (!out['DashDeliveryZones.dc.html'].includes('map-delivery-zones.png')) out['DashDeliveryZones.dc.html'] = between(out['DashDeliveryZones.dc.html'],
    '<div style="height:420px;border-radius:12px;background:',
    '<div style="background:#fff;border:1px solid #e7e0d4;',
    zonesMap, 'DashDeliveryZones');
  return out;
}

for (const name of EXPORTS) {
  const file = path.join(ROOT, name);
  const original = fs.readFileSync(file, 'utf8');
  const match = original.match(/(<script type="application\/json" id="appifact-doc">\s*)([\s\S]*?)(\s*<\/script>)/);
  if (!match) throw new Error(`Appifact document not found: ${name}`);
  const doc = JSON.parse(match[2]);
  const before = Object.keys(doc.content.files).length;
  const added = Object.keys(ASSETS).filter(key => !(key in doc.content.files)).length;
  doc.content.files = updateFiles(doc.content.files);
  const payload = JSON.stringify(doc).replace(/</g, '\\u003c');
  const updated = original.replace(match[0], match[1] + payload + match[3]);
  // Verify the serialized canvas before replacing the original export.
  const verify = JSON.parse(updated.match(/<script type="application\/json" id="appifact-doc">\s*([\s\S]*?)\s*<\/script>/)[1]);
  if (Object.keys(verify.content.files).length !== before + added) throw new Error(`Asset check failed: ${name}`);
  for (const artboard of ['BranchSelector','BranchLocator','AddAddress','LiveTracking','DashDeliveryZones']) {
    if (!verify.content.files[`${artboard}.dc.html`].includes('map-')) throw new Error(`Map missing: ${name}/${artboard}`);
  }
  fs.writeFileSync(file, updated);
  console.log(`${name}: ${before} → ${Object.keys(verify.content.files).length} canvas files`);
}

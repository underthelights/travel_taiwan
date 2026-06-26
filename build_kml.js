// data.js 로부터 Google My Maps import용 KML 생성
// 사용: node build_kml.js   ->  taiwan_trip.kml
const fs = require('fs');
const code = fs.readFileSync(__dirname + '/data.js', 'utf8');
const window = {};
eval(code);
const T = window.TRIP;

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const clean = s => String(s || '').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F]/gu,'').replace(/<\/?b>/g,'').replace(/\s+/g,' ').trim();

let styles = '';
[1,2,3].forEach(d=>{
  styles += `  <Style id="day${d}">
    <IconStyle><color>${T.kmlColor[d]}</color><scale>1.1</scale>
      <Icon><href>http://maps.google.com/mapfiles/kml/paddle/${d}.png</href></Icon>
    </IconStyle>
    <LineStyle><color>${T.kmlColor[d]}</color><width>3</width></LineStyle>
  </Style>\n`;
});

let folders = '';
[1,2,3].forEach(d=>{
  const list = T.places.filter(p=>p.day===d);
  let placemarks = '';
  list.forEach((p,i)=>{
    const desc = [
      `Time ${p.time} · 머무는 시간 ${p.stay}`,
      `${clean(p.cat)}`,
      ``,
      `Move: ${clean(p.move.mode)} ${p.move.min} ${p.move.cost!=='-'?'· '+p.move.cost:''}`,
      `   (${p.move.note})`,
      ``,
      clean(p.desc),
      ``,
      `Tip ${clean(p.tips)}`,
      ``,
      `Address ${p.addr}`,
    ].join('\n');
    placemarks += `    <Placemark>
      <name>${i+1}. ${esc(p.name)}</name>
      <description><![CDATA[${desc}]]></description>
      <styleUrl>#day${d}</styleUrl>
      <Point><coordinates>${p.lng},${p.lat},0</coordinates></Point>
    </Placemark>\n`;
  });
  // 동선 라인
  const coords = list.map(p=>`${p.lng},${p.lat},0`).join(' ');
  placemarks += `    <Placemark>
      <name>${T.dayLabel[d]} 동선</name>
      <styleUrl>#day${d}</styleUrl>
      <LineString><tessellate>1</tessellate><coordinates>${coords}</coordinates></LineString>
    </Placemark>\n`;

  folders += `  <Folder>
    <name>${esc(T.dayLabel[d])} — ${esc(T.dayTheme[d])}</name>
${placemarks}  </Folder>\n`;
});

const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>${esc(T.meta.title)} (${esc(T.meta.sub)})</name>
  <description><![CDATA[진에어 타이중 IN/OUT · 왕복 ${T.fare} · 수하물 15kg 포함]]></description>
${styles}${folders}</Document>
</kml>`;

fs.writeFileSync(__dirname + '/taiwan_trip.kml', kml, 'utf8');
console.log('taiwan_trip.kml 생성 완료 (' + T.places.length + ' 장소, 3일)');

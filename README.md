# 대만여행 2박3일 플래너

진에어 타이중(RMQ) IN/OUT · 8/1~8/3 · 지도 기반 인터랙티브 플래너

## 라이브
GitHub Pages: **https://underthelights.github.io/travel_taiwan/**

## 구성
| 파일 | 설명 |
|------|------|
| `index.html` | 홈 — 항공·예산 요약 + 전체 지도 |
| `day.html?d=1/2/3` | 일자별 상세 — 지도 + 트리플식 구간 이동(교통·시간·요금) + 타임라인 |
| `info.html` | 준비물·수하물·현금/통신·지도 저장 체크리스트 |
| `data.js` | 모든 일정 데이터 (단일 소스) |
| `taiwan_trip.kml` | 개인 구글맵(My Maps) import용 |
| `build_kml.js` | `node build_kml.js` → KML 재생성 |

## 내 구글맵에 넣기
1. `taiwan_trip.kml` 다운로드
2. [Google My Maps](https://www.google.com/maps/d/) → 새 지도 → 가져오기 → KML 업로드
3. 1·2·3일차가 레이어로 분리되어 들어감

지도는 Leaflet + OpenStreetMap 기반.

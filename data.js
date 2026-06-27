// ===== 공유 여행 데이터 (상세판) =====
window.TRIP = {
  meta: {
    title: 'The Summer of Taipei',
    sub: '비가 갠 8월, 서쪽 도시축을 따라 타이베이에 닿는 짧은 여름 여행.',
  },

  // ===== 하네스: 상태 모델 =====
  // 모든 장소/결정은 아래 3단계 중 하나. 현재는 '항공권'만 확정.
  statusMeta: {
    confirmed: {label:'확정', icon:'✅', color:'#5ed09a'},
    candidate: {label:'후보', icon:'🟡', color:'#ffb13e'},
    tbd:       {label:'미정', icon:'⬜', color:'#7f8aa0'},
  },
  // 항공권에 묶여 이미 확정된 장소(공항 도착/출국)만 confirmed. 나머지는 candidate.
  confirmedPlaceIds: [1, 18],
  tbdPlaceIds: [],

  // ===== 하네스: 장소 분류축 (메뉴 세분화 [일차] × [분류]) =====
  // 각 장소의 kind 필드가 이 6종 중 하나. 자유서술 cat은 표시용, kind는 통제값(필터·그룹용).
  placeKindMeta: {
    flight: {label:'비행기', icon:'FL', color:'#b39ddb'}, // 공항 도착·출국 (항공)
    move:  {label:'이동', icon:'MV', color:'#7aa2ff'}, // 고속철·MRT·버스·택시 환승
    food:  {label:'식',   icon:'FD', color:'#ff8a8a'}, // 식사·야시장·디저트
    stay:  {label:'숙소', icon:'HT', color:'#5ed09a'}, // 체크인·숙박
    sight: {label:'관광', icon:'SG', color:'#3ea6ff'}, // 명소·사원·전망대·산책
    shop:  {label:'쇼핑', icon:'SH', color:'#ffb13e'}, // 쇼핑·기념품
  },

  dayColor: {1:'#2bb673', 2:'#4aa8ff', 3:'#ff8a3d'},
  kmlColor: {1:'ff73b62b', 2:'ffffa84a', 3:'ff3d8aff'}, // KML: aabbggrr
  dayLabel: {1:'DAY 01 · 8/1(토)', 2:'DAY 02 · 8/2(일)', 3:'DAY 03 · 8/3(월)'},
  dayTheme: {
    1:'타이중 도착 → 신주 미식 → 닝샤 야시장',
    2:'타이베이 시티 데이 (융캉제·101·라오허)',
    3:'완화·시먼딩 → 타이중 귀국',
  },
  flight: [
    {dir:'가는편', code:'LJ0735', pnr:'H8XWL0', status:'발권완료', route:'인천 T2 → 타이중 RMQ T1', time:'2026.08.01(토) 07:55 → 09:40', extra:'2h45 직항 · 수하물 15kg · 예약 2026.06.27'},
    {dir:'오는편', code:'LJ0738', pnr:'H8XWKZ', status:'발권완료', route:'타이중 RMQ T1 → 인천 T2', time:'2026.08.03(월) 17:30 → 21:15', extra:'2h45 직항 · 수하물 15kg · 예약 2026.06.27'},
  ],
  fare: '₩298,700',
  budget: [
    ['항공 (수하물 포함)', '₩299,000'],
    ['숙박 2박 (타이베이 3성)', '₩170,000'],
    ['고속철 (타이중↔신주↔타이베이)', '₩70,000'],
    ['식비 3일', '₩90,000'],
    ['입장·교통·기타', '₩80,000'],
  ],
  budgetTotal: '≈ ₩709,000',

  homeContent: {
    reservations: [
      {item:'항공권', status:'완료', tone:'done', detail:'진에어 LJ0735/0738 발권완료. 타이중 IN/OUT, 위탁 수하물 15kg 포함.'},
      {item:'숙소', status:'도시 확정', tone:'doing', detail:'2박은 타이베이. 시먼딩·베이먼·타이베이역 서쪽 후보를 비교하고, 호텔 확정 후 체크인 핀과 귀국날 짐 동선을 다시 맞춘다.'},
      {item:'고속철', status:'미정', tone:'todo', detail:'Day 1은 도착 지연 가능성이 있어 유동적으로, Day 3 타이베이→타이중만 시간 지정 권장.'},
      {item:'eSIM', status:'미정', tone:'todo', detail:'출국 전에 사두면 RMQ 도착 직후 공항→HSR 이동과 구글맵 확인이 안정적이다.'},
      {item:'101 전망대', status:'선택', tone:'option', detail:'날씨가 좋고 체력이 남으면 석양 시간대로 넣는다. 비 오면 쇼핑몰·식사 중심으로 전환.'},
      {item:'딘타이펑 예약', status:'필요 여부', tone:'watch', detail:'본점은 대기 전제로 잡는다. 일정이 밀리면 번호표 후 융캉제 산책, 더 밀리면 시먼 대안으로 변경.'},
    ],
    rainPlan: [
      {day:'Day 1', plan:'TSMC 외관과 동문성 산책을 줄이고, 신주 성황묘 주변 식사와 타이베이 체크인에 집중.'},
      {day:'Day 2', plan:'중정기념당 야외 시간을 줄이고, 딘타이펑·101몰·실내 카페·라오허 야시장 짧은 방문으로 재배치.'},
      {day:'Day 3', plan:'보피랴오 사진 코스를 짧게 보고, 시먼딩 실내 쇼핑과 기념품 구매를 우선. 귀국 이동은 그대로 유지.'},
    ],
    cutPlan: [
      {when:'Day 1 입국 지연', keep:'성황묘 점심, 타이베이 체크인, 닝샤 야시장', drop:'TSMC 과학단지 또는 동문성'},
      {when:'Day 2 오전 지연', keep:'딘타이펑, 101, 라오허', drop:'중정기념당 체류 시간'},
      {when:'Day 3 지연', keep:'시먼딩 점심, 타이베이역 이동, HSR 남하', drop:'보피랴오 또는 룽산쓰 체류 시간'},
    ],
    cashMoments: [
      {where:'야시장', note:'닝샤·라오허·신주 성황묘는 소액 현금이 편하다. NT$100/500 위주로 준비.'},
      {where:'로컬 식당', note:'합석과 현장 주문이 많다. 카드 가능 여부를 기대하지 않는 쪽이 안전하다.'},
      {where:'택시/공항 이동', note:'앱 호출이 안 되거나 카드 결제가 애매할 때를 대비해 비상 현금을 남긴다.'},
      {where:'기념품 소형 매장', note:'누가크래커, 차, 편의점 외 소규모 매장은 현금 결제 가능성을 열어둔다.'},
    ],
    timeGuards: [
      {label:'귀국날 타이베이 출발', value:'13:00 전후', note:'늦어도 이 시간대에는 HSR 남하를 시작하는 기준.'},
      {label:'HSR 타이중역 도착', value:'14:00 전후', note:'신우일역에서 RMQ 공항까지 택시 이동 시간을 남긴다.'},
      {label:'RMQ 공항 도착', value:'15:00 목표', note:'17:30 출국편 기준 체크인·수하물·보안검색 여유 확보.'},
    ],
  },

  // ===== 하네스: 결정 큐 (Decision Queue) =====
  // 여행을 하나씩 정해가는 엔진. status: todo(정할 차례) → doing(정하는 중) → done(확정).
  // 우선순위(prio): 1=먼저, 숫자 클수록 나중. cat은 사용자 우선순위 4축에 매핑.
  decisionCat: {
    food:   {label:'미식',     icon:'🍜', color:'#ff8a8a'},
    route:  {label:'동선·숙소', icon:'🏨', color:'#5ed09a'},
    sight:  {label:'관광',     icon:'🗼', color:'#3ea6ff'},
    budget: {label:'예산',     icon:'💰', color:'#ffb13e'},
    prep:   {label:'준비물',   icon:'🎒', color:'#b39ddb'},
  },
  decisions: [
    {id:'flight', cat:'budget', status:'done', prio:1, title:'항공권 예약',
     deadline:'완료', note:'진에어 LJ0735/0738 · 타이중 IN/OUT · 8/1~8/3 · 1인 · ₩298,700 확정.', options:[]},
    {id:'stay', cat:'route', status:'doing', prio:1, title:'타이베이 숙소 2박 (8/1·8/2)',
     deadline:'성수기 — 빠를수록', note:'숙박 도시는 타이베이로 결정. 권역은 시먼딩/베이먼/타이베이역 서쪽을 1순위로 보고, 호텔 확정 전까지 숙소 핀은 candidate 유지.',
     options:['시먼딩·베이먼 사이 (1순위)', '타이베이 메인역 서쪽/남쪽', '중산·솽롄', '둥먼·융캉제']},
    {id:'thsr', cat:'route', status:'doing', prio:2, title:'고속철(THSR) 타이중↔타이베이 + 예매',
     deadline:'탑승 전', note:'조사 기준 결론은 THSR 패스보다 구간권. 타이중→신주→타이베이→타이중 합계가 짧아 패스는 손해. 귀국날 타이베이→타이중만 시간 지정 권장. ※주의: 타이중 공항(RMQ)은 HSR역과 떨어져 있어 공항↔신우일역 이동이 별도로 필요.',
     options:['클룩/KKday 외국인 THSR 구간권(우선)', 'T Express 공식앱 직접 예매', 'Day1 짧은 구간 현장 발권/자유석', '저렴: 타철 자강호 2h·약 NT$375']},
    {id:'food', cat:'food', status:'todo', prio:2, title:'필수 맛집 전략',
     deadline:'딘타이펑은 미리', note:'오픈런(푸항또우장)·앱예약(딘타이펑)·야시장 현장 중 조합.',
     options:['딘타이펑 앱 예약', '푸항또우장 오픈런 (8시 전)', '야시장 위주 현장']},
    {id:'sidetour', cat:'sight', status:'todo', prio:3, title:'근교투어 (지우펀·예류) 여부',
     deadline:'가면 사전예약', note:'2박3일이 빡빡 — 넣으면 하루 통째로 빠짐. 갈지부터 결정.',
     options:['지우펀+예류 1일투어', '안 감 (시내 집중)']},
    {id:'simcard', cat:'prep', status:'todo', prio:3, title:'EasyCard·교통패스·유심/eSIM',
     deadline:'출국 전/현지', note:'교통은 EasyCard 충전식 사용이 기준. Taipei Metro/FunPASS/TPASS/THSR Pass는 현재 루트 기준 대부분 손해. eSIM은 미리 사도 됨.',
     options:['EasyCard 현지 구입+NT$500 충전', 'eSIM 미리 구매', '현지 유심', '포켓와이파이']},
    {id:'cash', cat:'budget', status:'todo', prio:4, title:'환전·현금(NT$)',
     deadline:'출국 전', note:'야시장·로컬식당은 카드 안 됨. 소액권 필수.',
     options:['국내 환전', '현지 ATM 인출', '일부 환전 + 현지 ATM']},
    {id:'airport-move', cat:'route', status:'doing', prio:3, title:'타이중 공항(RMQ) ↔ 고속철역(신우일) 이동',
     deadline:'당일', note:'RMQ↔HSR 타이중역(신우일)은 떨어져 있음. 156번 버스가 공항→신우일역 직통(타74 경유). 도착·귀국 양일 모두 필요. 귀국날은 17:30 비행 → 15:00 공항 → 13:00 타이베이 출발로 역산.',
     options:['156번 버스 직통 40~50분 (가장 쌈)', '택시/공항픽업 NT$850~1,200 · 30~40분 (빠름)']},
  ],

  priority: [
    '진에어 항공권 (성수기 → 빨리 확정)',
    '타이베이 숙소 2박 (메인역·시먼딩 근처 추천)',
    '고속철(THSR) — 패스보다 외국인 구간권 + 귀국편 시간 지정',
    '지우펀·예류 근교투어 가면 사전 예약',
    'EasyCard는 현지 구입 후 충전, 단기 무제한 패스는 재계산 후 결정',
  ],
  tips: [
    ['공항', '타이중 RMQ는 작음. 입국 빠르고, 택시·버스로 고속철역(신우일) 이동 후 북상.'],
    ['EasyCard(悠遊卡)', '지하철·버스·편의점 다 됨. 이번 일정은 무제한 패스보다 EasyCard 충전식이 유리.'],
    ['현금', '야시장·로컬식당은 카드 안 되는 곳 많음. NT$ 현금 꼭 챙기기.'],
    ['푸항또우장(阜杭豆漿)', '타이베이 아침 인기 No.1. 오픈런 필수, 9시 넘으면 줄 폭발.'],
    ['신주/TSMC', '반도체 성지. 단지 외관·과학단지+성황묘 야시장 먹거리 콤보.'],
    ['고속철 vs 일반', '빠른 건 고속철(46~60분, ₩27,900), 싼 건 타철 자강호(2h).'],
    ['수하물', '위탁 15kg + 기내 10kg 별도. 초과 시 온라인 사전구매가 공항보다 쌈. 보조배터리는 기내만.'],
  ],
  prepInfo: {
    checklist: [
      {title:'서류', items:['여권 유효기간 확인', '진에어 예약번호 H8XWL0/H8XWKZ 저장', '숙소 예약 확정 후 바우처 저장', '여행자보험 가입 여부 결정']},
      {title:'돈', items:['NT$ 현금 준비 또는 현지 ATM 계획', '소액권 위주로 나누기', '해외결제 카드 1~2장', '비상용 원화/카드 분리 보관']},
      {title:'통신', items:['eSIM 또는 유심 구매', '로밍 차단/설정 확인', '구글맵 오프라인 저장', '중요 링크 카톡/메모앱에 백업']},
      {title:'날씨', items:['접이식 우산', '얇은 겉옷', '땀 닦을 손수건/티슈', '걷기 편한 신발']},
      {title:'전자기기', items:['보조배터리 기내 반입', 'USB-C 케이블', '충전기', '이어폰']},
      {title:'상비품', items:['개인 상비약', '밴드', '소화제', '마스크/물티슈']},
    ],
    baggage: [
      {title:'위탁 수하물', items:['15kg 무료 포함', '세 변 합 203cm 이하', '단일 가방 32kg 이하', '초과분은 공항보다 온라인 사전구매가 유리']},
      {title:'기내 수하물', items:['10kg, 세 변 합 115cm 이하', '노트북가방 1개 별도 가능', '보조배터리·라이터는 위탁 금지', '액체는 100ml 이하, 1L 지퍼백 1개']},
    ],
    todo: [
      ['숙소', '시먼딩·베이먼·타이베이역 후보 중 호텔 확정'],
      ['교통', '귀국날 HSR 시간 지정 여부 결정'],
      ['통신', 'eSIM/유심 선택'],
      ['현금', 'NT$ 환전 또는 ATM 계획'],
      ['지도', 'KML을 내 구글맵에 import'],
    ],
    mapSteps: [
      'taiwan_trip.kml 다운로드',
      'Google My Maps에서 새 지도 만들기',
      '가져오기에서 KML 업로드',
      '1·2·3일차 레이어와 핀 확인',
    ],
  },

  // ===== 숙소 후보 (타이베이 2박) =====
  stayInfo: {
    updated:'2026-06-27 기준 3명 1실 공개 객실 정보 확인',
    verdict: {
      title:'타이베이에서 3명 1실로 2박',
      area:'시먼딩·베이먼·타이베이역 서쪽',
      note:'이번 숙소는 3명 1실 기준으로 본다. 트리플룸, 패밀리룸, 쿼드룸이 없거나 엑스트라베드만 애매하게 가능한 더블룸은 제외한다. 위치는 시먼딩·베이먼·타이베이역 서쪽이 1순위다.',
    },
    roomNeed: [
      {k:'인원', v:'성인 3명 · 1실', desc:'예약 사이트에서 기본 2명으로 검색하면 안 된다. 처음부터 3명으로 넣고 총액 비교.'},
      {k:'객실', v:'Triple / Family / Quad', desc:'더블룸에 3명 투숙 가능한지 애매하면 제외. 침대 구성까지 확인.'},
      {k:'침대', v:'3싱글 or 더블+싱글', desc:'2더블/쿼드도 가능하지만 방값이 튈 수 있다. 3명이 각자 편한 구성이 우선.'},
      {k:'체크', v:'세금 포함 총액', desc:'3인실은 재고가 적어 가격 변동이 크다. 무료취소 조건이면 먼저 잡는 쪽이 유리.'},
    ],
    nights: [
      {date:'2026.08.01(토)', flow:'신주 → 타이베이 체크인 → 닝샤 야시장', need:'늦은 체크인, 짐 놓고 바로 MRT/택시 이동'},
      {date:'2026.08.02(일)', flow:'푸항또우장 → 융캉제 → 101 → 라오허', need:'아침 이동이 쉽고, 밤에 돌아오기 부담 없는 위치'},
      {date:'2026.08.03(월)', flow:'룽산쓰·보피랴오 → 시먼딩 → 타이베이역 → HSR', need:'체크아웃 뒤 짐 보관, 타이베이역 접근성'},
    ],
    areas: [
      {name:'시먼딩·베이먼', rank:'1순위', tone:'best', why:'Day3 완화/시먼딩 동선이 가장 편하고, Day1 밤에도 먹을 곳이 많다. 베이먼이면 타이베이역·공항MRT 접근도 챙긴다.', watch:'밤까지 붐비고 방이 작을 수 있음. 창문/방음/엘리베이터 후기 확인.'},
      {name:'타이베이 메인역 서쪽/남쪽', rank:'안전픽', tone:'good', why:'HSR 귀국, 공항MRT, 짐 보관이 가장 단순하다. 일정이 밀려도 복구하기 좋다.', watch:'역 지하가 복잡하다. Z출구/엘리베이터 동선을 예약 전 확인.'},
      {name:'중산·솽롄', rank:'감성픽', tone:'maybe', why:'닝샤 야시장과 카페/식당 접근이 좋고 분위기가 덜 관광지스럽다.', watch:'Day3 시먼딩·타이베이역 짐 동선은 한 번 더 계산해야 함.'},
      {name:'둥먼·융캉제', rank:'보류', tone:'hold', why:'Day2 점심과 카페 동선은 좋지만 2박3일 전체 기준으로는 동쪽에 치우친다.', watch:'귀국날 짐 들고 타이베이역으로 돌아오는 시간이 아깝다.'},
    ],
    candidates: [
      {name:'CityInn Hotel Plus Ximending Branch', area:'Ximen', grade:'균형형', room:'Triple / Family 타입 확인', bed:'3명 1실 가능한 객실만', source:'https://c4.cityinn.com.tw/en/', why:'시먼역과 시먼딩 접근성이 좋고, 깔끔한 3성급 후보로 보기 좋다. 3인실 재고가 있으면 가장 균형이 좋다.', good:['시먼역 도보권', '3명 1실 후보', 'Day3 시먼딩 쇼핑 후 짐 회수 쉬움'], watch:['3인 객실 재고 우선 확인', '객실 크기와 창문 타입 확인'], score:{route:5, rest:4, price:3}},
      {name:'Roaders Hotel Zhonghua', area:'Ximending / Zhonghua Rd', grade:'재미형', room:'Triple / Family Suite 계열', bed:'3명 수용 타입 우선', source:'https://zhonghua.roadershotel.com/en', why:'시먼딩에 가까운 테마형 호텔. 3명이 한 방을 쓰는 여행이면 로비/간식/놀이 요소가 있어 숙소 자체가 덜 심심하다.', good:['시먼딩·베이먼 사이 감각', '3인/패밀리 타입 비교', '로비 시설이 재미있음'], watch:['테마가 취향 탈 수 있음', '조용함 우선이면 후기 확인'], score:{route:5, rest:3, price:3}},
      {name:'Finders Hotel', area:'NTU Hospital / Ximen 사이', grade:'가성비형', room:'Triple Room 재고 확인', bed:'더블+싱글 계열 가능성', source:'https://www.findershotel.com/', why:'타이베이역, NTU Hospital, 시먼 사이에 걸친 위치라 도보/지하철 선택지가 넓다. 3인실 가격이 맞으면 가성비 후보.', good:['타이베이역·시먼 사이', '짐 동선 유연', '3명 총액 비교용'], watch:['3인실 없으면 제외', '창문 없는 방 여부 확인'], score:{route:4, rest:3, price:4}},
      {name:'Hotel Relax I/II/III/V', area:'Taipei Main Station', grade:'교통형', room:'Triple / Executive Triple 확인', bed:'지점별 3인 객실 확인', source:'https://www.hotelrelaxclub.com/en/', why:'타이베이역 접근성을 최우선으로 볼 때 비교군에 넣기 좋다. 3명이 짐 들고 움직이면 역 접근성의 가치가 커진다.', good:['타이베이역 중심', '3인실 지점 비교', '짐 보관 동선 단순'], watch:['시먼딩 감성은 약함', '지점별 위치와 객실 타입 확인'], score:{route:5, rest:3, price:3}},
      {name:'Just Sleep Taipei Ximending', area:'Ximending', grade:'상향형', room:'Triple / Family 타입 확인', bed:'3싱글 또는 패밀리 구성 확인', source:'https://www.justsleephotels.com/ximending/en', why:'예산을 조금 올려도 위치와 안정감을 우선할 때 비교할 만한 후보. 3명이라면 방 컨디션 안정성이 더 중요해진다.', good:['시먼딩 중심', '브랜드 안정감', '3인 여행 안정픽'], watch:['예산 초과 가능성', '조식 포함 여부 확인'], score:{route:5, rest:4, price:2}},
      {name:'Tomorrow Hotel', area:'Ximen', grade:'저예산 후보', room:'Triple / Quadruple만', bed:'더블룸 3명 투숙은 제외', source:'https://tomorrowhotel.tw-taiwan.com/en/', why:'기존 후보로 언급된 시먼역 근처 숙소. 3인실 또는 4인실 가격이 낮게 나오면 백업으로 확인한다.', good:['시먼역 매우 가까운 편', '3인/4인실 백업', 'Day3 동선 좋음'], watch:['시설 노후/방음/청결 최신 후기', '더블룸에 3명 끼워넣기 금지'], score:{route:5, rest:2, price:4}},
    ],
    rules: [
      {k:'위치', v:'Ximen/Beimen/Taipei Main 도보 8분 안쪽', desc:'2박3일은 숙소 감성보다 짐 동선이 먼저다.'},
      {k:'체크아웃', v:'짐 보관 가능 여부', desc:'Day3 오전 완화·시먼딩 후 타이베이역으로 가야 하므로 필수.'},
      {k:'방 타입', v:'성인 3명 1실', desc:'Triple, Family, Quad 객실만 본다. 더블룸+엑스트라베드 가능 여부가 불명확하면 제외.'},
      {k:'침대 구성', v:'3싱글 또는 더블+싱글', desc:'셋이 실제로 잘 수 있는지 확인. 2더블/쿼드는 가능하지만 총액이 튈 수 있다.'},
      {k:'후기', v:'최근 6개월 방음·청결', desc:'대만 도심 숙소는 위치보다 방음/습기 후기가 체감 차이를 만든다.'},
    ],
    booking: [
      '1순위 권역을 시먼딩·베이먼·타이베이역 서쪽으로 고정한다.',
      '후보 6개를 같은 날짜(8/1~8/3), 성인 3명, 객실 1개, 세금 포함 총액으로 비교한다.',
      '객실명이 Triple, Family, Quad인지 확인하고 침대 구성을 캡처해둔다.',
      '창문 있음, 금연, 전용 욕실, 짐 보관, 24시 프론트 또는 늦은 체크인 가능 여부를 체크한다.',
      '무료취소가 가능하면 먼저 잡고, 출국 1~2주 전 더 좋은 방이 있으면 갈아탄다.',
    ],
    sources: [
      {name:'CityInn Hotel Plus Ximending Branch', url:'https://c4.cityinn.com.tw/en/'},
      {name:'Roaders Hotel Zhonghua', url:'https://zhonghua.roadershotel.com/en'},
      {name:'Finders Hotel', url:'https://www.findershotel.com/'},
      {name:'Hotel Relax Taipei', url:'https://www.hotelrelaxclub.com/en/'},
      {name:'Just Sleep Taipei Ximending', url:'https://www.justsleephotels.com/ximending/en'},
      {name:'Tomorrow Hotel', url:'https://tomorrowhotel.tw-taiwan.com/en/'},
    ],
  },
  // move: 직전 장소에서 이 장소까지 이동 (트리플식). 블로거 mino0522 + 다수 후기 반영.
  places: [
    // ---------- DAY 1 : 타이중 도착 → 신주 미식 → 타이베이 ----------
    {id:1, day:1, kind:'flight', time:'09:40', name:'타이중 공항 (RMQ)', nameEn:'Taichung Airport (RMQ)', addr:'No. 1690, Zhonghang Rd, Qingshui, Taichung', cat:'✈️ 도착 · 입국', stay:'40분', lat:24.2647, lng:120.6213,
     move:{mode:'✈️ 비행기', min:'2h45', cost:'-', note:'진에어 LJ0735 인천 출발'},
     desc:'진에어 LJ0735 도착. 작은 공항이라 입국이 빠릅니다. 짐 찾고 → EasyCard·현금 준비 → 고속철 타이중역(신우일)으로 이동.',
     tips:'<b>바로 할 일</b> ① EasyCard(요요카) 구입+충전 ② NT$ 현금 인출(야시장 카드 안 됨) ③ <b>럭키랜드 추첨</b> 5000.taiwan.net.tw — 3일+ 체류 외국인 5,000NT$ 추첨, 등록해두기.'},
    {id:2, day:1, kind:'move', time:'10:40', name:'타이중 고속철역 (신우일)', nameEn:'Taichung HSR Station', addr:'No. 8, Zhanqu 2nd Rd, Wuri, Taichung', cat:'🚄 THSR 환승', stay:'30분', lat:24.1124, lng:120.6155,
     move:{mode:'🚕 택시', min:'40분', cost:'NT$450', note:'공항 → 신우일역 (버스 156번도 가능)'},
     desc:'타이중 고속철역에서 북쪽 신주(Hsinchu)행 탑승. T Express 앱으로 시간표·예매. 외국인은 클룩/KKday 할인권이 더 저렴.',
     tips:'<b>고속철</b> 표 없이 가도 15~30분에 1대씩 자주 옴. <b>MRT/고속철 내 음식·음료(물도) 금지</b> — 벌금.'},
    {id:3, day:1, kind:'sight', time:'11:30', name:'신주 · TSMC 과학단지', nameEn:'Hsinchu Science Park (TSMC)', addr:'Hsinchu Science Park, Hsinchu', cat:'🔬 반도체 성지', stay:'40분', lat:24.7740, lng:121.0080,
     move:{mode:'🚄 고속철+🚕', min:'25분', cost:'NT$310', note:'타이중→신주역 20분 + 택시 10분'},
     desc:'세계 반도체 1위 TSMC 본진. 신주 과학단지 일대 분위기 인증샷. (내부 견학 일반 불가, 외관·전시관 중심)',
     tips:'<b>팁</b> 단지는 회사 밀집지구라 "지나가며 인증" 성격. 가볍게 보고 바로 성황묘 야시장으로 점심.'},
    {id:4, day:1, kind:'food', time:'12:30', name:'신주 도시성황묘 야시장', nameEn:'Hsinchu City God Temple Night Market', addr:'No. 75, Zhongshan Rd, North District, Hsinchu', cat:'🍜 점심 · 미식 끝판왕', stay:'1.5시간', lat:24.8043, lng:120.9665,
     move:{mode:'🚕 택시', min:'20분', cost:'NT$280', note:'과학단지 → 신주 시내 城隍廟'},
     desc:'신주 미식의 핵심. ⭐<b>묘구 야샹판(廟口鴨香飯·훈제오리덮밥)</b> 신주 No.1 / ⭐<b>하이루이 공환(海瑞摃丸·어묵완자탕, 1948)</b> / <b>아청하오 미펀(阿城號 米粉·쌀국수)</b> / <b>린자 러우위안(林家肉圓·고기경단)</b>. 신주=미펀+공환+러우위안 3대명물 한 번에.',
     tips:'<b>현금 필수</b> 노점은 카드 거의 안 됨. <b>합석(共席)</b>이 기본 문화. 밑반찬·물은 유료.'},
    {id:5, day:1, kind:'sight', time:'14:00', name:'동문성 (東門城·잉시먼)', nameEn:'Hsinchu East Gate (Yingxi Gate)', addr:'Dongmen St, East District, Hsinchu', cat:'🏯 산책 · 무료', stay:'40분', lat:24.8052, lng:120.9706, badge:'블로그 추가',
     move:{mode:'🚶 도보', min:'9분', cost:'-', note:'성황묘 → 동문성 (신주역 방향)'},
     desc:'1827년 청대 성문 + 해자(護城河) 친수공원. 무료, 야간 조명도 예쁨. 성황묘에서 신주역 가는 길목이라 동선이 자연스러움.',
     tips:'<b>코스</b> 성황묘→동문성 산책→신주 HSR역(시내서 택시 20분, 六家)으로 이동해 타이베이행.'},
    {id:6, day:1, kind:'stay', time:'16:30', name:'타이베이역 · 숙소 체크인', nameEn:'Taipei Main Station', addr:'No. 23, Chengdu Rd, Wanhua, Taipei (시먼 추천)', cat:'🏨 숙소', stay:'1시간', lat:25.0478, lng:121.5170,
     move:{mode:'🚄 고속철', min:'35분', cost:'NT$390', note:'신주 → 타이베이 (역까지 택시 20분 별도)'},
     desc:'타이베이 도착, 숙소 체크인. 블로거 추천 <b>Tomorrow Hotel</b>(시먼역 도보 1분, 약 7만원/박, 무료 아이스크림·케이크). 시먼/타이베이역 라인이 초보에게 최적.',
     tips:'<b>숙소 위치</b> Day2·3 동선(완화·중정)과 가까운 시먼딩 추천. 짐 풀고 가볍게 야시장으로.'},
    {id:7, day:1, kind:'food', time:'19:00', name:'닝샤 야시장 (寧夏夜市)', nameEn:'Ningxia Night Market', addr:'Ningxia Rd, Datong, Taipei', cat:'🌃 저녁 · 야시장', stay:'2시간', lat:25.0560, lng:121.5155, badge:'블로그 강추',
     move:{mode:'🚇 MRT', min:'12분', cost:'NT$25', note:'타이베이역 → 솽롄/닝샤'},
     desc:'작지만 알찬 로컬 먹거리 끝판왕. ⭐<b>오징어튀김(스파이시솔트, BHC뿌링클맛 NT$150)</b> 강추 / ⭐<b>망고·망고주스(NT$50/90)</b> 꿀맛. 스린보다 동선 좋고 로컬.',
     tips:'<b>현금</b> 챙기기. 다음날 푸항또우장 오픈런 위해 일찍 마무리.'},

    // ---------- DAY 2 : 타이베이 풀데이 ----------
    {id:8, day:2, kind:'food', time:'08:00', name:'푸항또우장 (阜杭豆漿)', nameEn:'Fuhang Soy Milk', addr:'2F, No. 108, Zhongxiao E Rd Sec 1, Huashan Market, Taipei', cat:'🥟 아침 · 오픈런', stay:'1시간', lat:25.0444, lng:121.5240,
     move:{mode:'🚇 MRT', min:'12분', cost:'NT$20', note:'숙소 → 산다오쓰역 5번출구 도보 1분'},
     desc:'타이베이 아침 성지. 화산시장 2층. 더우장(콩국)+딴빙(달걀전병)+사오빙요우탸오(소병+꽈배기) 조합.',
     tips:'<b>오픈런</b> 8시 전 도착 권장. 9시 넘으면 줄이 어마어마.'},
    {id:9, day:2, kind:'sight', time:'09:30', name:'중정기념당', nameEn:'Chiang Kai-shek Memorial Hall', addr:'No. 21, Zhongshan S Rd, Zhongzheng, Taipei', cat:'🏛️ 랜드마크', stay:'1시간', lat:25.0346, lng:121.5219,
     move:{mode:'🚇 MRT', min:'10분', cost:'NT$20', note:'산다오쓰 → 중정기념당역'},
     desc:'거대한 광장과 위병 교대식으로 유명. 자유광장 패방이 포토스팟.',
     tips:'<b>위병교대</b> 매시 정각(09~17시) 진행. 18시 폐장 주의.'},
    {id:10, day:2, kind:'food', time:'11:30', name:'딘타이펑 본점 (鼎泰豐) · 융캉제', nameEn:'Din Tai Fung Original (Yongkang)', addr:'No. 194, Xinyi Rd Sec 2, Da’an, Taipei', cat:'🥟 점심 · 샤오롱바오', stay:'1.5시간', lat:25.0334, lng:121.5298, badge:'블로그 추가',
     move:{mode:'🚶 도보', min:'12분', cost:'-', note:'중정기념당 → 둥먼/융캉제'},
     desc:'샤오롱바오 원조 <b>본점</b>(융캉제 입구). 육즙 끝판왕. 타이베이101 지점은 80분 대기라 본점이 나음. 대기 길면 번호표 받고 융캉제 구경.',
     tips:'<b>대안</b> 양산박 샤오롱바오(시먼)도 5/5 후기. 신라탕(쏸라탕)은 호불호.'},
    {id:11, day:2, kind:'food', time:'13:30', name:'스무시하우스 망고빙수 (思慕昔)', nameEn:'Smoothie House Mango Ice', addr:'No. 15, Yongkang St, Da’an, Taipei', cat:'🍧 디저트', stay:'45분', lat:25.0327, lng:121.5300, badge:'블로그 추가',
     move:{mode:'🚶 도보', min:'3분', cost:'-', note:'딘타이펑 → 융캉제 안'},
     desc:'융캉제 대표 망고빙수 원조집. 여름 필수 코스. 생망고 듬뿍.',
     tips:'<b>꿀팁</b> 1인분도 크니 둘이 나눠먹기 딱. 융캉 우육면(永康牛肉麵)도 근처.'},
    {id:12, day:2, kind:'sight', time:'16:30', name:'타이베이 101', nameEn:'Taipei 101', addr:'No. 7, Xinyi Rd Sec 5, Xinyi, Taipei', cat:'🗼 전망대 · 석양', stay:'2.5시간', lat:25.0339, lng:121.5645,
     move:{mode:'🚇 MRT', min:'15분', cost:'NT$25', note:'둥먼역 → 타이베이101역'},
     desc:'타이베이 상징 마천루. 89층 전망대(엘베 34초!) + 660톤 댐퍼(중심추) 볼거리. ⭐<b>석양~야경 타이밍(클룩 18:30 슬롯)</b>이 베스트라는 후기.',
     tips:'<b>선물</b> 근처서 펑리수(치아더 ChiaTe, NT$228/6입) 구매. B1 딘타이펑은 80분 대기라 패스.'},
    {id:13, day:2, kind:'food', time:'19:30', name:'라오허제 야시장 (饒河街)', nameEn:'Raohe Street Night Market', addr:'Raohe St, Songshan, Taipei', cat:'🌃 저녁 · 야시장', stay:'1.5시간', lat:25.0509, lng:121.5773,
     move:{mode:'🚇 MRT', min:'22분', cost:'NT$30', note:'타이베이101 → 송산역'},
     desc:'송산역 옆 3대 야시장. ⭐<b>후추빵(胡椒餅)</b> 입구 화덕집이 명물 강추(고기+후추, 화덕 구이). 치킨롤도 굿. 송산츠유궁 사원 옆.',
     tips:'<b>분해차(우롱)</b> 편의점 NT$35 — 기름진 음식 뒤 현지인처럼. <b>빈랑(檳榔)은 발암물질, 먹지 말 것.</b>'},

    // ---------- DAY 3 : 완화(룽산쓰·시먼딩) → 타이중 귀국 ----------
    {id:14, day:3, kind:'sight', time:'09:00', name:'룽산쓰 (龍山寺)', nameEn:'Longshan Temple', addr:'No. 211, Guangzhou St, Wanhua, Taipei', cat:'⛩️ 사원', stay:'45분', lat:25.0369, lng:121.4999,
     move:{mode:'🚇 MRT', min:'10분', cost:'NT$20', note:'숙소 → 룽산쓰역'},
     desc:'타이베이 최고(最古) 사원. 아침 참배 분위기와 화려한 단청. 도교·불교 혼합.',
     tips:'<b>마지막 날</b> 가볍게 둘러보고 우롱차·기념품. 보피랴오·시먼딩과 같은 완화구라 도보권.'},
    {id:15, day:3, kind:'sight', time:'09:50', name:'보피랴오 역사거리 (剝皮寮)', nameEn:'Bopiliao Historic Block', addr:'Guangzhou St, Wanhua, Taipei', cat:'📷 옛거리 · 무료', stay:'40분', lat:25.0367, lng:121.5030, badge:'블로그 추가',
     move:{mode:'🚶 도보', min:'3분', cost:'-', note:'룽산쓰 → 보피랴오 (바로 옆)'},
     desc:'청대~일제 옛 거리를 보존한 붉은벽돌 골목. 룽산쓰 바로 옆이라 무료로 사진 명소 추가.',
     tips:'<b>포토</b> 옛 간판·벽돌 골목 인생샷. 영화·드라마 촬영지.'},
    {id:16, day:3, kind:'shop', time:'10:40', name:'시먼딩 (西門町)', nameEn:'Ximending', addr:'Ximending, Wanhua, Taipei', cat:'🛍️ 쇼핑 · 길거리음식', stay:'1.5시간', lat:25.0421, lng:121.5068,
     move:{mode:'🚇 MRT', min:'4분', cost:'NT$20', note:'룽산쓰 → 시먼역 (도보 15분도 가능)'},
     desc:'타이베이의 명동. ⭐<b>아종몐셴(阿宗麵線·곱창면선 NT$65, 가쓰오 육수)</b> / ⭐<b>크리스피 밀크도넛(NT$40 강추)</b> / <b>시먼훙러우(西門紅樓·1908 팔각루)</b> / <b>행복당 흑당버블티(NT$120)</b>. 도라에몽 "어디로든 문" 포토.',
     tips:'<b>선물</b> 누가크래커(세인트피터, 커피맛이 인기) 구매. 마지막 쇼핑·점심 해결.'},
    {id:17, day:3, kind:'move', time:'12:30', name:'타이베이역 → 고속철 남하', nameEn:'Taipei Main Station (HSR South)', addr:'No. 3, Beiping W Rd, Zhongzheng, Taipei', cat:'🚄 귀국 이동', stay:'-', lat:25.0478, lng:121.5170,
     move:{mode:'🚇 MRT', min:'6분', cost:'NT$20', note:'시먼역 → 타이베이역 (짐 픽업)'},
     desc:'짐 찾아 타이베이역에서 고속철 타이중행 탑승(약 50분). 귀국편 15:00까지 RMQ 공항 도착 목표.',
     tips:'<b>시간 역산</b> 17:30 비행 → 15:00 공항 → 14:00 신우일역 → 13:00 타이베이 출발 안전.'},
    {id:18, day:3, kind:'flight', time:'15:00', name:'타이중 공항 (RMQ) 출국', nameEn:'Taichung Airport (RMQ) Departure', addr:'No. 1690, Zhonghang Rd, Qingshui, Taichung', cat:'✈️ 귀국', stay:'-', lat:24.2647, lng:120.6213,
     move:{mode:'🚄 고속철+🚕', min:'1h30', cost:'NT$1,150', note:'타이베이→타이중 고속철 50분 + 택시 35분'},
     desc:'진에어 LJ0738 (17:30 출발). 신우일역→공항 택시 약 30~40분. 면세·체크인 여유있게.',
     tips:'<b>마지막</b> EasyCard 잔액·보증금 환불 가능. 위탁 15kg 초과 시 온라인 사전구매가 쌌음.'},
  ],

  // ===== 🍜 먹킷리스트 (블로거 후기 5/5·강추 기반) =====
  // group: must(무조건) / street(야시장) / dessert(디저트·음료) / gift(선물)
  eats: [
    {group:'must', em:'🦆', name:'묘구 야샹판', cn:'廟口鴨香飯 · 훈제오리덮밥', star:true, day:1, where:'Day1 신주 성황묘', price:'~NT$70', desc:'신주 성황묘 No.1 명물. 훈제 오리살 + 비법소스 덮밥. 블로거 만장일치 1순위.',
     photo:'https://live.staticflickr.com/3793/11019487463_d1a21c37ce.jpg', photoSource:'https://www.flickr.com/photos/83128028@N00/11019487463', photoCredit:'Blowing Puffer Fish · CC BY 2.0', photoNote:'신주 廟口鴨香飯 사진'},
    {group:'must', em:'🥟', name:'딘타이펑 샤오롱바오', cn:'鼎泰豐 小籠包', star:true, day:2, where:'Day2 융캉제 본점', price:'~NT$230', desc:'원조 본점(융캉제). 육즙 끝판왕. 101 지점은 80분 대기라 본점이 나음.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/9/98/Din_Tai_Fung_XiaoLongBao_2019.jpg', photoSource:'https://commons.wikimedia.org/w/index.php?curid=85997968', photoCredit:'Wpcpey · CC BY 4.0', photoNote:'딘타이펑 샤오롱바오'},
    {group:'must', em:'🥣', name:'푸항또우장', cn:'阜杭豆漿 · 더우장 세트', star:true, day:2, where:'Day2 아침', price:'~NT$100', desc:'화산시장 2층. 더우장(콩국)+딴빙+사오빙요우탸오. 8시 전 오픈런 필수.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Xian_doujiang_and_egg_flatbread_Taipei.jpg', photoSource:'https://commons.wikimedia.org/w/index.php?curid=192186234', photoCredit:'KQuhen · CC BY-SA 4.0', photoNote:'더우장과 딴빙 조합'},
    {group:'must', em:'🫓', name:'후추빵', cn:'胡椒餅', star:true, day:2, where:'Day2 라오허제 입구', price:'~NT$60', desc:'라오허제 입구 화덕집. 고기+후추 듬뿍, 화덕 구이 겉바속촉. 강추.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/8/88/Oven_baked_Hujiao_bing_ready_being_fetched_and_for_sale_in_Taipei.jpg', photoSource:'https://commons.wikimedia.org/w/index.php?curid=124956491', photoCredit:'ThomasYehYeh · CC BY-SA 4.0', photoNote:'타이베이 화덕 후추빵'},
    {group:'must', em:'🍜', name:'아종몐셴', cn:'阿宗麵線 · 곱창면선', star:true, day:3, where:'Day3 시먼딩', price:'NT$65', desc:'가쓰오 육수 곱창 국수. 시먼딩 필수. 서서 먹는 게 국룰.',
     photo:'https://live.staticflickr.com/7301/14094228131_6994e0702d_b.jpg', photoSource:'https://www.flickr.com/photos/46635911@N00/14094228131', photoCredit:'jonolist · CC BY-SA 2.0', photoNote:'아종몐셴 현장 사진'},
    {group:'must', em:'🍩', name:'크리스피 밀크도넛', cn:'Crispy Milk Donut', star:true, day:3, where:'Day3 시먼딩', price:'NT$40', desc:'겉바삭 속촉한 우유도넛. 블로거 강력 추천템.',
     photo:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0OwGGLgR9euTwzmdGtk6Yh1uBBwCSx4SNYTP1o4jJCqAZSofC3hATpeYzYzSSCK7Rs11sQus_P9M29DNtR7jw5Fl0ae5mTfaUJ1nZNsUWJDZhI7sZ5LMiigcROg6ZoaPmYY46ZQ/s640/IMG_7733JPG', photoSource:'https://www.kuangtc.com/2014/11/twdounts.html', photoCredit:'KuangTC · CC BY-NC-SA 2.5 TW', photoNote:'脆皮鮮奶甜甜圈 참고 사진'},
    {group:'must', em:'🦑', name:'오징어튀김(스파이시솔트)', cn:'鹽酥魷魚', star:true, day:1, where:'Day1 닝샤 야시장', price:'NT$150', desc:'BHC 뿌링클맛 시즈닝, 쫄깃. 닝샤 인터넷 명물. 강추.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/4/42/Frittierter_Tintenfisch.jpg', photoSource:'https://commons.wikimedia.org/w/index.php?curid=33702866', photoCredit:'Pilzland · CC BY-SA 3.0', photoNote:'대만 야시장 오징어튀김 대표 사진'},
    {group:'must', em:'🍱', name:'민물장어덮밥', cn:'肥前屋 히젠야 우나기', star:true, day:2, where:'101 근처(옵션)', price:'NT$360', desc:'부드러운 장어+소스밥, 잡내 없음. 블로거 5/5. 101 일정 중 시간 되면.',
     photo:'https://live.staticflickr.com/65535/47939718528_f9b37b742f_b.jpg', photoSource:'https://www.flickr.com/photos/91049143@N00/47939718528', photoCredit:'bryan... · CC BY-SA 2.0', photoNote:'타이베이 장어덮밥 대표 사진'},
    {group:'street', em:'🐟', name:'하이루이 공환탕', cn:'海瑞摃丸 (1948)', star:false, day:1, where:'Day1 신주', price:'~NT$60', desc:'탱탱한 어묵완자 탕. 신주 3대명물. 선물 포장도 인기.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/2/2a/Hsinchu_Pork_ball.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Hsinchu_Pork_ball.jpg', photoCredit:'CC BY-SA 4.0', photoNote:'신주 공환 대표 사진'},
    {group:'street', em:'🍚', name:'아청하오 미펀', cn:'阿城號 米粉 · 쌀국수', star:false, day:1, where:'Day1 신주', price:'~NT$50', desc:'신주=미펀(쌀국수)의 도시. 대표 노포.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/6/64/Rice_Vermicelli_%28Rice_Noodle%29_of_Taiwan.JPG', photoSource:'https://commons.wikimedia.org/w/index.php?curid=3928724', photoCredit:'竹筍弟弟 · CC BY-SA 3.0', photoNote:'대만식 미펀 대표 사진'},
    {group:'street', em:'🍢', name:'린자 러우위안', cn:'林家肉圓 · 고기경단', star:false, day:1, where:'Day1 신주', price:'~NT$50', desc:'쫀득한 신주식 러우위안. 미펀·공환과 묶으면 3대명물 완성.',
     photo:'https://live.staticflickr.com/46/161348531_2ea1c676e0_b.jpg', photoSource:'https://www.flickr.com/photos/51928011@N00/161348531', photoCredit:'CC BY-NC 2.0', photoNote:'린자 러우위안 실제 사진'},
    {group:'street', em:'🐔', name:'위린 닭다리(치킨킹)', cn:'玉林雞腿大王', star:false, day:1, where:'시먼 인근(옵션)', price:'~NT$210', desc:'튀긴 닭다리+밥+두부. 밥도둑 소스. 블로거 인생맛집 5/5.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/6/64/Fried_Chicken_%28Leg%29_with_Fried_Rice.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Fried_Chicken_(Leg)_with_Fried_Rice.jpg', photoCredit:'CC BY-SA 4.0', photoNote:'닭다리밥 대표 사진'},
    {group:'street', em:'🍲', name:'우육면', cn:'牛肉麵 · 융캉/푸홍', star:false, day:2, where:'융캉제/시먼', price:'~NT$120', desc:'대만 국민면. 융캉(진한맛)/푸홍(24h, 갈비탕풍). 합석 문화.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Taiwanese_Beef_Noodle_Soup.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Taiwanese_Beef_Noodle_Soup.jpg', photoCredit:'CC BY-SA 4.0', photoNote:'대만 우육면 대표 사진'},
    {group:'dessert', em:'🥭', name:'스무시하우스 망고빙수', cn:'思慕昔 芒果冰', star:false, day:2, where:'Day2 융캉제', price:'~NT$200', desc:'융캉제 원조 망고빙수. 생망고 듬뿍. 1인분도 커 나눠먹기.',
     photo:'https://live.staticflickr.com/7170/6491730487_d169eb3631_b.jpg', photoSource:'https://www.flickr.com/photos/97501744@N00/6491730487', photoCredit:'Brooke Lin · CC BY-NC-ND 2.0', photoNote:'스무시하우스 망고빙수 실제 사진'},
    {group:'dessert', em:'🧋', name:'행복당 흑당버블티', cn:'幸福堂 黑糖珍奶', star:false, day:3, where:'시먼딩', price:'NT$120', desc:'눈앞에서 펄 조리. 흑당 시그니처. 버블티 본고장 인증.',
     photo:'https://live.staticflickr.com/65535/53457857365_32f42a2852_b.jpg', photoSource:'https://www.flickr.com/photos/10559879@N00/53457857365', photoCredit:'avlxyz · CC BY-NC 2.0', photoNote:'시먼딩 행복당 흑당 보바'},
    {group:'dessert', em:'🥭', name:'닝샤 망고/망고주스', cn:'芒果/芒果汁', star:false, day:1, where:'Day1 닝샤', price:'NT$50/90', desc:'완전 달달한 생망고와 주스. 5/5.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/2/20/Mango_juice_a0.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Mango_juice_a0.jpg', photoCredit:'CC BY-SA 4.0', photoNote:'망고주스 대표 사진'},
    {group:'dessert', em:'🥛', name:'파파야 밀크', cn:'木瓜牛奶', star:false, day:0, where:'7-11 편의점', price:'NT$36', desc:'달콤한 멜론우유맛. 편의점에서 가볍게.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/d/d1/Papaya_Milk_and_Watermelon_Milk_at_Beigang%2C_Yunlin%2C_Taiwan.jpg', photoSource:'https://commons.wikimedia.org/w/index.php?curid=151933040', photoCredit:'bryan... · CC BY-SA 2.0', photoNote:'대만 파파야 밀크 사진'},
    {group:'dessert', em:'🍵', name:'분해차(우롱)', cn:'decho 烏龍', star:false, day:0, where:'편의점', price:'NT$35', desc:'기름진/매운 음식 뒤 현지인처럼. 편의점 상비.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/0/05/Jin_Xuan_oolong_tea.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Jin_Xuan_oolong_tea.jpg', photoCredit:'CC BY-SA 4.0', photoNote:'대만 금훤우롱 대표 사진'},
    {group:'gift', em:'🍍', name:'치아더 펑리수', cn:'佳德 鳳梨酥', star:false, day:0, where:'101 근처/시내', price:'NT$228/6입', desc:'대만 3대 펑리수. 촉촉 잼+과육. 선물 1순위.',
     photo:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Chia_Te_Bakery_%284713929957%29.jpg', photoSource:'https://commons.wikimedia.org/wiki/File:Chia_Te_Bakery_(4713929957).jpg', photoCredit:'CC BY 2.0', photoNote:'치아더 매장/포장 사진'},
    {group:'gift', em:'🍪', name:'누가크래커', cn:'St. Peter 牛軋餅', star:false, day:0, where:'시먼딩', price:'박스', desc:'누가+크래커. 커피맛이 인기(초코는 단편). 무료시식.',
     photo:'https://live.staticflickr.com/785/40077577845_850f5c532b_b.jpg', photoSource:'https://www.flickr.com/photos/58008480@N04/40077577845', photoCredit:'CC BY-NC-SA 2.0', photoNote:'누가크래커 대표 사진'},
    {group:'gift', em:'🍍', name:'써니힐 펑리수', cn:'SunnyHills 微熱山丘', star:false, day:0, where:'시내 매장', price:'박스', desc:'또다른 3대 펑리수. 사과+파인애플 잼. 시식 제공.',
     photo:'https://live.staticflickr.com/5809/21411970983_5b88e22346.jpg', photoSource:'https://www.flickr.com/photos/132113583@N03/21411970983', photoCredit:'photomanm · CC BY-SA 2.0', photoNote:'SunnyHills 펑리수 사진'},
  ],

  // ===== 교통·기차표 (패스 비교 + 우리 구간 + 예매) =====
  trainInfo: {
    updated:'2026-06-27 기준 확인',
    answer: [
      {k:'이번 여행 결론', v:'EasyCard + THSR 외국인 구간권', desc:'타이베이 시내는 EasyCard로 찍고 다니고, 도시 간 이동은 고속철 구간권을 따로 산다.'},
      {k:'패스 판단', v:'무제한 패스는 대부분 손해', desc:'타이베이 MRT 이동량이 많지 않고, 고속철도 타이중-신주-타이베이-타이중 정도라 패스 가격을 못 넘긴다.'},
      {k:'예약 우선순위', v:'귀국날 HSR만 시간 고정', desc:'Day1 북상은 유동적으로, Day3 타이베이→타이중은 비행시간 때문에 지정좌석을 잡는 편이 안전하다.'},
    ],
    analogy: [
      {tw:'THSR 高鐵', kr:'KTX / SRT', desc:'도시 간 고속철. 타이중-타이베이 약 1시간. 지정좌석 예매 가능, 자유석도 있음.'},
      {tw:'TRA 台鐵', kr:'일반열차', desc:'자강호/구간차 등. 싸지만 느리다. 이번 일정은 시간이 짧아 보조 선택지.'},
      {tw:'MRT 捷運', kr:'지하철', desc:'타이베이 시내 이동 기본. EasyCard로 태그하고 타면 된다.'},
      {tw:'EasyCard 悠遊卡', kr:'티머니/교통카드', desc:'MRT, 버스, 편의점 소액결제에 쓰는 충전식 카드. 무제한권이 아니라 쓴 만큼 차감.'},
    ],
    movement: [
      {day:'Day 1', route:'RMQ 공항 → HSR 타이중역 → 신주 → 타이베이', ticket:'공항 이동은 156번 버스 또는 택시. 고속철은 타이중→신주, 신주→타이베이 구간권.'},
      {day:'Day 2', route:'타이베이 시내', ticket:'MRT 중심. EasyCard로 산다오쓰, 중정기념당, 둥먼, 101, 송산 이동.'},
      {day:'Day 3', route:'시먼/완화 → 타이베이역 → HSR 타이중역 → RMQ 공항', ticket:'타이베이→타이중 HSR은 출발 시간을 고정. HSR역→공항은 택시가 가장 안전.'},
    ],
    legs: [
      {seg:'타이중 HSR → 신주', line:'THSR 고속철', time:'약 20분', fare:'NT$280 (~13,000원)', note:'Day1 북상'},
      {seg:'신주 → 타이베이', line:'THSR 고속철', time:'약 35분', fare:'NT$390 (~18,000원)', note:'Day1 오후'},
      {seg:'타이베이 → 타이중 HSR', line:'THSR 고속철', time:'약 50분', fare:'NT$700 (~32,000원)', note:'Day3 귀국 (시간 지정 권장)'},
    ],
    cards: [
      {name:'EasyCard', type:'충전식 교통카드', price:'카드 NT$100 + 충전', verdict:'추천', desc:'MRT, 버스, 편의점 결제까지 커버. 이 여행의 기본 카드. 처음에 NT$500 정도 넣고 부족하면 편의점/MRT에서 충전.'},
      {name:'Taipei Metro 24/48/72hr', type:'MRT 무제한', price:'NT$180 / 280 / 380', verdict:'대체로 비추', desc:'타이베이 MRT만 무제한. 하루 5~6회 이상 많이 타야 이득인데, 현재 루트는 도보와 짧은 MRT가 섞여 애매하다.'},
      {name:'Taipei FunPASS Transportation', type:'MRT+버스 무제한', price:'1/2/3일권, 판매처별 확인', verdict:'버스 많이 탈 때만', desc:'버스까지 포함되지만 이번 루트는 MRT와 도보 중심. 근교 버스 투어를 직접 넣을 때만 다시 계산.'},
      {name:'TPASS / Megacity Pass', type:'30일 통근권', price:'NT$1,200', verdict:'여행자에겐 불필요', desc:'한국 기후동행카드에 가까운 월정액권. 2박3일 여행에는 기간이 길고 가격도 과하다.'},
      {name:'THSR Pass', type:'고속철 무제한', price:'3일 NT$2,200 / 선택 2일 NT$2,500', verdict:'이번엔 손해', desc:'가오슝·타이난까지 길게 내려갈 때 가치가 있다. 우리 고속철 예상합계는 정가 기준 약 NT$1,370이라 패스가 비싸다.'},
      {name:'Taiwan PASS HSR', type:'HSR+지역교통 묶음', price:'상품별 판매처 확인', verdict:'전국 이동용', desc:'7일 안에 장거리 도시를 여러 개 돌 때 맞는 상품. 타이중-타이베이 압축 루트에는 맞지 않다.'},
    ],
    booking: [
      {way:'T Express 공식앱 / 홈페이지', how:'공식 시간표와 좌석 확인이 가장 확실하다. 여권명 기준으로 예약하고 QR 또는 역 발권으로 탄다.', best:'귀국날 시간 고정용'},
      {way:'클룩 / KKday 외국인 구간권', how:'비대만 단기 입국자 대상 할인권. 바우처를 받은 뒤 THSR 사이트/창구/발권기로 날짜와 좌석을 확정한다.', best:'정가보다 싸게 살 때'},
      {way:'현장 발권 / 자유석', how:'짧은 구간은 역에서 바로 사도 된다. 좌석 확정이 필요 없으면 자유석이 편하다.', best:'Day1 신주 경유처럼 유동적인 구간'},
    ],
    discounts: [
      ['외국인 THSR One-Way', '표준 판매가 기준 성인 15% 할인. 구간별로 사는 방식이라 우리 일정과 잘 맞음.'],
      ['얼리버드 早鳥', '좌석 한정 할인. 시간 고정이 가능하면 비교 대상. 귀국날 구간에만 검토.'],
      ['THSR / Taiwan PASS', '도시를 여러 개 길게 돌 때. 이번 3구간만으로는 패스 가격을 넘기 어렵다.'],
    ],
    howto: [
      '도착하면 EasyCard를 만들고 NT$500 정도 충전한다.',
      'Day1 고속철은 도착 지연 가능성이 있으니 너무 촘촘하게 예약하지 않는다.',
      'Day3 타이베이→타이중 HSR은 13:00 전후 출발로 지정좌석을 잡는다.',
      'HSR 타이중역에서 RMQ 공항은 버스보다 택시가 귀국날 리스크가 낮다.',
    ],
    sources: [
      {name:'Taipei Metro Pass 안내', url:'https://english.metro.taipei/cp.aspx?n=BECC2E7AC426F659'},
      {name:'EasyCard 사용 범위', url:'https://www.easycard.com.tw/en/use-range'},
      {name:'THSR 외국인 패스/구간권', url:'https://pass.thsrc.com.tw/'},
      {name:'Megacity Pass 공식 안내', url:'https://english.gov.taipei/News_Content.aspx?n=A11F01CFC9F58C83&s=7E6AF21F269B2AF7'},
      {name:'Taiwan PASS', url:'https://twpass.tw/index_en.html'},
    ],
    tip:'이번 루트는 <b>EasyCard + THSR 외국인 구간권</b>이 기준. 한국 기후동행카드 같은 월정액은 TPASS가 있지만 30일권이라 불필요하고, 도쿄 메트로패스 같은 단기 무제한권은 타이베이에도 있지만 현재 이동량으로는 이득이 작다.',
  },
};

// ===== 하네스: 상태 헬퍼 (모든 페이지 공용) =====
// 장소 1곳의 현재 상태를 반환. confirmedPlaceIds/tbdPlaceIds로 결정, 기본은 candidate.
window.placeStatus = function (id) {
  var T = window.TRIP;
  if (T.confirmedPlaceIds.indexOf(id) > -1) return 'confirmed';
  if (T.tbdPlaceIds.indexOf(id) > -1) return 'tbd';
  return 'candidate';
};
// 결정 큐 진행률 {done, total, pct}.
window.planProgress = function () {
  var d = window.TRIP.decisions;
  var done = d.filter(function (x) { return x.status === 'done'; }).length;
  return { done: done, total: d.length, pct: Math.round(done / d.length * 100) };
};

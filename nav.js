(function () {
  var nav = document.querySelector('.nav');
  if (!nav || nav.querySelector('.nav-notes-link')) return;

  var page = location.pathname.split('/').pop() || 'index.html';
  var active = page === 'taiwan-notes.html' ? ' active' : '';
  var html = '<a href="taiwan-notes.html" class="nav-notes-link' + active + '">타이완 노트</a>';

  nav.insertAdjacentHTML('beforeend', html);
})();

// ===== 일차별 카테고리 메가메뉴 ([1일차]·[2일차]·[3일차] hover/탭 → 분류 이동) =====
// nav.js는 data.js보다 먼저 로드되므로 TRIP 사용은 DOMContentLoaded까지 지연.
// .nav가 overflow-x:auto + backdrop-filter라 드롭다운을 body에 붙이고 fixed로 띄움(클리핑 회피).
document.addEventListener('DOMContentLoaded', function () {
  var T = window.TRIP;
  if (!T || !T.placeKindMeta) return;             // 데이터 없는 페이지면 일반 링크 유지
  var nav = document.querySelector('.nav');
  if (!nav || nav.querySelector('.nav-day')) return;

  var order = Object.keys(T.placeKindMeta);
  var pops = [];
  var hideTimer;
  function hideAll() { pops.forEach(function (p) { p.classList.remove('show'); }); }
  function scheduleHide() { hideTimer = setTimeout(hideAll, 120); }
  function cancelHide() { clearTimeout(hideTimer); }
  function placePop(wrap, pop) {
    var r = wrap.getBoundingClientRect();
    pop.style.left = Math.max(8, r.left) + 'px';
    pop.style.top = (r.bottom + 8) + 'px';
  }
  function openOne(wrap, pop) { hideAll(); placePop(wrap, pop); pop.classList.add('show'); }

  [1, 2, 3].forEach(function (d) {
    var link = nav.querySelector('a.d' + d);
    if (!link) return;
    var places = T.places.filter(function (p) { return p.day === d; });
    if (!places.length) return;

    var byKind = {};
    places.forEach(function (p) { (byKind[p.kind] = byKind[p.kind] || []).push(p); });
    var kinds = Object.keys(byKind).sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });

    var rows = '<a class="day-pop-all" href="day.html?d=' + d + '">전체 ' + places.length + '곳</a>';
    kinds.forEach(function (k) {
      var m = T.placeKindMeta[k];
      rows += '<a class="day-pop-row" href="day.html?d=' + d + '&kind=' + k + '" style="--kc:' + m.color + '">'
            + '<span>' + m.icon + ' ' + m.label + '</span><b>' + byKind[k].length + '</b></a>';
    });

    var wrap = document.createElement('div');
    wrap.className = 'nav-day';
    link.parentNode.insertBefore(wrap, link);
    wrap.appendChild(link);                         // 기존 <a>(id/class/active) 그대로 유지

    var caret = document.createElement('button');
    caret.type = 'button';
    caret.className = 'nav-day-caret';
    caret.setAttribute('aria-label', d + '일차 분류 메뉴');
    caret.textContent = '▾';
    wrap.appendChild(caret);

    var pop = document.createElement('div');
    pop.className = 'day-pop';
    pop.innerHTML = rows;
    document.body.appendChild(pop);                 // body 부착 → 클리핑 회피
    pops.push(pop);

    // 데스크톱: hover (트리거↔팝업 사이 120ms 브리지로 끊김 방지)
    wrap.addEventListener('mouseenter', function () { cancelHide(); openOne(wrap, pop); });
    wrap.addEventListener('mouseleave', scheduleHide);
    pop.addEventListener('mouseenter', cancelHide);
    pop.addEventListener('mouseleave', scheduleHide);

    // 모바일/클릭: 캐럿 탭 토글
    caret.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      var isShown = pop.classList.contains('show');
      hideAll();
      if (!isShown) openOne(wrap, pop);
    });
  });

  document.addEventListener('click', function (e) { // 바깥 탭/클릭 시 닫기
    if (!e.target.closest('.nav-day') && !e.target.closest('.day-pop')) hideAll();
  });
  window.addEventListener('scroll', hideAll, true); // 스크롤·리사이즈 시 위치 초기화
  window.addEventListener('resize', hideAll);
});

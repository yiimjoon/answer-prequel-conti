(() => {
  // 인물 필터: 선택한 인물이 나오는 장면만 남긴다
  const chips = document.querySelectorAll('[data-filter]');
  const applyFilter = (name) => {
    chips.forEach((c) => c.classList.toggle('on', c.dataset.filter === name));
    let shown = 0;
    document.querySelectorAll('.scene').forEach((scene) => {
      let any = false;
      scene.querySelectorAll('.beat').forEach((b) => {
        const ok = !name || b.dataset.who.split(' ').includes(name);
        b.hidden = !ok;
        if (ok) any = true;
      });
      scene.hidden = !any;
      if (any) shown += 1;
    });
    const empty = document.querySelector('.filter-empty');
    if (empty) empty.hidden = shown > 0;
  };
  chips.forEach((c) => c.addEventListener('click', () => applyFilter(c.dataset.filter)));

  // 원문 모두 펼치기
  const rawToggle = document.getElementById('openraw');
  if (rawToggle) {
    rawToggle.addEventListener('change', () => {
      document.querySelectorAll('details.raw').forEach((d) => { d.open = rawToggle.checked; });
    });
  }

  // 그림 크게 보기
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('p');
  const close = () => { lb.hidden = true; lbImg.src = ''; };
  document.querySelectorAll('.zoom').forEach((z) => z.addEventListener('click', () => {
    lbImg.src = z.dataset.src;
    lbCap.textContent = z.dataset.cap;
    lb.hidden = false;
  }));
  lb.addEventListener('click', (ev) => { if (ev.target !== lbImg) close(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });
})();

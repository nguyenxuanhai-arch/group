(function(){
  const elCards = document.getElementById('cards');
  const elTmpl = document.getElementById('card-template');
  const elYear = document.getElementById('year');
  if(elYear) elYear.textContent = new Date().getFullYear();

  const data = (window.GROUP_MEMBERS || []).slice();

  function render(list){
    elCards.innerHTML = '';
    const frag = document.createDocumentFragment();
    for(const m of list){
      const a = elTmpl.content.firstElementChild.cloneNode(true);
      const url = m.url || '#';
      a.href = url;
      a.title = (m.name||'') + (m.role? ' · '+m.role: '');
      // avatar: initials or emoji
      const av = a.querySelector('.avatar');
      const initials = (m.name||'?').split(/\s+/).map(s=>s[0]).slice(0,2).join('').toUpperCase();
      const fallbackText = (m.emoji || '').trim() || initials;
      av.textContent = fallbackText;
      if(m.image){
        const img = new Image();
        img.loading = 'lazy';
        img.alt = m.name || 'Ảnh hồ sơ';
        img.src = m.image;
        img.onerror = () => {
          // keep initials/emoji as fallback
          if(img && img.parentNode) img.parentNode.removeChild(img);
        };
        img.onload = () => {
          // hide text when image loads
          av.classList.add('has-img');
        };
        av.appendChild(img);
      }
      a.querySelector('.name').textContent = m.name || 'Không rõ';
      a.querySelector('.role').textContent = m.role || '';
      const tags = a.querySelector('.tags');
      (m.tags||[]).forEach(t=>{
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        tags.appendChild(span);
      });
      if(!/^https?:\/\//i.test(url)){
        a.setAttribute('rel','nofollow noopener noreferrer');
        a.setAttribute('target','_self');
      }
      frag.appendChild(a);
    }
    elCards.appendChild(frag);
  }

  // Render tất cả thành viên
  render(data);
})();

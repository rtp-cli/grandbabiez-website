(function(){
  var KEY='gb-textsize';
  function apply(large){
    document.documentElement.style.fontSize = large ? '20px' : '';
    var n=document.getElementById('size-normal'), l=document.getElementById('size-large');
    if(n) n.setAttribute('aria-pressed', String(!large));
    if(l) l.setAttribute('aria-pressed', String(large));
    try{ localStorage.setItem(KEY, large?'large':'normal'); }catch(e){}
  }
  try{ apply(localStorage.getItem(KEY)==='large'); }catch(e){}
  var n=document.getElementById('size-normal'); if(n) n.addEventListener('click',function(){apply(false);});
  var l=document.getElementById('size-large'); if(l) l.addEventListener('click',function(){apply(true);});

  var mb=document.getElementById('menu-btn'), nw=document.getElementById('gb-navwrap');
  if(mb&&nw) mb.addEventListener('click',function(){
    var open=nw.classList.toggle('open');
    mb.setAttribute('aria-expanded',String(open));
    mb.textContent=open?'Close':'Menu';
  });

  function ajax(formId, thanksId, errWrapId, label, failMsg, validate, netMsg){
    var form=document.getElementById(formId); if(!form) return;
    var thanks=document.getElementById(thanksId), errWrap=document.getElementById(errWrapId);
    var errP=errWrap?errWrap.querySelector('p'):null;
    var btn=form.querySelector('button[type="submit"]');
    function fail(msg){ if(errP){errP.textContent=msg; errWrap.hidden=!String(msg).trim();} if(btn){btn.disabled=false;btn.textContent=label;} }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(errWrap) errWrap.hidden=true;
      var data=new FormData(form);
      var v=validate(form,data);
      if(v){ fail(v); return; }
      if(btn){btn.disabled=true;btn.textContent='Sending\u2026';}
      fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'}})
        .then(function(r){
          if(r.ok){ form.hidden=true; if(thanks){thanks.hidden=false; thanks.setAttribute('tabindex','-1'); thanks.focus();} return; }
          fail(failMsg); if(btn) btn.focus();
        })
        .catch(function(){ fail(netMsg||failMsg); if(btn) btn.focus(); });
    });
  }

  ajax('join-form','join-thanks','join-error-wrap','Count me in',
    'Something went wrong. Please call (408) 219-7677 and we\u2019ll add you ourselves.',
    function(form){
      var n=form.querySelector('#name'), p=form.querySelector('#phone'), e=form.querySelector('#email');
      if(n&&!n.value.trim()){ n.focus(); return ' '; }
      if(p&&!p.value.trim()){ p.focus(); return ' '; }
      if(e&&(!e.value.trim()||!e.checkValidity())){ e.focus(); return 'Please enter your email address.'; }
      return null;
    },
    'We couldn\u2019t reach the server. Please call (408) 219-7677 and we\u2019ll add you ourselves.');
})();
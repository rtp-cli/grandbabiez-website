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

  function ajax(formId, thanksId, errWrapId, label, failMsg, validate){
    var form=document.getElementById(formId); if(!form) return;
    var thanks=document.getElementById(thanksId), errWrap=document.getElementById(errWrapId);
    var errP=errWrap?errWrap.querySelector('p'):null;
    var btn=form.querySelector('button[type="submit"]');
    function fail(msg){ if(errP){errP.textContent=msg; errWrap.hidden=false;} if(btn){btn.disabled=false;btn.textContent=label;} }
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
          fail(failMsg);
        })
        .catch(function(){ fail(failMsg); });
    });
  }

  ajax('join-form','join-thanks','join-error-wrap','Request my founding place',
    'Something went wrong. Please call (352) 290-3530 and we\u2019ll add you ourselves.',
    function(form){
      var n=form.querySelector('#firstname'), p=form.querySelector('#phone');
      if(n&&!n.value.trim()){ n.focus(); return ' '; }
      if(p&&!p.value.trim()){ p.focus(); return ' '; }
      return null;
    });

  ajax('vote-form','vote-thanks','vote-error-wrap','Send my vote',
    'Something went wrong. Please try again.',
    function(form,data){
      if(!data.get('most_wanted') && !String(data.get('other_idea')||'').trim())
        return 'Please pick one, or tell us your own idea.';
      return null;
    });
})();
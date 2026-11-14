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

  var joinFail='That didn\u2019t go through. Please call (408) 219-7677 or email greg@grandbabiez.com and we\u2019ll add you.';
  ajax('join-form','join-thanks','join-error-wrap','Become a founding family',
    joinFail,
    function(form){
      var n=form.querySelector('#name'), e=form.querySelector('#email'), c=form.querySelector('#feedback');
      var msg='Please add your name and email and tick the feedback box, then try again.';
      if(n&&!n.value.trim()){ n.focus(); return msg; }
      if(e&&(!e.value.trim()||!e.checkValidity())){ e.focus(); return msg; }
      if(c&&!c.checked){ c.focus(); return msg; }
      return null;
    },
    joinFail);

  var cover=document.getElementById('film-cover');
  if(cover){
    cover.hidden=false;
    cover.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+cover.getAttribute('data-video')+'?autoplay=1&rel=0&cc_load_policy=3&enablejsapi=1&origin='+encodeURIComponent(location.origin);
      f.title='Why Grandbabiez';
      // cc_load_policy=3 is undocumented but force-disables captions; the API call below is a backup.
      // Ask the player to unload its captions module so subtitles start off.
      f.addEventListener('load',function(){
        var send=function(msg){ try{ f.contentWindow.postMessage(JSON.stringify(msg),'*'); }catch(x){} };
        send({event:'listening',id:1,channel:'widget'});
        [0,400,1200,2500].forEach(function(ms){
          setTimeout(function(){ send({event:'command',func:'unloadModule',args:['captions'],id:1,channel:'widget'}); },ms);
        });
      });
      f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen=true;
      f.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
      f.style.cssText='display:block; width:100%; aspect-ratio:16/9; border:0; border-radius:16px;';
      cover.parentNode.replaceChild(f,cover);
      f.focus();
    });
  }
})();
/* Alternância entre modo escuro (padrão) e claro; a escolha fica no localStorage. */
(function(){
 const K="marvel-road-to-doomsday-theme",root=document.documentElement;
 let t="dark";try{t=localStorage.getItem(K)||"dark"}catch(e){}
 const ICON='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 3.5a8.5 8.5 0 0 0 0 17z" fill="currentColor"/></svg>';
 const b=document.createElement("button");b.className="theme-btn";b.type="button";
 function apply(){root.dataset.theme=t;b.innerHTML=ICON;b.title=t==="dark"?"Ativar modo claro":"Ativar modo escuro";b.setAttribute("aria-label",t==="dark"?"Ativar modo claro":"Ativar modo escuro")}
 b.onclick=()=>{t=t==="dark"?"light":"dark";try{localStorage.setItem(K,t)}catch(e){}apply()};
 document.querySelector(".nav .mini-progress").before(b);apply();
})();

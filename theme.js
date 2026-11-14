/* Alternância entre modo escuro (padrão) e claro; a escolha fica no localStorage. */
(function(){
 const K="marvel-road-to-doomsday-theme",root=document.documentElement;
 let t="dark";try{t=localStorage.getItem(K)||"dark"}catch(e){}
 const b=document.createElement("button");b.className="theme-btn";b.type="button";
 function apply(){root.dataset.theme=t;b.textContent=t==="dark"?"☀ Claro":"🌙 Escuro";b.setAttribute("aria-label",t==="dark"?"Ativar modo claro":"Ativar modo escuro")}
 b.onclick=()=>{t=t==="dark"?"light":"dark";try{localStorage.setItem(K,t)}catch(e){}apply()};
 document.querySelector(".nav .mini-progress").before(b);apply();
})();

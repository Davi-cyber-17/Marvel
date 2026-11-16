/* Menu sanduíche: as abas ficam numa gaveta lateral em vez de uma fileira de links. */
(function(){
 const head=document.querySelector(".nav"),nav=head.querySelector("nav");
 const btn=document.createElement("button");
 btn.className="menu-btn";btn.type="button";btn.setAttribute("aria-label","Abrir menu de abas");btn.setAttribute("aria-expanded","false");btn.setAttribute("aria-controls","menuNav");
 btn.innerHTML='<span></span><span></span><span></span>';
 head.prepend(btn);
 const cur=document.createElement("span");cur.className="menu-cur";
 head.querySelector(".logo-sm").after(cur);
 nav.id="menuNav";
 const title=document.createElement("div");title.className="menu-title";
 title.innerHTML='<span>Abas</span><button type="button" class="menu-close" aria-label="Fechar menu">×</button>';
 nav.prepend(title);
 const back=document.createElement("div");back.className="menu-backdrop";document.body.appendChild(back);
 function open(o){
  nav.classList.toggle("open",o);back.classList.toggle("open",o);btn.classList.toggle("open",o);
  btn.setAttribute("aria-expanded",o);btn.setAttribute("aria-label",o?"Fechar menu de abas":"Abrir menu de abas");
  document.body.style.overflow=o?"hidden":"";
  if(o){const a=nav.querySelector("a.on")||nav.querySelector("a");a&&a.focus({preventScroll:true})}else btn.focus({preventScroll:true});
 }
 const label=()=>{const a=nav.querySelector("a.on");cur.textContent=a?a.textContent:""};
 btn.addEventListener("click",()=>open(!nav.classList.contains("open")));
 back.addEventListener("click",()=>open(false));
 title.querySelector(".menu-close").addEventListener("click",()=>open(false));
 nav.addEventListener("click",e=>{if(e.target.closest("a")){open(false)}});
 addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open"))open(false)});
 addEventListener("hashchange",label);label();
})();

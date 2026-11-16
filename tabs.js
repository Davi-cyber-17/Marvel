/* Abas: mostra uma seção por vez. A página inicial (hero) aparece junto com a linha do tempo. */
(function(){
 const secs=[...document.querySelectorAll("main .section")],hero=document.getElementById("inicio");
 function show(){
  let id=location.hash.slice(1);if(id==="inicio"||!secs.some(s=>s.id===id))id="timeline";
  secs.forEach(s=>s.hidden=s.id!==id);hero.hidden=id!=="timeline";
  document.querySelectorAll(".nav nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id));
  scrollTo(0,0);dispatchEvent(new Event("resize"));
  const on=document.querySelector(".nav nav a.on");if(on)on.scrollIntoView({inline:"center",block:"nearest"});
 }
 addEventListener("hashchange",show);show();
})();

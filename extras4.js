/* Todas Produções Marvel: catálogo geral.
   Ano = ano de lançamento. Pôsteres das extras: assets/posters/extras/1.jpg, 2.jpg... (ver LEIA-ME). */
const TL={F:"Filme",S:"Série",E:"Especial"};
const TODAS=PRODUCTIONS.map((p,i)=>({p,n:i+1,y:p[7],k:0}));
const tSrc=x=>x.n?`assets/posters/${x.n}.jpg`:`assets/posters/extras/${x.k}.jpg`;
function todasList(t,ty,cr,ord){
 const l=TODAS.filter(x=>(!t||x.p[0].toLowerCase().includes(t))&&(!ty||x.p[2]===ty)&&(!cr||(cr==="in")===(x.p[9]==="P")));
 l.sort(ord==="az"?(a,b)=>a.p[0].localeCompare(b.p[0],"pt-BR"):(a,b)=>a.y-b.y||(a.n||999)-(b.n||999)||a.k-b.k);
 return l;
}
if(typeof section==="function"){
section("todas","Todas Produções Marvel",`<p class="lead">Catálogo geral com as ${PRODUCTIONS.length} produções, incluindo as de universos paralelos (What If...?, Marvel Zombies, X-Men '97...). O ano é o de lançamento e a lista segue a ordem de lançamento.</p>
<div class="tools"><input id="tSearch" placeholder="Buscar por nome" aria-label="Buscar"><select id="tType"><option value="">Filmes, séries e especiais</option><option value="F">Filmes</option><option value="S">Séries</option><option value="E">Especiais</option></select>
<select id="tCron"><option value="">Todas as linhas</option><option value="in">Linha principal</option><option value="out">Universos paralelos</option></select>
<select id="tOrder"><option value="r">Ordem de lançamento</option><option value="az">Ordem alfabética</option></select></div>
<p id="tCount" class="muted"></p><div class="grid" id="tGrid"></div>`);
q(".nav nav a").insertAdjacentHTML("afterend",'<a href="#todas">Todas Produções Marvel</a>');
function todas(){
 const l=todasList(q("#tSearch").value.toLowerCase(),q("#tType").value,q("#tCron").value,q("#tOrder").value);
 q("#tCount").textContent=`${l.length} produção(ões) encontrada(s)`;
 q("#tGrid").innerHTML=l.map(x=>{const p=x.p,i=TODAS.indexOf(x),done=x.n&&watched.has(x.n);
  return `<article class="card${done?" done":""}">${x.n?`<span class="num">${x.n}</span>`:""}<span class="tag ${p[2]==="F"?"film":""}">${TL[p[2]]}</span><img class="poster" data-t="${i}" loading="lazy" alt="Pôster de ${esc(p[0])}" src="${tSrc(x)}" onerror="this.onerror=null;this.src=fallback('${p[0].replace(/['"]/g,"")}','${x.n||"★"}')"><div class="info"><h3 data-t="${i}">${esc(p[0])}</h3><span class="year">${x.y}</span>${platBadge(p)}<span class="cron${x.n?"":" out"}">${x.n?"Cronologia #"+x.n:"Fora da cronologia"}</span><p>${esc(p[3])}</p>${x.n?`<button class="watch" data-n="${x.n}">${done?"Assistido ✓ (desmarcar)":"Marcar como assistido"}</button>`:""}</div></article>`}).join("")||'<p class="empty">Nada encontrado.</p>';
}
["tSearch","tType","tCron","tOrder"].forEach(id=>q("#"+id).addEventListener("input",todas));
q("#tGrid").addEventListener("click",e=>{
 const b=e.target.closest(".watch");if(b){toggle(+b.dataset.n);return}
 const t=e.target.closest("[data-t]");if(!t)return;
 const x=TODAS[+t.dataset.t];if(x.n){openModal(x.n-1);return}
 const p=x.p;q("#modalBody").innerHTML=`<img class="poster" style="max-height:320px;width:auto" alt="Pôster de ${esc(p[0])}" src="${tSrc(x)}" onerror="this.onerror=null;this.src=fallback('${p[0].replace(/['"]/g,"")}','★')"><div><h3>${esc(p[0])}</h3><p>${TL[p[2]]} · ${x.y} · ${PLAT[p[6]]}</p><p class="era-m">Fora da cronologia</p><p class="d">${esc(p[3])}</p></div>`;
 q("#modal").hidden=false;
});
const _u4=update;update=function(){_u4();todas()};
todas();
}

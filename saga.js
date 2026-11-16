/* Aba "Saga até: DoomsDay": ordem indicada na imagem enviada. Os números seguem a imagem (ela pula o 10). */
const SAGA=[
 [1,"Capitão América: O Primeiro Vingador","Capitão América: O Primeiro Vingador",2011,"I"],
 [2,"Capitã Marvel","Capitã Marvel",2019,"I"],
 [3,"Homem de Ferro","Homem de Ferro",2008,"I"],
 [4,"O Incrível Hulk","O Incrível Hulk",2008,"I"],
 [5,"Homem de Ferro 2","Homem de Ferro 2",2010,"I"],
 [6,"Thor","Thor",2011,"I"],
 [7,"Os Vingadores","Os Vingadores",2012,"I"],
 [8,"Homem de Ferro 3","Homem de Ferro 3",2013,"I"],
 [9,"Capitão América 2: O Soldado Invernal","Capitão América: O Soldado Invernal",2014,"I"],
 [11,"Guardiões da Galáxia","Guardiões da Galáxia",2014,"I"],
 [12,"Guardiões da Galáxia Vol. 2","Guardiões da Galáxia Vol. 2",2017,"I"],
 [13,"Vingadores: Era de Ultron","Vingadores: Era de Ultron",2015,"I"],
 [14,"Homem-Formiga","Homem-Formiga",2015,"I"],
 [15,"Capitão América: Guerra Civil","Capitão América: Guerra Civil",2016,"I"],
 [16,"Viúva Negra","Viúva Negra",2021,"I","*"],
 [17,"Homem-Aranha: De Volta ao Lar","Homem-Aranha: De Volta ao Lar",2017,"I"],
 [18,"Pantera Negra","Pantera Negra",2018,"I"],
 [19,"Doutor Estranho","Doutor Estranho",2016,"I"],
 [20,"Thor: Ragnarok","Thor: Ragnarok",2017,"I"],
 [21,"Homem-Formiga e a Vespa","Homem-Formiga e a Vespa",2018,"I"],
 [22,"Vingadores: Guerra Infinita","Vingadores: Guerra Infinita",2018,"I"],
 [23,"Vingadores: Ultimato","Vingadores: Ultimato",2019,"I"],
 [24,"WandaVision","WandaVision (Série)",2021,"M"],
 [25,"Shang-Chi e a Lenda dos Dez Anéis","Shang-Chi e a Lenda dos Dez Anéis",2021,"M"],
 [26,"Falcão e o Soldado Invernal","Falcão e o Soldado Invernal (Série)",2021,"M"],
 [27,"Homem-Aranha: Longe de Casa","Homem-Aranha: Longe de Casa",2019,"M"],
 [28,"Eternos","Eternos",2021,"M"],
 [29,"Homem-Aranha: Sem Volta para Casa","Homem-Aranha: Sem Volta para Casa",2021,"M"],
 [30,"Loki — Temporada 1","Loki - Temporada 1 (Série)",2021,"M"],
 [31,"Doutor Estranho no Multiverso da Loucura","Doutor Estranho no Multiverso da Loucura",2022,"M"],
 [32,"Thor: Amor e Trovão","Thor: Amor e Trovão",2022,"M"],
 [33,"Pantera Negra: Wakanda Para Sempre","Pantera Negra: Wakanda Para Sempre",2022,"M"],
 [34,"Homem-Formiga e a Vespa: Quantumania","Homem-Formiga e a Vespa: Quantumania",2023,"M"],
 [35,"Loki — Temporada 2","Loki - Temporada 2 (Série)",2023,"M"],
 [36,"Guardiões da Galáxia Vol. 3","Guardiões da Galáxia Vol. 3",2023,"M"],
 [37,"As Marvels","As Marvels",2023,"M"],
 [38,"Deadpool & Wolverine","Deadpool & Wolverine",2024,"M"],
 [39,"Capitão América: Admirável Mundo Novo","Capitão América: Admirável Mundo Novo",2025,"M"],
 [40,"Thunderbolts*","Thunderbolts*",2025,"M"],
 [41,"Quarteto Fantástico: Primeiros Passos","Quarteto Fantástico: Primeiros Passos",2025,"M"]
].map(s=>({num:s[0],idx:PRODUCTIONS.findIndex(p=>p[0]===s[1]),title:s[2],year:s[3],saga:s[4],star:s[5]})).filter(s=>s.idx>=0);
const EMBLEM=`<img class="dd-emblem" src="assets/doomsday-logo.jpg" alt="Símbolo dos Vingadores em vitral verde">`;
section("saga","Saga até: DoomsDay",`<div class="dd-banner">${EMBLEM}<div><small>Ordem definitiva</small><b>Toda a história do MCU</b></div></div><p class="lead">Ordem definitiva para assistir toda a história do MCU. Toque em um filme para ver os detalhes e use ✓ para marcar como assistido.</p>
<p id="sagaProg" class="muted"></p><div class="saga-list" id="sagaList"></div>
<div class="saga-next"><b>42</b><div>Próximos capítulos<small>(anúncios futuros)</small></div></div>
<p class="saga-note">* Pule a cena pós-créditos do item 16 (Viúva Negra) e assista só depois de Ultimato. Nos demais, assista às cenas pós-créditos.</p>
<div class="saga-legend"><span><i class="si"></i> Saga do Infinito (Fases 1, 2 e 3)</span><span><i class="sm"></i> Saga do Multiverso (Fases 4, 5 e 6)</span><span><i class="sp"></i> Próximos capítulos</span></div>`);
q(".nav nav").insertAdjacentHTML("beforeend",'<a href="#saga">Saga até: DoomsDay</a>');
function saga(){
 const d=SAGA.filter(s=>watched.has(s.idx+1)).length;
 q("#sagaProg").textContent=`${d} de ${SAGA.length} assistidos.`;
 q("#sagaList").innerHTML=SAGA.map(s=>{const n=s.idx+1,done=watched.has(n),p=PRODUCTIONS[s.idx];
  return `<div class="saga-row ${s.saga==="I"?"inf":"mul"}${done?" done":""}"><span class="sn">${s.num}</span><img class="sp-img" loading="lazy" alt="" src="assets/posters/${n}.jpg" onerror="this.onerror=null;this.src=fallback('${p[0].replace(/['"]/g,"")}',${n})"><button class="st" data-i="${s.idx}">${esc(s.title)}</button><span class="sy">(${s.year})${s.star||""}</span><button class="sc" data-n="${n}" aria-label="${done?"Desmarcar":"Marcar como assistido"}">${done?"✓":"○"}</button></div>`}).join("");
}
q("#sagaList").addEventListener("click",e=>{const c=e.target.closest(".sc");if(c){toggle(+c.dataset.n);return}const t=e.target.closest(".st");if(t)openModal(+t.dataset.i)});
const _u5=update;update=function(){_u5();saga()};
saga();

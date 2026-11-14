/* MARVEL — Toda a História em Ordem: extras (catálogo, joias, ranking, conquistas, jornada, backup).
   Usa PRODUCTIONS e watched de script.js. Dados pessoais ficam só neste navegador (localStorage). */
const XK="marvel-road-to-doomsday-extras-v1";
let X={ratings:{},favs:[],best:{},nospoil:false,ach:[]};
try{X=Object.assign(X,JSON.parse(localStorage.getItem(XK)||"{}"))}catch(e){}
const sx=()=>{try{localStorage.setItem(XK,JSON.stringify(X))}catch(e){}};
const q=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* [nome, cor, descrição, nº da produção que desbloqueia (posição na linha do tempo)] */
const STONES=[
 ["Joia do Espaço","#2f6bff","Está dentro do Tesseract, visto desde Capitão América: O Primeiro Vingador.",2],
 ["Joia da Mente","#f2b632","Fica no cetro usado por Loki em Os Vingadores.",8],
 ["Joia do Poder","#7a3cff","Guardada em um orbe disputado em Guardiões da Galáxia.",12],
 ["Joia do Tempo","#2fd16b","Fica no Olho de Agamotto, de Doutor Estranho.",22],
 ["Joia da Realidade","#e62429","Thanos a obtém em Vingadores: Guerra Infinita.",25],
 ["Joia da Alma","#ff8a1f","Fica em Vormir; Thanos a obtém em Vingadores: Guerra Infinita.",25]];
const ACH=[
 ["Primeiros passos","Assistir à 1ª produção","🎬",()=>watched.size>=1],
 ["Iniciante Marvel","Assistir a 5 produções","⭐",()=>watched.size>=5],
 ["Conhecedor do MCU","Assistir a 15 produções","🛡️",()=>watched.size>=15],
 ["Mestre da Marvel","Assistir a 30 produções","👑",()=>watched.size>=30],
 ["Colecionador","Desbloquear as 6 Joias do Infinito","💎",()=>STONES.every(s=>watched.has(s[3]))],
 ["Jornada completa","Assistir a todas as produções","🏆",()=>watched.size===PRODUCTIONS.length]];

function section(id,title,html){const s=document.createElement("section");s.id=id;s.className="section";s.innerHTML=`<h2>${title}</h2>${html}`;q("main").appendChild(s);return s}

/* ---- injeção das seções ---- */
section("universo","Universo Marvel",`<p class="lead">Catálogo das produções cadastradas. A "ordem por ano" usa o ano indicado na cronologia (dentro do mesmo ano, mantém a ordem da lista).</p>
<div class="tools"><input id="uSearch" placeholder="Buscar por nome" aria-label="Buscar"><input id="uYear" type="number" placeholder="Ano" style="width:90px" aria-label="Ano">
<select id="uType"><option value="">Filmes e séries</option><option value="F">Filmes</option><option value="S">Séries</option></select>
<select id="uStatus"><option value="">Todos</option><option value="done">Assistidos</option><option value="todo">Pendentes</option></select>
<select id="uOrder"><option value="c">Ordem cronológica</option><option value="r">Ordem por ano</option></select>
<label class="chip"><input type="checkbox" id="noSpoil"> Modo sem spoilers</label></div>
<p id="uCount" class="muted"></p><div class="grid" id="uGrid"></div>`);
section("joias","Joias do Infinito",`<p class="lead">Cada joia acende quando você marca como assistida a produção indicada.</p><div class="stone-grid" id="stoneGrid"></div>`);
section("ranking","Meu Ranking Marvel",`<p class="lead">Dê notas de 0 a 10 e marque favoritos. Fica salvo neste navegador.</p><div id="rankList"></div><h3>Ranking pessoal</h3><ol id="rankTop"></ol>`);
section("conquistas","Conquistas",`<div class="ach-grid" id="achGrid"></div>`);
section("jornada","Minha Jornada",`<div class="stats" id="stats"></div>
<div class="box"><h3>Simulador de maratona</h3><div class="tools"><label>Produções por dia <input id="sPer" type="number" min="1" value="2" style="width:70px"></label>
<label>Concluir até <input id="sDate" type="date"></label></div><p id="sOut"></p></div>
<div class="box"><h3>Backup do progresso</h3><p class="muted">Seus dados ficam apenas no navegador deste dispositivo. Exporte para guardar ou levar para outro aparelho.</p>
<div class="tools"><button class="chip" id="exp">Exportar JSON</button><label class="chip">Importar JSON <input type="file" id="imp" accept=".json" hidden></label></div></div>`);
const links=[["universo","Universo"],["joias","Joias"],["ranking","Ranking"],["conquistas","Conquistas"],["jornada","Minha Jornada"]];
q(".nav nav").insertAdjacentHTML("beforeend",links.map(l=>`<a href="#${l[0]}">${l[1]}</a>`).join(""));

/* ---- catálogo ---- */
function catalog(){
 const t=q("#uSearch").value.toLowerCase(),y=q("#uYear").value,ty=q("#uType").value,st=q("#uStatus").value;
 let l=PRODUCTIONS.map((p,i)=>({p,n:i+1})).filter(({p,n})=>(!t||p[0].toLowerCase().includes(t))&&(!y||p[1]==y)&&(!ty||p[2]===ty)&&(!st||(st==="done")===watched.has(n)));
 if(q("#uOrder").value==="r")l.sort((a,b)=>a.p[1]-b.p[1]||a.n-b.n);
 q("#uCount").textContent=`${l.length} produção(ões) encontrada(s)`;
 q("#uGrid").innerHTML=l.map(({p,n})=>`<article class="card${watched.has(n)?" done":""}"><span class="num">${n}</span><span class="tag ${p[2]==="F"?"film":""}">${TYPE_LABEL[p[2]]}</span><img class="poster" loading="lazy" alt="Pôster de ${esc(p[0])}" src="${p[4]||`assets/posters/${n}.jpg`}" onerror="this.onerror=null;this.src=fallback('${p[0].replace(/'/g,"")}',${n})"><div class="info"><h3>${esc(p[0])}</h3><span class="year">${yr(p)}</span>${platBadge(p)}<p>${esc(p[3])}</p><button class="watch" data-n="${n}">${watched.has(n)?"Assistido ✓ (desmarcar)":"Marcar como assistido"}</button></div></article>`).join("")||'<p class="empty">Nada encontrado.</p>';
}
["uSearch","uYear","uType","uStatus","uOrder"].forEach(id=>q("#"+id).addEventListener("input",catalog));
q("#uGrid").addEventListener("click",e=>{const b=e.target.closest(".watch");if(b)toggle(+b.dataset.n)});
document.addEventListener("click",e=>{if(e.target.matches(".info p"))e.target.classList.toggle("rev")});
q("#noSpoil").checked=X.nospoil;document.body.classList.toggle("nospoil",X.nospoil);
q("#noSpoil").onchange=e=>{X.nospoil=e.target.checked;document.body.classList.toggle("nospoil",X.nospoil);sx()};

/* ---- joias, conquistas, stats ---- */
let fullShown=false;
function stones(){
 q("#stoneGrid").innerHTML=STONES.map(s=>{const on=watched.has(s[3]);return `<div class="stone${on?" on":""}" style="--c:${s[1]}"><b>${s[0]}</b><small>${esc(s[2])}</small><small>${on?"Desbloqueada":"Requisito: assistir "+esc(PRODUCTIONS[s[3]-1][0])}</small></div>`}).join("");
 const all=STONES.every(s=>watched.has(s[3]));q("#joias").classList.toggle("full",all);
 if(all&&!fullShown){fullShown=true;if(typeof burst==="function")[.3,.5,.7].forEach((f,k)=>setTimeout(()=>burst(innerWidth*f,innerHeight*.4,26),k*250))}
 if(!all)fullShown=false;
}
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),3500)}
function achievements(){
 q("#achGrid").innerHTML=ACH.map(a=>{const on=a[3]();if(on&&!X.ach.includes(a[0])){X.ach.push(a[0]);sx();toast("Conquista: "+a[0])}
  return `<div class="ach${on?" on":""}"><b>${a[2]} ${a[0]}</b><small>${a[1]}</small><small>${on?"Desbloqueada":"Bloqueada"}</small></div>`}).join("");
}
function stats(){
 const T=PRODUCTIONS.length,d=watched.size,fl=[...watched].filter(n=>PRODUCTIONS[n-1][2]==="F").length;
 const r=Object.values(X.ratings),avg=r.length?(r.reduce((a,b)=>a+b,0)/r.length).toFixed(1):"–";
 const items=[["Cadastradas",T],["Assistidas",d],["Pendentes",T-d],["Conclusão",Math.round(d/T*100)+"%"],["Filmes",fl],["Séries",d-fl],["Joias",STONES.filter(s=>watched.has(s[3])).length+"/6"],["Conquistas",X.ach.length+"/"+ACH.length],["Nota média",avg]];
 q("#stats").innerHTML=items.map(i=>`<div><b>${i[1]}</b>${i[0]}</div>`).join("");
 const rem=T-d,per=Math.max(1,+q("#sPer").value||1),days=Math.ceil(rem/per),end=new Date();end.setDate(end.getDate()+days);
 let o=rem?`Faltam ${rem} produções. A ${per} por dia, são ${days} dia(s): conclusão em ${end.toLocaleDateString("pt-BR")}.`:"Maratona concluída!";
 const tg=q("#sDate").value;if(tg&&rem){const left=Math.ceil((new Date(tg+"T23:59:59")-new Date())/864e5);o+=left>0?` Para terminar até ${new Date(tg+"T12:00").toLocaleDateString("pt-BR")}, assista ${Math.ceil(rem/left)} por dia.`:" A data escolhida já passou."}
 q("#sOut").textContent=o;
}
["sPer","sDate"].forEach(id=>q("#"+id).addEventListener("input",stats));

/* ---- ranking (só filmes) ---- */
function ranking(){
 const f=PRODUCTIONS.map((p,i)=>[p,i+1]).filter(([p])=>p[2]==="F");
 q("#rankList").innerHTML=f.map(([p,n])=>`<div class="rank-row"><button class="fav${X.favs.includes(n)?" on":""}" data-fav="${n}" aria-label="Favorito">★</button><span class="t">${esc(p[0])}</span><select data-rate="${n}" aria-label="Nota"><option value="">Sem nota</option>${[...Array(11).keys()].map(v=>`<option${X.ratings[n]===v?" selected":""}>${v}</option>`).join("")}</select></div>`).join("");
 const top=f.filter(([,n])=>X.ratings[n]!==undefined||X.favs.includes(n)).sort((a,b)=>(X.favs.includes(b[1])-X.favs.includes(a[1]))||((X.ratings[b[1]]??-1)-(X.ratings[a[1]]??-1)));
 q("#rankTop").innerHTML=top.map(([p,n])=>`<li>${X.favs.includes(n)?"★ ":""}${esc(p[0])} — ${X.ratings[n]??"sem nota"}</li>`).join("")||"<li class='muted'>Avalie filmes para montar seu ranking.</li>";
}
q("#ranking").addEventListener("click",e=>{const b=e.target.closest("[data-fav]");if(!b)return;const n=+b.dataset.fav;X.favs=X.favs.includes(n)?X.favs.filter(x=>x!==n):[...X.favs,n];sx();ranking();stats()});
q("#ranking").addEventListener("change",e=>{const s=e.target.closest("[data-rate]");if(!s)return;const n=+s.dataset.rate;s.value===""?delete X.ratings[n]:X.ratings[n]=+s.value;sx();ranking();stats()});

/* ---- backup ---- */
q("#exp").onclick=()=>{const d={ordem:4,progresso:[...watched],extras:X},a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:"application/json"}));a.download="marvel-progresso.json";a.click()};
q("#imp").onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{try{const d=JSON.parse(t);if(!Array.isArray(d.progresso)||typeof d.extras!=="object")throw 0;
 let pr=d.progresso,ex=d.extras;if(d.ordem!==4){if(d.ordem===2)[pr,ex]=remap70(pr,ex);else if(d.ordem!==3)[pr,ex]=remapOld(pr,ex);[pr,ex]=remap60(pr,ex)}localStorage.setItem(KEY,JSON.stringify(pr));localStorage.setItem(XK,JSON.stringify(ex));location.reload()}catch(_){alert("Arquivo inválido.")}})};

/* ---- ligação com o fluxo existente + destaque da navegação ---- */
function all(){catalog();stones();achievements();stats();ranking()}
const _u3=update;update=function(){_u3();all()};
all();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll(".nav nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main .section").forEach(s=>io.observe(s));

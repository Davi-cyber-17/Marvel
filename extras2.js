/* Extras v2: fichas de personagens. Dados só neste navegador. */
X.explored=X.explored||[];
ACH.push(["Especialista em personagens","Abrir 5 fichas de personagens","🔎",()=>X.explored.length>=5]);
/* [nome, alternativo, tipo, grupo, poderes, primeira aparição, descrição, situação (spoiler)] */
const CH=[
 ["Homem de Ferro","Tony Stark","Herói","Vingadores","Gênio inventor; armadura tecnológica com voo e armas.","Homem de Ferro (2008)","Empresário e inventor que constrói a armadura após ser capturado.","Morre em Vingadores: Ultimato."],
 ["Capitão América","Steve Rogers","Herói","Vingadores","Força e resistência de supersoldado; escudo de vibranium.","Capitão América: O Primeiro Vingador (2011)","Soldado dos anos 1940 transformado em supersoldado.","Passa o escudo a Sam Wilson em Ultimato."],
 ["Thor","Thor Odinson","Herói","Vingadores","Controle do trovão, força divina, voo com martelo ou machado.","Thor (2011)","Deus nórdico do trovão, príncipe de Asgard.","Segue vivo após Ultimato e aparece em Thor: Amor e Trovão."],
 ["Hulk","Bruce Banner","Herói","Vingadores","Força descomunal ao se transformar; Banner é cientista brilhante.","O Incrível Hulk (2008)","Cientista que se transforma em Hulk quando sua raiva dispara.","Segue vivo no MCU até onde o catálogo cobre."],
 ["Viúva Negra","Natasha Romanoff","Herói","Vingadores","Espiã e combatente altamente treinada.","Homem de Ferro 2 (2010)","Ex-agente que se torna Vingadora.","Morre em Vingadores: Ultimato."],
 ["Loki","Loki Laufeyson","Anti-herói","Asgard","Magia, ilusões e mudança de forma.","Thor (2011)","Irmão adotivo de Thor, vilão em Os Vingadores e protagonista da série Loki.","Tem destinos diferentes entre filmes e série."],
 ["Thanos","Titã Louco","Vilão","Ordem Negra","Força e resistência extremas.","Os Vingadores (2012, cena pós-créditos)","Titã que busca as Joias do Infinito.","Morre em Vingadores: Ultimato."],
 ["Senhor das Estrelas","Peter Quill","Herói","Guardiões da Galáxia","Combatente e piloto com armas de elementos.","Guardiões da Galáxia (2014)","Líder dos Guardiões da Galáxia.","Segue vivo após Guardiões Vol. 3."],
 ["Pantera Negra","T'Challa","Herói","Wakanda","Força e agilidade ampliadas; traje de vibranium.","Capitão América: Guerra Civil (2016)","Rei de Wakanda.","Morre em Pantera Negra: Wakanda Para Sempre."],
 ["Doutor Estranho","Stephen Strange","Herói","Místicos","Artes místicas e viagem por dimensões.","Doutor Estranho (2016)","Ex-neurocirurgião que se torna Mago Supremo.","Segue vivo no MCU até onde o catálogo cobre."]];
section("personagens2","Fichas de personagens",`<div class="tools" id="cFilter">${["Todos","Herói","Vilão","Anti-herói","Vingadores","Guardiões da Galáxia","Outros"].map((f,i)=>`<button class="chip${i?"":" on"}" data-cf="${f}">${f}</button>`).join("")}</div><div class="grid chars" id="cGrid"></div>`);
q(".nav nav").insertAdjacentHTML("beforeend",[["personagens2","Fichas"]].map(l=>`<a href="#${l[0]}">${l[1]}</a>`).join(""));

/* personagens + modal */
let cf="Todos";
function chars(){q("#cGrid").innerHTML=CH.map((c,i)=>[c,i]).filter(([c])=>cf==="Todos"||c[2]===cf||c[3]===cf||(cf==="Outros"&&!["Vingadores","Guardiões da Galáxia"].includes(c[3]))).map(([c,i])=>`<article class="card" style="padding:1rem"><h3>${esc(c[0])}</h3><p>${esc(c[1])} · ${c[2]} · ${esc(c[3])}</p><button class="watch" data-c="${i}">Ver ficha</button></article>`).join("")}
q("#cFilter").onclick=e=>{const b=e.target.closest("[data-cf]");if(!b)return;cf=b.dataset.cf;q("#cFilter .on").classList.remove("on");b.classList.add("on");chars()};
q("#cGrid").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;const i=+b.dataset.c,c=CH[i];if(!X.explored.includes(i)){X.explored.push(i);sx();achievements();stats()}
 q("#modalBody").innerHTML=`<h3>${esc(c[0])}</h3><p>${esc(c[1])} · ${c[2]} · ${esc(c[3])}</p><p>${esc(c[6])}</p><p><b>Poderes e habilidades:</b> ${esc(c[4])}</p><p><b>Primeira aparição:</b> ${esc(c[5])}</p><p><b>Situação (spoiler, clique para revelar):</b> <span class="sp" style="filter:blur(6px);cursor:pointer" onclick="this.style.filter='none'">${esc(c[7])}</span></p>`;q("#modal").hidden=false};

chars();achievements();

/* Ainda não lançados / sem confirmação (pesquisa em 13/11/2026). */
const FUT=[
 ["Filmes",[
  ["Datas confirmadas",["Vingadores: Doutor Destino — 18 de dezembro de 2026","Vingadores: Guerras Secretas — 17 de dezembro de 2027"]],
  ["Sem data definida",["Shang-Chi 2","Pantera Negra 3","Guardiões da Galáxia Vol. 4","Doutor Estranho 3","Blade (engavetado, sem data)","Armor Wars (em desenvolvimento como filme, sem data)","X-Men (Reboot) (Rumor)","Nova (Rumor)","Motoqueiro Fantasma (Rumor)"]]]],
 ["Séries",[
  ["Datas confirmadas",["Demolidor: Renascido — 3ª Temporada (março de 2027), com o retorno dos Defensores"]],
  ["Sem data definida",["Ms. Marvel — 2ª Temporada","Cavaleiro da Lua — 2ª Temporada","Loki — 3ª Temporada"]]]]];
section("futuros","Lançamentos futuros",`<p class="lead">Só o que ainda não foi lançado, segundo pesquisa em 13/11/2026. Datas e rumores podem mudar.</p><div class="fut">${FUT.map(g=>`<div class="box"><h3>${esc(g[0])}</h3>${g[1].map(b=>`<h4>${esc(b[0])}</h4><ul>${b[1].map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`).join("")}</div>`).join("")}</div>`);
q(".nav nav").insertAdjacentHTML("beforeend",'<a href="#futuros">Futuros</a>');

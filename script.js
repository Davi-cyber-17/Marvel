/* =====================================================
   MARVEL — TODA A HISTÓRIA EM ORDEM
   Para trocar pôsteres: preencha o campo "poster" (URL) em cada item de PRODUCTIONS.
   ===================================================== */

/* [título, ano na história, tipo (F filme, S série, E especial), premissa, pôster, aviso, plataforma,
    ano de lançamento, importância (E essencial, R recomendado, O opcional), linha (P principal, A universo paralelo),
    o que acrescenta à história principal, conexões, rótulo do ano]
   Ordem = cronologia da história, seguindo a linha do tempo da Marvel no Disney+ (conferida em 13/11/2026). */
const PRODUCTIONS = [
 ["Olhos de Wakanda", 0, "S", "Animação antológica: os Hatut Zeraze, espiões de Wakanda, recuperam artefatos de vibranium roubados ao longo da história.", null, "Spoiler leve de Pantera Negra (2018): se preferir, assista depois dele.", "D", 2025, "O", "P", "Mostra que Wakanda protege o vibranium em segredo há séculos, por meio dos Hatut Zeraze (os “Cães de Guerra”). O episódio final liga a série a Pantera Negra (2018): o machado de vibranium que Killmonger rouba do museu britânico precisa voltar ao lugar. Também apresenta Jorani, uma nova Punho de Ferro, e um Pantera Negra vindo de um futuro sombrio.", "Dialoga com: Pantera Negra, Wakanda para Sempre.", "Séculos de história, até 2018"],
 ["Capitão América: O Primeiro Vingador", 1943, "F", "Steve Rogers vira o supersoldado dos anos 1940 e enfrenta a Hydra.", null, null, "D", 2011, "E", "P", "Origem de Steve Rogers, do escudo de vibranium e da amizade com Bucky e Peggy Carter. Apresenta a Hydra, o Caveira Vermelha e o Tesseract, que guarda a Joia do Espaço. Steve cai no gelo e só acorda décadas depois, o que leva a Os Vingadores.", "Prepara: Capitã Marvel, Os Vingadores, O Soldado Invernal.", "1942–1945"],
 ["Capitã Marvel", 1995, "F", "Carol Danvers descobre seus poderes nos anos 1990 e cruza com Nick Fury.", null, "Veja a cena do meio dos créditos só depois de Vingadores: Guerra Infinita (tem spoiler).", "D", 2019, "E", "P", "Mostra como Carol Danvers ganha seus poderes, a guerra entre kree e skrulls e o início da amizade com Nick Fury. É por causa dela que Fury cria a Iniciativa Vingadores. Também explica o gato Goose e o Tesseract nas mãos da S.H.I.E.L.D.", "Prepara: Guerra Infinita, Ultimato, Invasão Secreta, As Marvels.", null],
 ["Homem de Ferro", 2010, "F", "Tony Stark constrói sua armadura e inicia o universo cinematográfico.", null, null, "D", 2008, "E", "P", "Tony Stark é capturado, constrói a primeira armadura e assume a identidade de Homem de Ferro. Apresenta Pepper Potts, Rhodey, Obadiah Stane e a S.H.I.E.L.D.; a cena final anuncia a Iniciativa Vingadores. É o primeiro filme do MCU.", "Prepara: Homem de Ferro 2, Os Vingadores.", null],
 ["Homem de Ferro 2", 2010, "F", "Tony enfrenta a pressão do governo e um novo inimigo.", null, null, "D", 2010, "R", "P", "Tony revela ao mundo o lado frágil do reator, enfrenta Ivan Vanko e descobre o legado do pai, Howard Stark. Rhodey passa a ser o Máquina de Combate e Natasha Romanoff (Viúva Negra) aparece pela primeira vez. A cena final mostra Coulson no Novo México, rumo a Thor.", "Prepara: Thor, Os Vingadores.", null],
 ["O Incrível Hulk", 2010, "F", "Bruce Banner foge enquanto tenta controlar sua transformação.", null, "O filme mais isolado dos primeiros anos; o Hulk volta em Os Vingadores com outro ator.", "D", 2008, "R", "P", "Mostra a origem do Hulk, a perseguição do general Ross e o reencontro com Betty Ross. Emil Blonsky vira o Abominável. Acontece na mesma época de Homem de Ferro 2 e termina com Tony Stark conversando com Ross sobre formar uma equipe.", "Prepara: Os Vingadores; Ross volta em Capitão América: Admirável Mundo Novo.", null],
 ["Thor", 2011, "F", "O deus do trovão é banido para a Terra.", null, null, "D", 2011, "E", "P", "Thor, príncipe de Asgard, é banido para a Terra e aprende a ser digno do Mjölnir. Apresenta Odin, Loki, Heimdall, a ponte Bifrost, Jane Foster e Erik Selvig. Loki descobre sua verdadeira origem; a cena final mostra o Tesseract e abre caminho para Os Vingadores.", "Prepara: Os Vingadores, Thor: O Mundo Sombrio.", null],
 ["Os Vingadores", 2012, "F", "Os heróis se unem pela primeira vez contra Loki.", null, null, "D", 2012, "E", "P", "A Iniciativa Vingadores vira realidade: Tony, Steve, Thor, Bruce, Natasha e Clint enfrentam Loki e o exército chitauri na Batalha de Nova York. Loki usa o cetro (Joia da Mente) e o Tesseract. A cena pós-créditos apresenta Thanos, o vilão por trás de toda a Saga do Infinito.", "Prepara: Homem de Ferro 3, Mundo Sombrio, Soldado Invernal, Era de Ultron.", null],
 ["Thor: O Mundo Sombrio", 2013, "F", "Thor enfrenta os Elfos Sombrios e o vilão Malekith.", null, null, "D", 2013, "R", "P", "Malekith busca o Éter, que é a Joia da Realidade, e ameaça os Nove Reinos. Thor e Loki se unem, Loki aparenta morrer e depois assume o trono se passando por Odin. Na cena pós-créditos, o Éter é entregue ao Colecionador, o que liga Thor ao lado cósmico do MCU.", "Prepara: Guardiões da Galáxia, Thor: Ragnarok.", null],
 ["Homem de Ferro 3", 2012, "F", "Tony lida com as consequências da batalha de Nova York.", null, null, "D", 2013, "R", "P", "Depois de Nova York, Tony sofre de insônia e ansiedade, enfrenta o Mandarim e o programa Extremis e destrói suas armaduras. O “Mandarim” era na verdade o ator Trevor Slattery, que volta em Shang-Chi e em Wonder Man. O filme encerra a fase em que Tony é o centro do MCU.", "Prepara: Era de Ultron; Trevor Slattery volta em Shang-Chi e Wonder Man.", "Natal de 2012"],
 ["Capitão América 2: O Soldado Invernal", 2014, "F", "Steve descobre uma conspiração dentro da S.H.I.E.L.D.", null, null, "D", 2014, "E", "P", "A Hydra infiltrada na S.H.I.E.L.D. é exposta e a organização desmorona. Steve reencontra Bucky transformado no Soldado Invernal e conhece Sam Wilson (Falcão). Na cena final, aparecem Wanda e Pietro Maximoff sob experimentos da Hydra.", "Prepara: Era de Ultron, Guerra Civil, Falcão e o Soldado Invernal.", null],
 ["Guardiões da Galáxia", 2014, "F", "Um grupo improvável de renegados disputa uma poderosa esfera.", null, null, "D", 2014, "E", "P", "Peter Quill reúne Gamora, Drax, Rocket e Groot para impedir que Ronan use a Joia do Poder, guardada num orbe. Apresenta a Nova Corps, o Colecionador e a dimensão cósmica do MCU. Thanos aparece como o chefe de Ronan, ligando o time à ameaça maior.", "Prepara: Guardiões Vol. 2, Guerra Infinita.", null],
 ["Guardiões da Galáxia Vol. 2", 2014, "F", "Peter Quill conhece a verdade sobre seu pai.", null, null, "D", 2017, "R", "P", "Peter descobre que seu pai é Ego, um Celestial, e os Guardiões o enfrentam. Aprofunda a relação entre Gamora e Nebulosa, mostra Yondu como figura paterna e apresenta Mantis. É a base emocional do time para Guerra Infinita e Vol. 3.", "Prepara: Guerra Infinita, Especial de Festas, Guardiões Vol. 3.", null],
 ["Eu Sou Groot", 2014, "S", "Minisséries de episódios curtos com o pequeno Groot.", null, null, "D", 2022, "O", "P", "Curtas animados e cômicos com o Baby Groot. Não acrescentam nada à trama principal e podem ser pulados sem perda.", "Sem conexões importantes.", null],
 ["Eu Sou Groot — Temporada 2", 2014, "S", "Nova leva de curtas com o pequeno Groot.", null, null, "D", 2023, "O", "P", "Mais aventuras curtas e leves do Baby Groot. Também não afetam a história principal.", "Sem conexões importantes.", null],
 ["Vingadores: Era de Ultron", 2015, "F", "Os Vingadores enfrentam uma inteligência artificial hostil.", null, null, "D", 2015, "E", "P", "Tony e Bruce criam Ultron, que tenta extinguir a humanidade. Nasce o Visão, com a Joia da Mente; Wanda e Pietro entram para o time e Pietro morre. Revela a família secreta de Clint e plantam as bases de WandaVision e VisionQuest.", "Prepara: Guerra Civil, Guerra Infinita, WandaVision, VisionQuest.", null],
 ["Homem-Formiga", 2015, "F", "Scott Lang assume o manto do Homem-Formiga.", null, null, "D", 2015, "E", "P", "Scott Lang, ex-ladrão, recebe o traje de Hank Pym, aprende a encolher e enfrenta Darren Cross. Apresenta Hope van Dyne, o Reino Quântico e a ideia de que a Vespa original, Janet, sumiu lá. A cena pós-créditos liga Scott à equipe de Steve e Sam.", "Prepara: Guerra Civil, Homem-Formiga e a Vespa, Ultimato.", null],
 ["Capitão América: Guerra Civil", 2016, "F", "Os Vingadores se dividem sobre o controle governamental.", null, null, "D", 2016, "E", "P", "Os Acordos de Sokovia dividem os heróis em dois times, o de Tony e o de Steve. Apresenta T'Challa (Pantera Negra) e o Homem-Aranha, e traz o Homem-Formiga. Steve e Tony se rompem e os Vingadores se dispersam, algo que pesa até Ultimato.", "Prepara: Viúva Negra, Pantera Negra, De Volta ao Lar, Guerra Infinita.", null],
 ["Viúva Negra", 2016, "F", "Natasha Romanoff confronta seu passado.", null, "Veja a cena pós-créditos só depois de Vingadores: Ultimato (ela leva a Gavião Arqueiro).", "D", 2021, "R", "P", "Acontece logo depois de Guerra Civil, com Natasha foragida. Ela reencontra a família falsa (Yelena, Alexei e Melina) e enfrenta a Sala Vermelha e Dreykov. Yelena Belova volta em Gavião Arqueiro e Thunderbolts*.", "Prepara: Gavião Arqueiro, Thunderbolts*.", null],
 ["Pantera Negra", 2016, "F", "T'Challa assume o trono de Wakanda.", null, null, "D", 2018, "E", "P", "T'Challa volta a Wakanda, é coroado e enfrenta Killmonger, que reivindica o trono. O filme mostra Wakanda ao mundo e decide abrir as fronteiras e dividir sua tecnologia de vibranium. Apresenta Shuri, Okoye e Nakia.", "Prepara: Guerra Infinita, Wakanda para Sempre, Coração de Ferro.", "Logo após Guerra Civil"],
 ["Homem-Aranha: De Volta ao Lar", 2016, "F", "Peter Parker tenta provar seu valor sob a tutela de Tony Stark.", null, null, "N", 2017, "R", "P", "Peter equilibra a vida de estudante e de herói e enfrenta o Abutre, que usa tecnologia alienígena sobrada do ataque a Nova York. Tony vira mentor de Peter. Apresenta Ned, MJ e o papel de Happy Hogan.", "Prepara: Guerra Infinita, Longe de Casa, Sem Volta para Casa.", null],
 ["Doutor Estranho", 2016, "F", "Um neurocirurgião aprende as artes místicas.", null, null, "D", 2016, "E", "P", "Stephen Strange perde o uso das mãos, aprende magia com a Anciã e se torna defensor da Terra. Ele guarda a Joia do Tempo no Olho de Agamotto. Apresenta Wong, o Sanctum de Nova York e Dormammu, a base de toda a magia do MCU.", "Prepara: Ragnarok, Guerra Infinita, Sem Volta para Casa, Multiverso da Loucura.", null],
 ["Thor: Ragnarok", 2017, "F", "Thor precisa escapar de Sakaar para salvar Asgard.", null, null, "D", 2017, "E", "P", "Hela destrói o Mjölnir e domina Asgard; Thor foge de Sakaar com Hulk e Valquíria. Para vencer Hela, Surtur destrói Asgard e os sobreviventes partem em uma nave rumo à Terra. É o ponto de partida direto de Guerra Infinita.", "Prepara: Guerra Infinita, Ultimato, Amor e Trovão.", null],
 ["Homem-Formiga e a Vespa", 2018, "F", "Scott e Hope Van Dyne correm para resgatar Janet.", null, "Veja a cena do meio dos créditos só depois de Vingadores: Guerra Infinita.", "D", 2018, "E", "P", "Scott, em prisão domiciliar após Guerra Civil, ajuda Hope e Hank a resgatar Janet do Reino Quântico e enfrenta Fantasma. Aprofunda as regras do Reino Quântico, essenciais para a viagem no tempo de Ultimato.", "Prepara: Ultimato, Quantumania.", null],
 ["Vingadores: Guerra Infinita", 2018, "F", "Thanos parte em busca das Joias do Infinito.", null, null, "D", 2018, "E", "P", "Thanos reúne as Joias, ataca Wakanda e faz o Estalo, que apaga metade da vida do universo. Mostra a perda de heróis como Doutor Estranho, Homem-Aranha e Pantera Negra, e a decisão de Thanos sobre Gamora. É a primeira metade da conclusão da Saga do Infinito.", "Prepara: Ultimato.", null],
 ["Vingadores: Ultimato", 2023, "F", "Os heróis tentam reverter o Estalo de Thanos.", null, null, "D", 2019, "E", "P", "Cinco anos depois do Estalo, os heróis usam viagem no tempo para recuperar as Joias. Tony se sacrifica para vencer Thanos, Natasha morre em Vormir e Steve fica no passado e entrega o escudo a Sam. Encerra a Saga do Infinito e cria as “variantes”, base da Saga do Multiverso.", "Prepara: Loki, WandaVision, Falcão e o Soldado Invernal, Gavião Arqueiro, Longe de Casa.", "2018 a 2023"],
 ["Loki — Temporada 1", 2012, "S", "Loki é capturado pela Autoridade de Variação Temporal.", null, null, "D", 2021, "E", "P", "Uma variante de Loki, que escapou com o Tesseract em Ultimato, é levada à TVA, que protege a “Linha do Tempo Sagrada”. Loki e Sylvie descobrem Aquele Que Permanece, e Sylvie o mata, o que abre o multiverso. Esse momento é a base de toda a Saga do Multiverso, incluindo Doutor Estranho 2 e Quantumania.", "Prepara: Loki T2, Doutor Estranho 2, Quantumania, Deadpool & Wolverine.", "Fora do tempo (TVA)"],
 ["What If...? — Temporada 1", 2021, "S", "Série animada que imagina como o MCU seria se momentos-chave mudassem.", null, "Universo alternativo: pode ser pulado sem perder a trama principal.", "D", 2021, "O", "A", "Antologia de realidades alternativas narradas pelo Vigia (Uatu), como uma Peggy Carter supersoldado e um T'Challa como Senhor das Estrelas. Não altera a linha principal, mas apresenta o Vigia e o conceito de multiverso. A Marvel a posiciona logo depois de Loki T1.", "Prepara: Marvel Zombies; Uatu aparece em Doutor Estranho 2.", "Multiverso (realidades alternativas)"],
 ["Marvel Zombies", 2025, "S", "Animação de terror com heróis do MCU transformados em zumbis.", null, "Universo alternativo: pode ser pulado.", "D", 2025, "O", "A", "Sobreviventes tentam escapar de um universo dominado por super-heróis zumbis, derivado do episódio zumbi de What If...?. Não tem ligação direta com a história principal.", "Derivada de What If...? T1.", "Multiverso (realidade zumbi)"],
 ["WandaVision", 2023, "S", "Wanda e Visão vivem uma realidade de sitcom que esconde algo maior.", null, null, "D", 2021, "E", "P", "Wanda, devastada pela perda de Visão, cria a realidade de Westview. Agatha Harkness revela o poder dela como Feiticeira Escarlate e o Darkhold. Apresenta Monica Rambeau, os filhos Billy e Tommy e o Visão Branco; é a base de Doutor Estranho 2, Agatha Desde Sempre e VisionQuest.", "Prepara: Doutor Estranho 2, As Marvels, Agatha Desde Sempre, VisionQuest.", null],
 ["Shang-Chi e a Lenda dos Dez Anéis", 2024, "F", "Shang-Chi enfrenta o passado ligado à sua família.", null, null, "D", 2021, "R", "P", "Shang-Chi confronta o pai, Wenwu, líder dos Dez Anéis, e descobre uma ameaça ancestral selada em Ta Lo. Mostra que os Dez Anéis eram uma organização muito mais antiga do que o falso Mandarim de Homem de Ferro 3, e Trevor Slattery volta. A cena pós-créditos mostra Wong e Carol estudando os anéis.", "Prepara: As Marvels, Wonder Man.", null],
 ["Falcão e o Soldado Invernal", 2024, "S", "Sam e Bucky lidam com o legado do Capitão América.", null, null, "D", 2021, "R", "P", "Sam Wilson entrega o escudo ao governo, que o passa a John Walker, mas acaba assumindo o manto de Capitão América. Apresenta os Flag Smashers, Isaiah Bradley, Sharon Carter e Zemo. Walker reaparece em Thunderbolts*; Sam e Isaiah voltam em Admirável Mundo Novo.", "Prepara: Capitão América: Admirável Mundo Novo, Thunderbolts*.", null],
 ["Homem-Aranha: Longe de Casa", 2024, "F", "Peter viaja pela Europa e encontra Mysterio.", null, null, "N", 2019, "R", "P", "Peter lida com a ausência de Tony e enfrenta Mysterio. Na cena do meio dos créditos, Mysterio revela ao mundo que Peter é o Homem-Aranha. A cena final mostra que “Nick Fury” é na verdade o skrull Talos.", "Prepara: Sem Volta para Casa, Invasão Secreta.", "8 meses após Ultimato"],
 ["Eternos", 2024, "F", "Seres imortais voltam à ação para proteger a Terra.", null, null, "D", 2021, "R", "P", "Mostra os Eternos, enviados pelos Celestiais há 7.000 anos, e o nascimento de um Celestial dentro da Terra. O corpo do Celestial vira a Ilha Celestial, origem do adamantium de Admirável Mundo Novo. Apresenta Dane Whitman (futuro Cavaleiro Negro) e a cena pós-créditos mostra Eros e Pip.", "Prepara: Capitão América: Admirável Mundo Novo.", "7.000 anos; trama principal em 2024"],
 ["Homem-Aranha: Sem Volta para Casa", 2024, "F", "Um feitiço dá errado e abre o multiverso.", null, null, "N", 2021, "E", "P", "Peter pede a Strange que apague sua identidade pública, mas o feitiço dá errado e traz vilões (e outros Homens-Aranha) de outros universos. Para salvar o multiverso, Peter aceita que todos o esqueçam, inclusive MJ e Ned. Ele fica sozinho e recomeça, o que leva diretamente a Um Novo Dia.", "Prepara: Doutor Estranho 2, Um Novo Dia.", "Dezembro de 2024"],
 ["Doutor Estranho no Multiverso da Loucura", 2025, "F", "Estranho atravessa universos para proteger America Chavez.", null, null, "D", 2022, "E", "P", "Estranho e Wong protegem America Chavez, que cruza o multiverso, de Wanda, que usa o Darkhold para tomar os filhos de outra realidade. Apresenta os Illuminati e a Terra-838; Wanda aparenta morrer ao destruir o Darkhold. Na cena pós-créditos, Strange e Clea enfrentam as Incursões, colisões entre universos.", "Prepara: VisionQuest, Coração de Ferro (Incursões).", null],
 ["Gavião Arqueiro", 2024, "S", "Clint Barton e Kate Bishop enfrentam ameaças ligadas ao passado dele.", null, null, "D", 2021, "R", "P", "Clint tenta voltar para a família no Natal enquanto é perseguido por antigos inimigos do tempo em que foi o Ronin. Apresenta Kate Bishop, Yelena (que culpa Clint pela morte de Natasha) e Wilson Fisk, o Rei do Crime. Fisk reaparece em Echo e Demolidor: Renascido.", "Prepara: Echo, Demolidor: Renascido, Thunderbolts*.", "Natal de 2024"],
 ["Cavaleiro da Lua", 2025, "S", "Steven Grant e Marc Spector dividem o mesmo corpo e uma missão de Khonshu.", null, "Pode ser assistida a qualquer momento depois de Ultimato.", "D", 2022, "R", "P", "Marc Spector (Cavaleiro da Lua) e Steven Grant enfrentam Arthur Harrow, seguidor da deusa Ammit, e o deus Khonshu. Introduz a mitologia egípcia no MCU. É a série mais isolada do período, sem ligação direta com as outras tramas.", "Sem conexões importantes.", null],
 ["Pantera Negra: Wakanda Para Sempre", 2025, "F", "Wakanda lida com o luto e com uma nova ameaça.", null, null, "D", 2022, "R", "P", "Depois da morte de T'Challa, Wakanda é ameaçada por Talokan, o reino subaquático de Namor, que busca vibranium. Shuri assume o manto de Pantera Negra. Apresenta Riri Williams (futura Coração de Ferro) e o filho de T'Challa na cena pós-créditos.", "Prepara: Coração de Ferro, Olhos de Wakanda.", null],
 ["Echo", 2025, "S", "Maya Lopez enfrenta seu passado e as raízes de sua família.", null, null, "D", 2024, "R", "P", "Maya Lopez (Eco) volta à terra natal e confronta Wilson Fisk, responsável pela morte do pai dela. Apresenta a herança ancestral dos Choctaw e mostra como Fisk consolida poder em Nova York. É a ponte entre Gavião Arqueiro e Demolidor: Renascido.", "Prepara: Demolidor: Renascido.", null],
 ["Mulher-Hulk: Defensora de Heróis", 2025, "S", "Jennifer Walters concilia a advocacia com seus poderes de Hulk.", null, null, "D", 2022, "R", "P", "Jennifer Walters ganha poderes de Hulk ao receber o sangue do primo Bruce Banner e se torna advogada de casos super-humanos. Traz o Abominável e Wong de volta e marca a estreia de Matt Murdock (Demolidor) no MCU. Tom de comédia, com poucas consequências para a trama principal.", "Prepara: Demolidor: Renascido (Matt Murdock).", null],
 ["Ms. Marvel", 2025, "S", "Kamala Khan, fã de super-heróis, descobre seus próprios poderes.", null, null, "D", 2022, "R", "P", "Kamala Khan ganha poderes ao usar uma bracelete cósmica e descobre sua ligação com os Djinn. No final, revela-se que ela também tem o gene mutante, um marco para a chegada dos X-Men. Seus poderes e sua troca de lugar com Carol dão origem a As Marvels.", "Prepara: As Marvels.", null],
 ["Thor: Amor e Trovão", 2025, "F", "Thor enfrenta Gorr, o Carniceiro dos Deuses.", null, null, "D", 2022, "R", "P", "Thor enfrenta Gorr, que quer exterminar os deuses, e reencontra Jane Foster como a Poderosa Thor. Mostra Nova Asgard, Valquíria e Korg. Jane morre, Thor adota a filha de Gorr, e a cena pós-créditos mostra Zeus e Hércules.", "Fecha a trajetória de Thor até aqui.", null],
 ["Coração de Ferro", 2026, "S", "Riri Williams cria sua própria armadura.", null, null, "D", 2025, "R", "P", "Riri Williams volta a Chicago e enfrenta o Capuz (Parker Robbins), que usa poderes demoníacos. A série mostra o legado de Tony Stark nas mãos de uma nova geração e termina com a aparição de Mefisto, que faz uma oferta a Riri. A cena do meio dos créditos mostra o Capuz atrás de ajuda no mundo místico.", "Dialoga com: Wakanda para Sempre, Doutor Estranho.", null],
 ["Lobisomem na Noite", 2025, "E", "Caçadores de monstros disputam uma relíquia poderosa numa noite de terror em preto e branco.", null, null, "D", 2022, "O", "P", "Especial em preto e branco sobre caçadores de monstros que disputam o Bloodstone. Apresenta o Homem-Coisa e o lado sombrio do MCU. Não é necessário para a trama principal.", "Sem conexões importantes.", null],
 ["Guardiões da Galáxia: Especial de Festas", 2022, "E", "Drax e Mantis tentam dar um presente de Natal a Peter Quill.", null, null, "D", 2022, "O", "P", "Drax e Mantis vão à Terra para dar a Peter um presente de Natal. Revela que Mantis é meia-irmã de Peter, ambos filhos de Ego. Prepara o clima do time para Vol. 3.", "Prepara: Guardiões Vol. 3.", "Natal"],
 ["Homem-Formiga e a Vespa: Quantumania", 2026, "F", "A família Pym cai no Reino Quântico.", null, null, "D", 2023, "R", "P", "Scott, Hope, Hank, Janet e Cassie ficam presos no Reino Quântico e enfrentam Kang, o Conquistador. Kang é derrotado, mas a cena pós-créditos revela que há muitos Kangs em outros universos. Mostra a ameaça multiversal que Loki apresentou.", "Dialoga com: Loki T1 e T2.", null],
 ["Guardiões da Galáxia Vol. 3", 2026, "F", "Os Guardiões se unem para salvar Rocket.", null, null, "D", 2023, "R", "P", "Peter e os Guardiões enfrentam o Alto Evolucionário para salvar Rocket e descobrem a origem dele. Fecha as histórias do time: Peter volta à Terra e Rocket assume a liderança dos novos Guardiões.", "Fecha a trajetória dos Guardiões.", null],
 ["Invasão Secreta", 2026, "S", "Nick Fury enfrenta a infiltração de skrulls na Terra.", null, null, "D", 2023, "R", "P", "Fury e Talos descobrem skrulls rebeldes, liderados por Gravik, infiltrados em governos do mundo. Rhodey foi substituído por um skrull e Gravik absorve poderes de heróis. A série termina com Fury voltando à estação espacial S.A.B.E.R., onde ele aparece em As Marvels.", "Prepara: As Marvels.", null],
 ["As Marvels", 2026, "F", "Carol, Monica e Kamala trocam de lugar a cada uso de seus poderes.", null, null, "D", 2023, "R", "P", "Carol Danvers, Monica Rambeau e Kamala Khan trocam de lugar ao usar seus poderes por causa de uma energia ligada à vilã Dar-Benn. Reúne as histórias de Capitã Marvel, WandaVision e Ms. Marvel. A cena pós-créditos mostra o Fera (Hank McCoy) em outra realidade, ligando à chegada dos X-Men.", "Prepara: a chegada dos X-Men ao MCU.", null],
 ["Loki — Temporada 2", 2012, "S", "Loki tenta consertar a linha do tempo.", null, null, "D", 2023, "E", "P", "Loki e Mobius tentam salvar a TVA do colapso temporal e Sylvie age para consertar o multiverso. No final, Loki se sacrifica para manter o multiverso estável, tornando-se o “deus das histórias”. Fecha o arco do personagem iniciado em Os Vingadores.", "Fecha a história de Loki.", "Fora do tempo (TVA)"],
 ["What If...? — Temporada 2", 2021, "S", "Nova leva de episódios com realidades alternativas do MCU.", null, "Universo alternativo: pode ser pulado.", "D", 2023, "O", "A", "Mais histórias do Vigia com variantes de heróis, incluindo a nova heroína Kahhori. Não altera a linha principal.", "Continuação de What If...? T1.", "Multiverso (realidades alternativas)"],
 ["Deadpool & Wolverine", 2024, "F", "Deadpool recruta Wolverine numa missão pela linha do tempo.", null, null, "D", 2024, "E", "P", "A TVA recruta Wade Wilson para uma missão que envolve Wolverine e a destruição de um universo. Leva os heróis dos filmes da Fox (X-Men e outros) para dentro do MCU e conecta tudo ao multiverso aberto por Loki. É a ponte entre as duas franquias.", "Prepara: a chegada dos X-Men ao MCU.", "Multiverso / TVA"],
 ["Agatha Desde Sempre", 2026, "S", "Agatha Harkness reúne outras bruxas para percorrer a Estrada das Bruxas.", null, null, "D", 2024, "R", "P", "Agatha, sem poderes depois de WandaVision, percorre a Estrada das Bruxas com um coven. Billy, o filho de Wanda, tem papel importante e a Morte aparece como personagem. É a continuação direta de WandaVision.", "Prepara: VisionQuest.", null],
 ["What If...? — Temporada 3", 2021, "S", "Terceira temporada da animação de realidades alternativas.", null, "Universo alternativo: pode ser pulado.", "D", 2024, "O", "A", "Última temporada da antologia do Vigia, com mais histórias de realidades alternativas. Não altera a linha principal.", "Fecha What If...?.", "Multiverso (realidades alternativas)"],
 ["Demolidor: Renascido", 2026, "S", "Matt Murdock e Wilson Fisk voltam a se cruzar em Nova York.", null, "Quem viu a série da Netflix entende melhor, mas dá para acompanhar sem ela.", "D", 2025, "R", "P", "Fisk se elege prefeito de Nova York e cria uma Força-Tarefa Anti-Vigilantes. Matt retoma a vida de advogado e a de herói. Continua a história de Gavião Arqueiro e Echo, e na cena pós-créditos o Justiceiro escapa.", "Prepara: Demolidor: Renascido T2, O Justiceiro.", "Temporada 1"],
 ["Capitão América: Admirável Mundo Novo", 2027, "F", "Sam Wilson assume o escudo em meio a uma crise global.", null, null, "D", 2025, "E", "P", "Sam Wilson, novo Capitão América, enfrenta uma crise ligada ao adamantium da Ilha Celestial (de Eternos) e ao presidente Ross, que vira o Hulk Vermelho. Samuel Sterns (o Líder) é preso. Na cena final, ele avisa Sam sobre algo que vem do multiverso, uma deixa que a Marvel conectou a Doomsday.", "Prepara: Thunderbolts*.", null],
 ["Thunderbolts*", 2027, "F", "Anti-heróis improváveis são forçados a trabalhar juntos.", null, null, "D", 2025, "E", "P", "Yelena, Bucky, Guardião Vermelho, Fantasma, John Walker e Bob (o Sentinela) são manipulados pela diretora da CIA Valentina Allegra de Fontaine e enfrentam o Void. O time se torna os Novos Vingadores. A cena pós-créditos, 14 meses depois, mostra a nave do Quarteto Fantástico chegando à Terra.", "Prepara: Quarteto Fantástico: Primeiros Passos, Doomsday.", null],
 ["Quarteto Fantástico: Primeiros Passos", 1965, "F", "A primeira família da Marvel enfrenta uma ameaça cósmica.", null, "Passa-se em outro universo (Terra-828), mas é essencial para a trama que vem depois.", "D", 2025, "E", "P", "Reed, Sue, Johnny e Ben vivem em outro universo (Terra-828) e enfrentam Galactus e o Surfista Prateado, além de acolher o bebê Franklin. A cena pós-créditos, quatro anos depois, mostra o Doutor Destino de olho em Franklin. Liga-se à cena final de Thunderbolts*.", "Prepara: Doomsday.", "Terra-828 (anos 1960)"],
 ["Wonder Man", 2027, "S", "Um ator com superpoderes secretos disputa um papel de super-herói.", null, null, "D", 2026, "R", "P", "Simon Williams, ator com poderes que esconde, disputa o papel de Wonder Man num remake e vira amigo de Trevor Slattery (o falso Mandarim de Homem de Ferro 3). O Departamento de Controle de Danos (DODC) os persegue, e Simon invade a prisão do DODC para resgatar Trevor. Prepara o terreno para o Controle de Danos de Um Novo Dia.", "Prepara: Homem-Aranha: Um Novo Dia.", "Presente do MCU (2027)"],
 ["Demolidor: Renascido — Temporada 2", 2027, "S", "Matt Murdock monta uma resistência contra a repressão do prefeito Fisk.", null, null, "D", 2026, "R", "P", "Fisk usa a Força-Tarefa Anti-Vigilantes para controlar a cidade, e Matt reúne cidadãos e aliados como Jessica Jones. No julgamento de Karen Page, Matt revela ser Daredevil e é preso, enquanto Fisk aceita deixar Nova York. A série termina com Jessica reabrindo a Alias Investigations.", "Prepara: O Justiceiro, Um Novo Dia.", "Temporada 2"],
 ["O Justiceiro: Uma Última Morte", 2027, "E", "Frank Castle tenta largar a vida de Justiceiro, mas Ma Gnucci o puxa de volta.", null, null, "D", 2026, "O", "P", "Especial de cerca de 1 hora que mostra o que Frank Castle fazia fora de Demolidor: Renascido T2. Ele tenta deixar a vida de vingador, mas um velho inimigo o puxa de volta. Prepara a presença dele em Um Novo Dia.", "Prepara: Homem-Aranha: Um Novo Dia.", null],
 ["Homem-Aranha: Um Novo Dia", 2028, "F", "Peter Parker recomeça sozinho, esquecido pelo mundo, em Nova York.", null, "Lançado nos cinemas em 31/07/2026; verifique onde assistir no seu país.", "A", 2026, "R", "P", "Quatro anos depois de Sem Volta para Casa, Peter vive anônimo: MJ não se lembra dele e Ned só recupera a memória no fim. Ele enfrenta o Controle de Danos e protege Jean Grey, e o Hulk e o Justiceiro também estão no caminho. A cena pós-créditos mostra o sinal do Homem-Aranha deixando a Terra, uma deixa para os próximos eventos do MCU.", "Dialoga com: Wonder Man, O Justiceiro.", "2028"],
 ["VisionQuest", 2027, "S", "O Visão Branco busca sua identidade enquanto Ultron volta.", null, "Data na história não confirmada: coloquei depois de Um Novo Dia pela ordem de lançamento.", "D", 2026, "R", "P", "O Visão Branco procura quem é ao lado dos filhos de Wanda, Billy e Tommy. Revela-se que Virgil Horton (James Spader) está por trás de Ultron e Jocasta; Visão contém Ultron e depois o poupa. Wanda continua desaparecida desde Doutor Estranho 2. Encerra o ciclo WandaVision, Agatha, VisionQuest.", "Dialoga com: WandaVision, Agatha Desde Sempre, Era de Ultron.", "Depois de WandaVision e Agatha"],
 ["X-Men '97 — Temporada 1", 1997, "S", "Os mutantes retomam a história da animação clássica dos anos 1990.", null, "Universo próprio: fora da linha principal do MCU.", "D", 2024, "O", "A", "Continuação direta da série animada de 1992: sem o Professor X, Magneto e os X-Men enfrentam Bastion e o massacre de Genosha. Passa-se em universo próprio e não é necessário para a trama principal do MCU.", "Sem conexões importantes com a linha principal.", "Universo próprio (anos 1990)"],
 ["X-Men '97 — 2ª Temporada", 1997, "S", "Continuação da animação dos X-Men.", null, "Universo próprio: fora da linha principal do MCU.", "D", 2026, "O", "A", "Os X-Men, espalhados no tempo, voltam à década de 1990 para impedir Apocalipse. Gambit é ressuscitado como Cavaleiro da Morte e Rogue sela Apocalipse em uma joia; Noturno morre no final.", "Continuação de X-Men '97 T1.", "Universo próprio (anos 1990)"],
 ["O Amigão da Vizinhança Homem-Aranha", 2025, "S", "Peter Parker começa a vida de herói sob a mentoria de Norman Osborn.", null, "Universo próprio: fora da linha principal do MCU.", "D", 2025, "O", "A", "Animação que recria a origem do Aranha em outro universo, com Norman Osborn como mentor de Peter. Não faz parte da linha principal.", "Sem conexões com a linha principal.", "Universo próprio"]
];

/* Sagas e eras: [posição inicial, saga, nome da era] */
const ERAS = [
 [1, "Saga do Infinito", "Era 1 — Passado e Origens"],
 [4, "Saga do Infinito", "Era 2 — Os Primeiros Vingadores"],
 [11, "Saga do Infinito", "Era 3 — S.H.I.E.L.D. e o Cosmos"],
 [16, "Saga do Infinito", "Era 4 — Ultron e a Guerra Civil"],
 [22, "Saga do Infinito", "Era 5 — Rumo ao Estalo de Thanos"],
 [27, "Saga do Multiverso", "Era 6 — O Multiverso se Abre"],
 [37, "Saga do Multiverso", "Era 7 — Novos Heróis"],
 [47, "Saga do Multiverso", "Era 8 — Ameaças Maiores"],
 [56, "Saga do Multiverso", "Era 9 — Os Novos Vingadores"],
 [65, "Fora da linha principal", "Universos próprios"]
];
const eraOf = n => ERAS.filter(e => e[0] <= n).pop();
const PLAT = {D:"Disney+", N:"Netflix", H:"HBO Max", A:"Aluguel/compra"};
const TYPE_LABEL = {F:"Filme", S:"Série", E:"Especial"};
const IMP = {E:"Essencial", R:"Recomendado", O:"Opcional"};
const yr = p => p[12] || String(p[1]);
const impBadge = p => `<span class="imp imp-${p[8]}">${IMP[p[8]]}</span>` + (p[9]==="A" ? `<span class="imp imp-A">Universo paralelo</span>` : "");
const platBadge = p => `<span class="plat plat-${p[6]}">${PLAT[p[6]] || ""}</span>`;

/* Migração: a ordem antiga tinha 40 itens. MAP[posição antiga] = posição nova. */
const ORDER_MAP = [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,28,17,20,18,19,22,21,23,25,30,26,24,31,33,27,35,37,40,42,45,44,46,48,50,52,54];
function remapWith(m, prog, ex){
  if(Array.isArray(prog)) prog = prog.map(m).filter(Boolean);
  if(ex && typeof ex === "object"){
    if(ex.ratings){ const r = {}; Object.keys(ex.ratings).forEach(k => { const t = m(+k); if(t) r[t] = ex.ratings[k]; }); ex.ratings = r; }
    if(Array.isArray(ex.favs)) ex.favs = ex.favs.map(m).filter(Boolean);
    if(Array.isArray(ex.diary)) ex.diary = ex.diary.map(d => { const t = m(d.p + 1); return t ? Object.assign({}, d, {p: t - 1}) : null; }).filter(Boolean);
  }
  return [prog, ex];
}
/* v1 (40 itens) -> posições de hoje; v2 (70 itens) -> v3 (60 itens, sem os não lançados) */
const remapOld = (p, e) => remapWith(n => ORDER_MAP[n] || null, p, e);
const remap70 = (p, e) => remapWith(n => n <= 56 ? n : (n >= 58 && n <= 61 ? n - 1 : null), p, e);
const MAP4 = {"55": 1, "1": 2, "2": 3, "3": 4, "5": 5, "4": 6, "6": 7, "7": 8, "9": 9, "8": 10, "10": 11, "11": 12, "12": 13, "38": 14, "13": 16, "14": 17, "15": 18, "28": 19, "20": 20, "17": 21, "18": 22, "19": 23, "22": 24, "21": 25, "23": 26, "27": 27, "29": 28, "25": 30, "30": 31, "26": 32, "24": 33, "31": 34, "33": 35, "35": 36, "32": 37, "34": 38, "40": 39, "47": 40, "39": 41, "36": 42, "37": 43, "53": 44, "41": 46, "42": 47, "44": 48, "43": 49, "46": 50, "45": 51, "48": 53, "49": 54, "51": 56, "50": 57, "52": 58, "54": 59, "57": 60, "56": 63, "58": 64, "60": 66, "16": 20, "59": 44};
const remap60 = (p, e) => remapWith(n => MAP4[n] || null, p, e);
(function migrate(){
  try{
    const FL = "marvel-road-to-doomsday-order", f = localStorage.getItem(FL);
    if(f === "4") return;
    const K1 = "marvel-road-to-doomsday-v1", K2 = "marvel-road-to-doomsday-extras-v1";
    let w = JSON.parse(localStorage.getItem(K1) || "null"), x = JSON.parse(localStorage.getItem(K2) || "null");
    if(f !== "3"){ if(f !== "2") [w, x] = remapOld(w, x); else [w, x] = remap70(w, x); }
    [w, x] = remap60(w, x);
    if(w) localStorage.setItem(K1, JSON.stringify(w));
    if(x) localStorage.setItem(K2, JSON.stringify(x));
    localStorage.setItem(FL, "4");
  }catch(e){}
})();

const KEY = "marvel-road-to-doomsday-v1";
const $ = id => document.getElementById(id);
let watched = new Set();
let filter = "all";
let revealed = false;

/* ----- localStorage ----- */
function load(){
  try{ watched = new Set(JSON.parse(localStorage.getItem(KEY)) || []); }catch(e){ watched = new Set(); }
}
function save(){
  try{ localStorage.setItem(KEY, JSON.stringify([...watched])); }catch(e){}
}

/* ----- pôster de reserva (SVG gerado, usado quando não há imagem) ----- */
function fallback(title, n){
  const t = title.replace(/&/g,"e").replace(/</g,"");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a0507"/><stop offset="1" stop-color="#0a0a22"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><text x="200" y="320" fill="#f2b632" font-family="Impact,sans-serif" font-size="30" text-anchor="middle">${t.length>22?t.slice(0,22)+"…":t}</text><text x="200" y="260" fill="#e62429" font-family="Impact,sans-serif" font-size="90" text-anchor="middle">${n}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function posterTag(p, n){
  const img = document.createElement("img");
  img.className = "poster"; img.loading = "lazy"; img.alt = "Pôster de " + p[0];
  img.src = p[4] || `assets/posters/${n}.jpg`;
  img.onerror = () => { img.onerror = null; img.src = fallback(p[0], n); };
  return img;
}

/* ----- linha do tempo ----- */
function renderGrid(){
  const grid = $("grid"); grid.innerHTML = "";
  let lastEra = null;
  PRODUCTIONS.forEach((p, i) => {
    const n = i + 1, done = watched.has(n);
    if((filter === "todo" && done) || (filter === "done" && !done) || (filter === "ess" && p[8] !== "E") || (filter === "main" && p[9] !== "P")) return;
    const er = eraOf(n);
    if(er !== lastEra){
      lastEra = er;
      const h = document.createElement("div"); h.className = "era-h";
      h.innerHTML = "<small></small><h3></h3>";
      h.querySelector("small").textContent = er[1]; h.querySelector("h3").textContent = er[2];
      grid.appendChild(h);
    }
    const card = document.createElement("article");
    card.className = "card" + (done ? " done" : "") + (revealed ? "" : " rv");
    card.style.setProperty("--i", String(i % 6));
    const img = posterTag(p, n); img.onclick = () => openModal(i);
    card.innerHTML = `<span class="num">${n}</span><span class="tag ${p[2]==="F"?"film":""}">${TYPE_LABEL[p[2]]}</span>`;
    card.appendChild(img);
    const info = document.createElement("div"); info.className = "info";
    info.innerHTML = `<h3></h3><span class="year">${yr(p)}</span>${platBadge(p)}${impBadge(p)}<p></p>`;
    info.querySelector("h3").textContent = p[0];
    info.querySelector("h3").onclick = () => openModal(i);
    info.querySelector("p").textContent = p[3];
    const b = document.createElement("button"); b.className = "watch";
    b.textContent = done ? "Assistido ✓ (desmarcar)" : "Marcar como assistido";
    b.onclick = () => toggle(n);
    info.appendChild(b); card.appendChild(info); grid.appendChild(card);
  });
  if(!revealed){ revealed = true; observeCards(); }
}

function toggle(n){
  watched.has(n) ? watched.delete(n) : watched.add(n);
  save(); update();
}

function update(){
  const total = PRODUCTIONS.length, d = watched.size;
  const pct = Math.round(d / total * 100);
  $("bar").style.width = pct + "%";
  $("navPct").textContent = pct + "%";
  $("progText").textContent = `${pct}% concluído: ${d} assistidas, ${total - d} faltando.`;
  renderGrid();
}

/* ----- modal da produção ----- */
function openModal(i){
  const p = PRODUCTIONS[i], n = i + 1;
  const body = $("modalBody"); body.innerHTML = "";
  const img = posterTag(p, n); img.style.maxHeight = "320px"; img.style.width = "auto"; img.style.cursor = "default";
  const box = document.createElement("div");
  box.innerHTML = `<h3></h3><p>Posição ${n} · ${yr(p)} · ${TYPE_LABEL[p[2]]} · ${PLAT[p[6]]} · Lançamento ${p[7]}</p><p class="era-m"></p><p>${impBadge(p)}</p><p class="d"></p><h4>Na história principal</h4><p class="m"></p><p class="c"></p>${p[5]?'<p class="flag"></p>':""}`;
  box.querySelector(".era-m").textContent = eraOf(n)[1] + " · " + eraOf(n)[2];
  if(p[5]) box.querySelector(".flag").textContent = p[5];
  box.querySelector("h3").textContent = p[0];
  box.querySelector(".d").textContent = p[3];
  box.querySelector(".m").textContent = p[10];
  box.querySelector(".c").textContent = p[11];
  const b = document.createElement("button"); b.className = "btn primary";
  b.textContent = watched.has(n) ? "Desmarcar" : "Marcar como assistido";
  b.onclick = () => { toggle(n); $("modal").hidden = true; };
  body.append(img, box, b);
  $("modal").hidden = false;
}

/* ----- card final ----- */
function renderFinal(){
  $("nextChapter").innerHTML = `<div class="final"><h2>Fim da cronologia</h2>
  <p>Você chegou ao último item da lista. Veja a aba Futuros para o que vem por aí.</p></div>`;
}

/* ----- eventos ----- */
document.querySelectorAll(".chip[data-f]").forEach(c => c.onclick = () => {
  document.querySelectorAll(".chip[data-f]").forEach(x => x.classList.remove("on"));
  c.classList.add("on"); filter = c.dataset.f; renderGrid();
});
$("resetBtn").onclick = () => {
  if(confirm("Reiniciar todo o progresso?")){ watched.clear(); save(); update(); }
};
document.querySelectorAll("[data-close]").forEach(b => b.onclick = () => {
  $("modal").hidden = true;
});
$("modal").addEventListener("click", e => { if(e.target === $("modal")) $("modal").hidden = true; });
document.addEventListener("keydown", e => {
  if(e.key === "Escape"){ $("modal").hidden = true; }
});

/* ----- início ----- */
load(); update(); renderFinal();

/* ================= VISUAL v2: animações ================= */
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const STONE_COLORS = ["#2f6bff","#e62429","#7a3cff","#f2b632","#ff8a1f","#2fd16b"];

/* barra de rolagem no topo */
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("scrollbar").style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
}, {passive:true});

/* revelação dos cards ao rolar */
function observeCards(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(!e.isIntersecting) return;
    e.target.classList.add("show"); io.unobserve(e.target);
    setTimeout(() => e.target.classList.remove("rv","show"), 1200);
  }), {rootMargin:"0px 0px -40px 0px"});
  document.querySelectorAll(".rv").forEach(c => io.observe(c));
}

/* inclinação 3D nos cards (só com mouse) */
if(matchMedia("(hover:hover)").matches && !REDUCED){
  $("grid").addEventListener("pointermove", e => {
    const c = e.target.closest(".card"); if(!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 10 + "deg");
    c.style.setProperty("--rx", (.5 - (e.clientY - r.top) / r.height) * 10 + "deg");
  });
  $("grid").addEventListener("pointerout", e => {
    const c = e.target.closest(".card");
    if(c){ c.style.setProperty("--rx","0deg"); c.style.setProperty("--ry","0deg"); }
  });
}

/* Manopla: 6 joias acendem conforme o progresso */
$("gauntlet").innerHTML = "<i></i>".repeat(6);
function stones(){
  const pct = watched.size / PRODUCTIONS.length * 100;
  [...$("gauntlet").children].forEach((s, k) => s.classList.toggle("on", pct >= (k + 1) / 6 * 100 - .01));
}

/* faíscas ao marcar; celebração ao concluir */
let ptr = {x: innerWidth / 2, y: innerHeight / 2};
addEventListener("pointerdown", e => ptr = {x: e.clientX, y: e.clientY});
function burst(x = ptr.x, y = ptr.y, n = 16){
  if(REDUCED) return;
  for(let i = 0; i < n; i++){
    const s = document.createElement("span"), a = Math.random() * 6.28, d = 40 + Math.random() * 70;
    s.className = "spark"; s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(a) * d + "px"); s.style.setProperty("--dy", Math.sin(a) * d + "px");
    s.style.setProperty("--c", STONE_COLORS[i % 6]);
    document.body.appendChild(s); setTimeout(() => s.remove(), 900);
  }
}
const _toggle = toggle;
toggle = function(n){
  const adding = !watched.has(n);
  _toggle(n);
  if(adding) burst();
  if(adding && watched.size === PRODUCTIONS.length) celebrate();
};
function celebrate(){
  [.25,.5,.75].forEach((f, k) => setTimeout(() => burst(innerWidth * f, innerHeight * .4, 26), k * 250));
  const t = document.createElement("div"); t.className = "toast";
  t.textContent = "Cronologia completa! Você viu tudo da lista.";
  document.body.appendChild(t); setTimeout(() => t.remove(), 4500);
}
const _update = update;
update = function(){ _update(); stones(); };
stones();

/* brasas flutuando no hero (canvas leve) */
(function embers(){
  const cv = $("fx"); if(!cv || REDUCED) return;
  const ctx = cv.getContext("2d"); let W, H, ps = [];
  function size(){ W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; }
  size(); addEventListener("resize", size);
  const mk = () => ({x: Math.random() * W, y: H + 10, r: 1 + Math.random() * 2.2, v: .4 + Math.random() * 1.1, c: Math.random() < .7 ? "#e62429" : "#f2b632", w: Math.random() * 6});
  for(let i = 0; i < 45; i++){ const p = mk(); p.y = Math.random() * H; ps.push(p); }
  (function loop(){
    if(document.hidden){ requestAnimationFrame(loop); return; }
    ctx.clearRect(0, 0, W, H);
    ps.forEach((p, i) => {
      p.y -= p.v; p.w += .02; p.x += Math.sin(p.w) * .4;
      if(p.y < -10) ps[i] = mk();
      ctx.globalAlpha = Math.max(0, p.y / H) * .9;
      ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
})();

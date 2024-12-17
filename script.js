// ============================================ ARRAYS DE SÍLABAS =====================================================
const SIL_INICIO = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "ae",
  "au",
  "ba",
  "be",
  "bi",
  "bo",
  "bu",
  "ca",
  "co",
  "da",
  "de",
  "di",
  "do",
  "du",
  "fa",
  "fe",
  "fi",
  "fo",
  "fu",
  "ga",
  "go",
  "gu",
  "ha",
  "he",
  "hi",
  "ho",
  "hu",
  "ja",
  "ji",
  "jo",
  "la",
  "le",
  "li",
  "lo",
  "lu",
  "ma",
  "me",
  "mi",
  "mo",
  "mu",
  "na",
  "ne",
  "ni",
  "no",
  "nu",
  "pa",
  "pe",
  "pi",
  "po",
  "pu",
  "ra",
  "re",
  "ri",
  "ro",
  "ru",
  "sa",
  "se",
  "si",
  "so",
  "su",
  "ta",
  "te",
  "ti",
  "to",
  "tu",
  "va",
  "ve",
  "vi",
  "vo",
  "vu",
  "xa",
  "za",
  "ze",
  "zi",
  "zo",
  "zu",
  "am",
  "em",
  "im",
  "um",
  "as",
  "es",
  "is",
  "os",
  "us",
  "al",
  "el",
  "il",
  "ol",
  "ul",
  "az",
  "que",
  "qui",
  "trans",
  "blis",
  "blo",
  "blu",
  "cla",
  "clo",
  "plas",
  "ple",
  "bra",
  "bras",
  "bru",
  "cra",
  "cris",
  "cru",
  "pra",
  "pre",
  "pri",
  "pro",
  "pru",
  "tra",
  "tre",
  "tri",
  "tro",
  "tru",
  "gra",
  "gri",
  "bem",
  "bom",
  "lar",
  "rim",
  "sal",
  "sol",
  "sul",
]; // Sílabas iniciais

const SIL_MEIO = [
  "ba",
  "be",
  "bi",
  "bo",
  "bu",
  "ca",
  "ce",
  "ci",
  "co",
  "cu",
  "da",
  "de",
  "di",
  "do",
  "du",
  "fa",
  "fe",
  "fi",
  "fo",
  "fu",
  "ga",
  "ge",
  "gi",
  "go",
  "gu",
  "ja",
  "je",
  "ji",
  "jo",
  "ju",
  "la",
  "le",
  "li",
  "lo",
  "lu",
  "ma",
  "me",
  "mi",
  "mo",
  "mu",
  "na",
  "ne",
  "ni",
  "no",
  "nu",
  "pa",
  "pe",
  "pi",
  "po",
  "pu",
  "ra",
  "rra",
  "re",
  "rre",
  "ri",
  "ro",
  "ru",
  "sa",
  "ssa",
  "se",
  "sse",
  "si",
  "ssi",
  "so",
  "sso",
  "su",
  "ssu",
  "ta",
  "te",
  "ti",
  "to",
  "tu",
  "va",
  "ve",
  "vi",
  "vo",
  "vu",
  "xa",
  "za",
  "ze",
  "zi",
  "zo",
  "zu",
  "ab",
  "eb",
  "ib",
  "ob",
  "ub",
  "ac",
  "ec",
  "ic",
  "oc",
  "uc",
  "ad",
  "ed",
  "id",
  "od",
  "ud",
  "af",
  "ef",
  "if",
  "of",
  "uf",
  "ag",
  "eg",
  "ig",
  "og",
  "ug",
  "aj",
  "ej",
  "ij",
  "oj",
  "uj",
  "al",
  "el",
  "il",
  "ol",
  "ul",
  "am",
  "em",
  "im",
  "om",
  "um",
  "an",
  "en",
  "in",
  "on",
  "un",
  "ap",
  "ep",
  "ip",
  "op",
  "up",
  "as",
  "es",
  "is",
  "os",
  "us",
  "at",
  "et",
  "it",
  "ot",
  "ut",
  "av",
  "ev",
  "iv",
  "ov",
  "uv",
  "az",
  "ez",
  "iz",
  "oz",
  "uz",
  "bla",
  "ble",
  "bli",
  "blo",
  "blu",
  "cla",
  "cle",
  "cli",
  "clo",
  "clu",
  "pla",
  "plas",
  "ple",
  "pli",
  "plo",
  "plu",
  "bra",
  "bras",
  "bre",
  "bri",
  "bro",
  "bru",
  "cra",
  "cre",
  "cri",
  "cris",
  "cro",
  "cru",
  "pra",
  "pre",
  "pri",
  "pro",
  "pru",
  "gua",
  "gue",
  "gui",
  "que",
  "qui",
  "tra",
  "tre",
  "tri",
  "tro",
  "tru",
  "gra",
  "gre",
  "gri",
  "gro",
  "gru",
  "bem",
  "bom",
  "dom",
  "lar",
  "rim",
  "sal",
  "sol",
  "sul",
  "tom",
  "nha",
  "nho",
  "lha",
  "lhe",
  "lho",
]; // Sílabas intermédias (0 a 1)

const SIL_FIM = [
  "a",
  "o",
  "ba",
  "bo",
  "ca",
  "co",
  "da",
  "de",
  "do",
  "fa",
  "fo",
  "ga",
  "go",
  "ja",
  "jo",
  "la",
  "lo",
  "ma",
  "mo",
  "na",
  "no",
  "pa",
  "pe",
  "po",
  "ra",
  "rra",
  "re",
  "rre",
  "ro",
  "sa",
  "ssa",
  "se",
  "ese",
  "so",
  "sso",
  "ta",
  "to",
  "va",
  "ve",
  "vo",
  "xa",
  "za",
  "zo",
  "que",
  "bras",
  "pra",
  "pre",
  "pro",
  "cra",
  "cro",
  "pla",
  "plas",
  "ple",
  "plo",
  "bra",
  "bre",
  "bro",
  "tra",
  "tre",
  "tro",
  "gra",
  "gre",
  "am",
  "em",
  "um",
  "al",
  "el",
  "il",
  "ol",
  "ul",
  "as",
  "es",
  "is",
  "os",
  "us",
  "az",
  "ez",
  "iz",
  "oz",
  "uz",
  "au",
  "eia",
  "eu",
  "ou",
  "ão",
  "ãe",
  "õe",
  "nha",
  "nho",
  "lha",
  "lhe",
  "lho",
]; // Sílabas finais

// ====================================== ARRAY DAS PALAVRAS EXISTENTES ===============================================
const PALAVRAS_EXISTENTES = [
  "ganho",
  "ganha",
  "ganhe",
  "tapo",
  "tapa",
  "joão",
  "ias",
  "ia",
  "voto",
  "vota",
  "fifa",
  "temo",
  "maus",
  "sobra",
  "emo",
  "foca",
  "foco",
  "foque",
  "gaga",
  "gago",
  "ema",
  "rimem",
  "rimam",
  "peão",
  "vaca",
  "duma",
  "baza",
  "bazo",
  "mega",
  "fique",
  "fico",
  "fica",
  "dobro",
  "dobra",
  "dobre",
  "tremo",
  "mail",
  "varra",
  "varro",
  "dada",
  "dado",
  "trio",
  "trios",
  "tais",
  "molha",
  "molho",
  "molhe",
  "nessa",
  "trato",
  "trata",
  "trate",
  "salga",
  "salgo",
  "bloco",
  "ai",
  "eu",
  "ou",
  "au",
  "ova",
  "ovo",
  "vara",
  "luto",
  "luta",
  "lute",
  "demo",
  "retro",
  "fina",
  "fino",
  "usou",
  "sumo",
  "suma",
  "imune",
  "cala",
  "calo",
  "capa",
  "sapo",
  "falha",
  "falho",
  "falhe",
  "rija",
  "rijo",
  "loba",
  "rego",
  "rega",
  "rifa",
  "trufo",
  "meta",
  "jato",
  "metro",
  "doeu",
  "zebra",
  "nado",
  "nada",
  "nade",
  "seja",
  "diga",
  "digo",
  "lego",
  "jota",
  "hexa",
  "muro",
  "suas",
  "sola",
  "pois",
  "letra",
  "lara",
  "topa",
  "lares",
  "soa",
  "soas",
  "lapa",
  "tubo",
  "fibra",
  "fibras",
  "grade",
  "grado",
  "grada",
  "milho",
  "milha",
  "amas",
  "amos",
  "grava",
  "grave",
  "gravo",
  "alas",
  "prenhe",
  "prenha",
  "prenho",
  "rabo",
  "raba",
  "bruxa",
  "brava",
  "bravo",
  "brave",
  "trave",
  "travo",
  "trava",
  "prisão",
  "preso",
  "presa",
  "prese",
  "gajo",
  "gaja",
  "grita",
  "grito",
  "rude",
  "ira",
  "classe",
  "vinagre",
  "lave",
  "lava",
  "lavo",
  "pobre",
  "aula",
  "solda",
  "soldo",
  "solde",
  "fofo",
  "fofa",
  "siga",
  "sigo",
  "rara",
  "raro",
  "seus",
  "capo",
  "dira",
  "brasão",
  "mala",
  "nano",
  "tonho",
  "tonha",
  "bulha",
  "fila",
  "grana",
  "lenha",
  "lenho",
  "tolo",
  "tola",
  "caso",
  "casa",
  "case",
  "fixa",
  "fixo",
  "fixe",
  "galho",
  "barra",
  "barro",
  "supro",
  "vais",
  "boca",
  "rimel",
  "tusso",
  "tussa",
  "duo",
  "galo",
  "gala",
  "toque",
  "uou",
  "nula",
  "nulo",
  "prima",
  "primo",
  "prime",
  "pino",
  "brama",
  "bramo",
  "brame",
  "soca",
  "soco",
  "rias",
  "rios",
  "ria",
  "rio",
  "saga",
  "nobre",
  "sagre",
  "fujo",
  "fuja",
  "fuje",
  "fugi",
  "lucra",
  "lucro",
  "venha",
  "venho",
  "beta",
  "agre",
  "mudo",
  "muda",
  "mude",
  "ala",
  "bipe",
  "sina",
  "birra",
  "tuga",
  "ucra",
  "voas",
  "voa",
  "tolhe",
  "tolha",
  "tolho",
  "diro",
  "toa",
  "toas",
  "visa",
  "lajo",
  "sopra",
  "sopro",
  "sopre",
  "sopa",
  "micra",
  "mitra",
  "dino",
  "devo",
  "deve",
  "deva",
  "tipa",
  "tipo",
  "isa",
  "mono",
  "vela",
  "dera",
  "rola",
  "rolo",
  "role",
  "dessa",
  "desse",
  "uma",
  "umas",
  "beco",
  "pura",
  "puro",
  "sais",
  "prato",
  "prata",
  "trepa",
  "trepo",
  "trepe",
  "salso",
  "salsa",
  "loja",
  "petra",
  "rama",
  "ramo",
  "dique",
  "leal",
  "quebra",
  "quebro",
  "quebre",
  "goza",
  "gozo",
  "mais",
  "trevo",
  "assa",
  "asso",
  "asse",
  "assou",
  "assei",
  "assar",
  "rir",
  "ri",
  "rira",
  "rires",
  "rireis",
  "rirais",
  "posso",
  "possa",
  "posse",
  "clono",
  "clone",
  "clona",
  "clonei",
  "clonai",
  "clones",
  "clonas",
  "clonais",
  "nojo",
  "fara",
  "lira",
  "lera",
  "doem",
  "vala",
  "vale",
  "valho",
  "valha",
  "rafa",
  "bebo",
  "bebe",
  "beba",
  "bebi",
  "rima",
  "rimo",
  "rime",
  "rimou",
  "rimei",
  "rimai",
  "rimas",
  "rimos",
  "rimes",
  "velho",
  "velha",
  "velhos",
  "velhas",
  "pito",
  "pita",
  "pite",
  "puto",
  "puta",
  "piro",
  "pira",
  "pire",
  "zeus",
  "corre",
  "corra",
  "corro",
  "leva",
  "levo",
  "leve",
  "levi",
  "nutra",
  "nutro",
  "nutre",
  "urra",
  "trapo",
  "trilha",
  "tralha",
  "trolha",
  "trilho",
  "trilhe",
  "ele",
  "ela",
  "elo",
  "elu",
  "ile",
  "eles",
  "elas",
  "elus",
  "iles",
  "traga",
  "trago",
  "trague",
  "linho",
  "linha",
  "rojo",
  "roja",
  "roje",
  "rojes",
  "rojas",
  "rojei",
  "salda",
  "saldo",
  "salde",
  "talo",
  "talos",
  "tua",
  "tuas",
  "crise",
  "crises",
  "gata",
  "gato",
  "gatas",
  "gatos",
  "viva",
  "vivo",
  "vive",
  "ato",
  "ata",
  "ate",
  "traem",
  "nitro",
  "grua",
  "ola",
  "torra",
  "torre",
  "torro",
  "rubro",
  "rubra",
  "mora",
  "moro",
  "more",
  "siso",
  "ureia",
  "tesa",
  "teso",
  "tese",
  "trica",
  "trico",
  "trama",
  "tramo",
  "trame",
  "joel",
  "joão",
  "febras",
  "febres",
  "febris",
  "febros",
  "febra",
  "febre",
  "febro",
  "nora",
  "noras",
  "coro",
  "coral",
  "goro",
  "gorro",
  "gorros",
  "nojo",
  "boro",
  "riba",
  "quissa",
  "quisso",
  "quisse",
  "quisesse",
  "quenho",
  "quenhe",
  "quenha",
  "missa",
  "magro",
  "magra",
  "magre",
  "tino",
  "tina",
  "bibo",
  "pota",
  "pote",
  "poto",
  "vede",
  "vedo",
  "veda",
  "usa",
  "uso",
  "use",
  "usas",
  "usos",
  "uses",
  "rua",
  "rui",
  "ruas",
  "ruis",
  "nua",
  "nuas",
  "nega",
  "nego",
  "negas",
  "data",
  "dato",
  "date",
  "serra",
  "serro",
  "serre",
  "tifa",
  "ninha",
  "ninho",
  "ninhe",
  "ninhos",
  "ninhas",
  "ninhes",
  "pena",
  "pene",
  "peno",
  "penas",
  "penes",
  "penos",
  "prega",
  "prego",
  "pregue",
  "todo",
  "toda",
  "todos",
  "todas",
  "todes",
  "ralo",
  "rala",
  "rale",
  "ralos",
  "ralas",
  "rales",
  "ogre",
  "sogro",
  "sogra",
  "sogros",
  "sogras",
  "auto",
  "autos",
  "jazo",
  "jaza",
  "jaze",
  "jazi",
  "jazas",
  "grilo",
  "grelo",
  "bufo",
  "bufa",
  "bufe",
  "bufos",
  "bufas",
  "fubes",
  "toto",
  "pilhe",
  "pilha",
  "pilho",
  "mija",
  "mijo",
  "pica",
  "pico",
  "vinho",
  "vinha",
  "vinde",
  "vinda",
  "vindo",
  "cave",
  "cava",
  "cavo",
  "transem",
  "transam",
  "transei",
  "muto",
  "muta",
  "mute",
  "mutai",
  "mutou",
  "mutei",
  "cama",
  "came",
  "moto",
  "mota",
  "mote",
  "vias",
  "vios",
  "raja",
  "rajo",
  "rolho",
  "rolha",
  "tamanho",
  "tamanha",
  "sujo",
  "suja",
  "suje",
  "alem",
  "senha",
  "senho",
  "sonho",
  "sonha",
  "sonhe",
  "piada",
  "pião",
  "peão",
  "pato",
  "pata",
  "pate",
  "punho",
  "punha",
  "durita",
  "durito",
  "cobre",
  "cobra",
  "cobro",
  "cobri",
  "dela",
  "dele",
  "passo",
  "passa",
  "passe",
  "pano",
  "pana",
  "nossa",
  "nosso",
  "tiro",
  "tira",
  "tire",
  "muito",
  "muita",
  "fura",
  "furo",
  "fure",
  "usam",
  "puxa",
  "puxo",
  "puxe",
  "puxam",
  "marre",
  "marra",
  "marro",
  "ruca",
  "rara",
  "raro",
  "roque",
  "zelo",
  "zele",
  "zela",
  "ana",
  "rato",
  "rata",
  "ratos",
  "ratas",
];

// LimparServidor();

//  vuoczo, transxaou, ilnhoco
// ================================================= VARIÁVEIS ========================================================

let palavra;

let silInicio;
let silMeio;
let silFim;

let newSilInicio;
let newSilMeio;
let newSilFim;

let newPalavra;

let ultimasImagens = [];

let imagem;

// ------------------------------------------- CARREGAMENTO DAS PÁGINAS -----------------------------------------------
if (window.location.pathname.includes("/info.html")) {
  if (document.referrer.includes("palavra.html")) {
    console.log("PALAVRA");
    // Se o usuário veio de "palavra.html", execute a função
    document.getElementById("close").addEventListener("click", () => {
      window.location.href = "palavra.html";
    });
  }
  if (
    document.referrer.includes("") &&
    document.referrer.includes("/palavra.html") == false &&
    document.referrer.includes("/arquivo.html") == false
  ) {
    console.log("INÍCIO");
    // Se o usuário veio de "index.html", execute a função
    document.getElementById("close").addEventListener("click", () => {
      window.location.href = "/";
    });
  }
  if (document.referrer.includes("/arquivo.html")) {
    console.log("ARQUIVO");
    // Se o usuário veio de "arquivo.html", execute a função
    document.getElementById("close").addEventListener("click", () => {
      window.location.href = "arquivo.html";
    });
  }
}

if (window.location.pathname.includes("/palavra.html")) {
  window.onload = function () {
    let palavraCookies = localStorage.getItem("palavra");
    let silabasCookies = localStorage.getItem("silabas");
    let imagemCookies = localStorage.getItem("imagem");

    // Verificando se o parâmetro 'start' está presente na URL
    const urlParams = new URLSearchParams(window.location.search);
    const startParam = urlParams.get("start");

    if (startParam === "true") {
      // Se o parâmetro 'start' for 'true', chama a função
      GerarPalavra();
    } else {
      // PreCarregarImagens();
      palavra = localStorage.getItem("palavra");
      newPalavra = localStorage.getItem("silabas");
      imagem = localStorage.getItem("imagem");

      if (palavraCookies) {
        document.getElementById("palavra").innerText = palavraCookies;
      }
      if (silabasCookies) {
        document.getElementById("silabas").innerText = silabasCookies;
      }
      if (imagemCookies) {
        document.getElementById(
          "imagem"
        ).src = `images/grandes/${imagemCookies}.webp`;
      }
    }

    console.warn(`localStorage: ${palavra} + ${newPalavra} + ${imagem}`);
    substituirBulletsPorEstilo();

    // Impede a possibilidade de dar 'enter' na textarea
    document
      .getElementById("significado")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault(); // Impede a ação padrão de adicionar uma nova linha
        }
      });
  };
}

if (window.location.pathname.includes("/arquivo.html")) {
  window.onload = function () {
    MostrarArquivo();
    substituirBulletsPorEstilo();
  };
}

// // Acho que isto é obsoleto
// function PreCarregarImagens() {
//   for (let i = 57; i <= 84; i++) {
//     let img = new Image(); // Cria um novo objeto de imagem
//     img.src = `images/grandes/${i}.webp`; // Define o caminho da imagem
//     let imgName = i;
//     imagensCarregadas.push(imgName); // Armazena O NOME da imagem no array
//     console.warn(imagensCarregadas);
//   }
// }

// =========================================== PALAVRA, SÍLABAS E IMAGEM ==============================================
async function GerarPalavra() {
  // -------------------------------------------- GERAÇÃO DE IMAGEM ---------------------------------------------------
  try {
    const response = await fetch("https://diciomeunario-api.onrender.com/data");
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText); // Lida com erros de status
    }

    const responseData = await response.json();
    console.log(responseData); // Exibe a resposta no console

    if (!Array.isArray(responseData)) {
      throw new Error("A resposta não é um array válido."); // Checa se a resposta é um array
    }
    if (responseData.stringify == []) {
      // Isto mostra as últimas 3 imagens geradas
      ultimasImagens = ultimasImagens.concat(
        responseData[responseData.length - 1].ultimas_imagens
      );
      console.log(ultimasImagens);

      do {
        // Isto impede que a imagem gerada seja igual às últimas 3
        imagem = Math.floor(Math.random() * 75) + 1;
        console.info(imagem);
      } while (ultimasImagens.includes(imagem));
    } else {
      imagem = Math.floor(Math.random() * 75) + 1;
      console.info(imagem);
    }
  } catch (error) {
    console.error("Erro ao buscar as imagens:", error);
  }

  // ---------------------------------------- GERAÇÃO DE PSEUDO-PALAVRAS ----------------------------------------------
  // Reset das sílabas
  silInicio = undefined;
  silMeio = undefined;
  silFim = undefined;

  const vogais = ["a", "e", "i", "o", "u"];
  const vogaisNasais = ["ã", "õ"];
  const consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  do {
    silInicio = SIL_INICIO[Math.floor(Math.random() * SIL_INICIO.length)]; // Sílaba inicial
    palavra = silInicio;
    console.log("Sílaba inicial: " + palavra);
    // console.log(palavra.charAt(palavra.length - 1));

    for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
      do {
        silMeio = SIL_MEIO[Math.floor(Math.random() * SIL_MEIO.length)];
        // evita a duplicação de vogais/consoantes
        // console.log(silMeio.charAt(0));
      } while (
        palavra.charAt(palavra.length - 1) == silMeio.charAt(0) || // evitar letras iguais entre sílabas
        (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
          consoantes.includes(silMeio.charAt(0)) &&
          consoantes.includes(silMeio.charAt(1))) || // evitar três consoantes seguidas
        (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
          consoantes
            .filter((c) => c !== "r" && c !== "s" && c !== "d")
            .includes(silMeio.charAt(0))) // evitar consoantes exceto "r", "s" e "d" a seguir a outra consoante
      );
      palavra += silMeio; // Sílaba(s) intermédia(s)
      console.log("Sílaba(s) intermédias: " + palavra);
    }

    // console.log(palavra.charAt(palavra.length - 1));
    do {
      silFim = SIL_FIM[Math.floor(Math.random() * SIL_FIM.length)];
      // evita a duplicação de vogais/consoantes
      // console.log(silFim.substring(0, 2));
    } while (
      palavra.charAt(palavra.length - 1) == silFim.charAt(0) || // evitar letras iguais entre sílabas
      (vogais.includes(palavra.charAt(palavra.length - 1)) &&
        vogaisNasais.includes(silFim.charAt(0))) || // evitar uma vogal nasal logo a seguir a uma vogal
      (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
        consoantes
          .filter((c) => c !== "r" && c !== "s" && c !== "d")
          .includes(silFim.charAt(0))) || // evitar consoantes exceto "r", "s" e "d" a seguir a outra consoante
      (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
        silFim.charAt(0) == silFim.charAt(1)) || // evitar "rr" e "ss" depois de uma consoante
      (palavra.charAt(palavra.length - 1) == "m" &&
        ["r", "s", "d"].includes(silFim.charAt(0))) || // evitar "r", "s" e "d" depois de um "m"
      (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
        consoantes.includes(silFim.charAt(0)) &&
        consoantes.includes(silFim.charAt(1))) // evitar três consoantes seguidas
    );
    console.info(`${silInicio} + ${silMeio} + ${silFim}`);

    palavra += silFim; // Sílaba final
    console.log("Sílaba final: " + palavra);
  } while (PALAVRAS_EXISTENTES.includes(palavra)); // Gerar nova palavra se coincidir com uma palavra existente

  // -------------------------------------------- SEPARAÇÃO DAS SÍLABAS -----------------------------------------------
  newSilInicio = silInicio;
  newSilMeio = silMeio;
  newSilFim = silFim;

  if (silMeio == undefined) {
    let newInicioBefore = newSilInicio;

    // Passar consoantes de uma sílaba para a outra
    if (
      (consoantes.includes(newSilInicio.charAt(newSilInicio.length - 1)) &&
        vogais.includes(newSilFim.charAt(0))) ||
      (consoantes.includes(newSilInicio.charAt(newSilInicio.length - 1)) &&
        vogaisNasais.includes(newSilFim.charAt(0)))
    ) {
      console.info("InicioFim");
      newSilInicio = newSilInicio.slice(0, newSilInicio.length - 1);
      console.log(newSilInicio);
      newSilFim =
        newInicioBefore.charAt(newInicioBefore.length - 1) + newSilFim;
      console.log(newSilFim);
    }

    // Separar "rr" e "ss" pelas duas sílabas
    if (["rr", "ss"].includes(newSilFim.substring(0, 2))) {
      newSilInicio += newSilFim.charAt(0);
      newSilFim = newSilFim.slice(1);
    }

    newPalavra = `${newSilInicio}•${newSilFim}`;
  }

  if (newSilMeio !== undefined) {
    let newInicioBefore = newSilInicio;
    let newMeioBefore = newSilMeio;

    // Passar consoantes de uma sílaba para a outra
    if (
      consoantes.includes(newSilInicio.charAt(newSilInicio.length - 1)) &&
      vogais.includes(newSilMeio.charAt(0))
    ) {
      console.info("InicioMeio");
      newSilInicio = newSilInicio.slice(0, newSilInicio.length - 1);
      console.log(newSilInicio);
      newSilMeio =
        newInicioBefore.charAt(newInicioBefore.length - 1) + newSilMeio;
      console.log(newSilMeio);
      // newSilFim = newSilFim;
    }
    if (
      consoantes.includes(silMeio.charAt(silMeio.length - 1)) &&
      (vogais.includes(silFim.charAt(0)) ||
        vogaisNasais.includes(silFim.charAt(0)))
    ) {
      console.info("MeioFim");
      newSilMeio = newSilMeio.slice(0, newSilMeio.length - 1);
      console.log(newSilMeio);
      newSilFim = newMeioBefore.charAt(newMeioBefore.length - 1) + newSilFim;
      console.log(newSilFim);
    }

    newInicioBefore = newSilInicio;
    newMeioBefore = newSilMeio;

    // Passar consoante para ao pé do "r", "s" ou "l" quando é antecedida por uma vogal
    if (
      consoantes
        .filter(
          (c) =>
            c !== "h" &&
            c !== "j" &&
            c !== "m" &&
            c !== "n" &&
            c !== "s" &&
            c !== "x" &&
            c !== "z"
        )
        .includes(newSilMeio.charAt(newSilMeio.length - 1)) &&
      (vogais.includes(newSilMeio.charAt(newSilMeio.length - 2)) ||
        vogaisNasais.includes(newSilMeio.charAt(newSilMeio.length - 2))) &&
      ["r", "s", "l"].includes(newSilFim.charAt(0))
    ) {
      console.info("MeioFim R/S/L");
      newSilMeio = newSilMeio.slice(0, newSilMeio.length - 1);
      console.log(newSilMeio);
      newSilFim = newMeioBefore.charAt(newMeioBefore.length - 1) + newSilFim;
      console.log(newSilFim);
    }

    // Separar "rr" e "ss" pelas duas sílabas
    if (["rr", "ss"].includes(newSilMeio.substring(0, 2))) {
      newSilInicio += newSilMeio.charAt(0);
      newSilMeio = newSilMeio.slice(1);
    }
    if (["rr", "ss"].includes(newSilFim.substring(0, 2))) {
      newSilMeio += newSilFim.charAt(0);
      newSilFim = newSilFim.slice(1);
    }

    newPalavra = `${newSilInicio}•${newSilMeio}•${newSilFim}`;
  }

  // INSERIR REGRA DE JUNTAR CONSOANTE COM R OU S

  const juntarDitongos = [
    ["a•i", "ai"],
    ["ã•o", "ão"],
    ["a•u", "au"],
    ["e•i", "ei"],
    ["e•u", "eu"],
    ["o•i", "oi"],
    ["o•u", "ou"],
  ];
  const separarDitongos = [
    ["ae", "a•e"],
    ["ea", "e•a"],
    ["eo", "e•o"],
    ["ia", "i•a"],
    ["ie", "i•e"],
    ["io", "i•o"],
    ["oa", "o•a"],
    ["oe", "o•e"],
    ["ua", "u•a"],
    ["uo", "u•o"],
    ["ese", "e•se"],
  ];

  juntarDitongos.forEach(([de, para]) => {
    newPalavra = newPalavra.replaceAll(de, para);
  });
  separarDitongos.forEach(([de, para]) => {
    newPalavra = newPalavra.replaceAll(de, para);
  });

  // Mostrar divisão de sílabas
  console.info(newPalavra);

  // Armazenar a informação gerada nos cookies do browser
  localStorage.clear();

  localStorage.setItem("palavra", palavra);
  localStorage.setItem("silabas", newPalavra);
  localStorage.setItem("imagem", imagem);

  // Mostrar a informação no site de acordo com os cookies
  document.getElementById("palavra").innerText =
    localStorage.getItem("palavra");
  document.getElementById("silabas").innerText =
    localStorage.getItem("silabas");
  document.getElementById(
    "imagem"
  ).src = `images/grandes/${localStorage.getItem("imagem")}.webp`;
}

// =============================================== ENVIO DA PALAVRA ===================================================
function EnviarSignificado(event) {
  let significado = document.getElementById("significado").value;
  console.log(significado);

  if (significado.length >= 10) {
    // Garantir que o envio do formulário não impeça o envio dos dados para o servidor, sem antes fazer o resto
    event.preventDefault();

    // Adiciona a imagem gerada ao conjunto das mais recentes, impedindo que este exceda 3 elementos
    ultimasImagens.push(imagem);
    if (ultimasImagens.length > 3) {
      ultimasImagens.shift();
    }

    console.log(ultimasImagens);

    let data = {
      palavra: palavra,
      silabas: newPalavra,
      significado: significado,
      imagem: imagem,
      ultimas_imagens: ultimasImagens,
    };

    console.log(data);

    // Feito pelo Rui, o namorado da Bea Gonçalves amen
    fetch("https://diciomeunario-api.onrender.com/data", {
      method: "POST", // Specify the request method
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(data), // Convert the data to a JSON string
    }).then((r) => (window.location.href = "arquivo.html"));
  }
}

// =================================================== ARQUIVO ========================================================
function MostrarArquivo() {
  // Fazer a requisição ao backend via proxy
  fetch("https://diciomeunario-api.onrender.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.statusText); // Lida com erros de status
      }
      return response.json(); // Processa a resposta como JSON
    })
    .then((responseData) => {
      console.log(responseData); // Exibe a resposta no console

      if (!Array.isArray(responseData)) {
        throw new Error("A resposta não é um array válido."); // Checa se a resposta é um array
      }

      // Colocar o histórico ao contrário: o mais recente primeiro
      responseData = responseData.reverse();

      // Referência ao container onde as divs serão inseridas
      const container = document.getElementById("container");

      // Limpar o conteúdo anterior do container (caso haja algum)
      container.innerHTML = "";

      // Quando arquivo está vazio
      if (responseData.length == 0) {
        console.log("VAZIO");
        document.getElementById("container").innerText =
          "Ainda não submeteste nada. Porque não experimentar?";
        document.getElementById("container").style.color = "white";
      }

      // Iterar sobre os itens do JSON e criar uma div para cada um
      responseData.forEach((item) => {
        if (item.palavra && item.silabas && item.significado) {
          // Verifica se os campos estão presentes
          // Criando uma nova div
          const div = document.createElement("div");

          // Preenchendo a div com o conteúdo
          div.innerHTML = `
            <h3>${item.palavra}</h1>  <!-- Exibe a palavra -->
            <img width="100%" height="auto" src="images/pequenas/${item.imagem}.webp" alt="Imagem gerada anteriormente"> <!-- Exibe a imagem -->
            <p>${item.significado}</p> <!-- Exibe o significado -->
          `;

          // Adicionando a nova div ao container
          container.appendChild(div);
        }
      });
    })
    .catch((error) => {
      console.error("Erro:", error); // Trata o erro
    });
}

//::::::::::::::::::::::::::::::::::::::::::::::::::: BULLET POINTS :::::::::::::::::::::::::::::::::::::::::::::::::::
function substituirBulletsPorEstilo() {
  // Seleciona o conteúdo do site que contém os bullet points
  let conteudo = document.body.innerHTML;

  // Substitui o caractere '•' por um <span> com a fonte Arial Bold e padding lateral
  conteudo = conteudo.replace(/•/g, (bullet) => {
    return `<span class="bullet">${bullet}</span>`;
  });

  // Atualiza o conteúdo do site com os novos elementos
  document.body.innerHTML = conteudo;
}

// ========================================= APENAS PARA LIMPEZA DO SERVIDOR ==========================================
function LimparServidor() {
  fetch("https://diciomeunario-api.onrender.com/delete", {
    method: "GET",
    mode: "no-cors", // Isso pode ser necessário se o servidor não tiver CORS configurado
    headers: {
      "Content-Type": "application/json",
    },
    // Aqui, você pode ou não precisar de um corpo, dependendo do que o servidor exige.
    // Se for necessário passar dados adicionais (por exemplo, uma confirmação ou ID), o corpo pode ser incluído.
    // body: JSON.stringify(data),
  });
  console.log("Servidor limpo!");
}

/*
REGRAS DE FORMAÇÃO que vão ter de ser definidas:
- a seguir a uma vogal, não pode vir outra igual | CHECK
- a seguir a uma vogal, não pode vir outra anasalada | CHECK
- a seguir a uma consoante, não pode vir outra consoante igual | CHECK
- a seguir a uma consoante, não podem vir rr, ss, etc. (tem de vir apenas um r, s, etc.) | CHECK
- a seguir a uma vogal, não pode vir outra vogal que não faça ditongo com esta | CHECK
- não pode haver 3 consoantes seguidas | CHECK
- cuidado com 3 vogais seguidas | CHECK
*/

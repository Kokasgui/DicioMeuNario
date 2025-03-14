// ================================================ ARRAYS DE SÍLABAS =================================================
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
]; // Sílabas intermédias (que pode ser gerada ou não)

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

// ========================================== ARRAY DAS PALAVRAS EXISTENTES ===========================================
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
  "topa",
  "lares",
  "soa",
  "soas",
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
  "iro",
  "ire",
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
  "micro",
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
  "quebras",
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
  "ileso",
  "ilesa",
  "ilese",
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
  "caduca",
  "caduco",
  "caduque",
  "dito",
  "dita",
  "dite",
  "ditos",
  "ditas",
  "mara",
  "rogo",
  "roga",
  "rogue",
  "rugi",
  "alho",
  "lora",
  "sede",
  "cedo",
  "cedi",
  "ceda",
  "cede",
  "zara",
  "seta",
  "sete",
  "mapa",
  "fio",
  "fia",
  "fie",
  "asas",
  "runa",
  "runas",
  "rumo",
  "rume",
  "remo",
  "reme",
  "rema",
  "barulho",
  "caos",
  "amor",
  "roma",
  "milha",
  "milho",
  "molhe",
  "malhe",
  "malha",
  "malho",
  "trono",
  "grama",
  "grana",
  "telha",
  "lara",
  "laras",
  "canho",
  "cano",
  "cana",
  "azul",
  "sono",
  "polha",
  "polho",
  "negra",
  "rose",
  "rosa",
  "roxo",
  "roxa",
  "doto",
  "dota",
  "dote",
  "dotes",
  "dotei",
  "varre",
  "varro",
  "varra",
  "dobro",
  "dobra",
  "dobre",
  "mia",
  "mias",
  "mio",
  "miou",
  "suga",
  "sugo",
  "sugue",
  "sugar",
  "sugas",
  "sugou",
  "luis",
  "luiz",
  "jaro",
  "bora",
  "borra",
  "borro",
  "borre",
  "borrei",
  "borrada",
  "burro",
  "burra",
  "burre",
  "pose",
  "posa",
  "poso",
  "posei",
  "posou",
  "luva",
  "rita",
  "rito",
  "reto",
  "reta",
  "graxa",
  "graxo",
  "graxi",
  "amou",
  "amei",
  "ama",
  "amo",
  "ame",
  "lerda",
  "lerdo",
  "lerde",
  "bita",
  "brita",
  "xana",
  "xama",
  "prazo",
  "praza",
  "prezo",
  "preza",
  "preze",
  "lufa",
  "lufada",
  "dara",
  "dera",
  "goa",
  "fede",
  "asa",
  "asas",
  "vaso",
  "vasa",
  "bide",
  "lema",
  "leme",
  "dude",
  "gana",
  "boda",
  "bode",
  "bodo",
  "bodas",
  "bodes",
  "miam",
  "trema",
  "treme",
  "tremo",
  "fail",
  "ralara",
  "ralado",
  "ralada",
  "essa",
  "esse",
  "duna",
  "rica",
  "rico",
  "beto",
  "beta",
  "bete",
  "beca",
  "beco",
  "dojo",
  "minha",
  "minho",
  "hurra",
  "baguete",
  "ralha",
  "ralhe",
  "ralho",
  "rena",
  "lareira",
  "brasa",
  "braso",
  "brase",
  "move",
  "mova",
  "movo",
  "movi",
  "opa",
  "gabo",
  "gaba",
  "gabe",
  "bois",
  "io",
  "moeda",
  "moedas",
  "bico",
  "bica",
  "povo",
  "coma",
  "como",
  "come",
  "comi",
  "cona",
  "berre",
  "berra",
  "mina",
  "mino",
  "minimo",
  "lepra",
  "leproso",
  "leprosa",
  "leprita",
  "leprinha",
  "lebre",
  "ilha",
  "duro",
  "dura",
  "vieira",
  "poema",
  "rasa",
  "raso",
  "rase",
  "goma",
  "folheto",
  "pusera",
  "faina",
  "fainas",
  "fainona",
  "lata",
  "lato",
  "boa",
  "boas",
  "crude",
  "luro",
  "lure",
  "lura",
  "papeis",
  "solo",
  "lipa",
  "tropa",
  "pinho",
  "nora",
  "garra",
  "cabide",
  "caca",
  "caco",
  "coco",
  "medo",
  "teto",
  "teta",
  "lua",
  "luas",
  "luana",
  "dia",
  "pia",
  "tia",
  "tio",
  "tias",
  "tios",
  "guna",
  "seca",
  "seco",
  "plasma",
  "triplas",
  "tetra",
  "caga",
  "cago",
  "gama",
  "gamo",
  "game",
  "quepe",
  "queque",
  "fire",
  "filha",
  "filhe",
  "filho",
  "lagrima",
  "duo",
  "duos",
  "prota",
  "ruca",
  "treta",
  "quimera",
  "tato",
  "tinha",
  "pinha",
  "ponha",
  "penha",
  "bruta",
  "bruto",
  "bife",
  "plastico",
  "plastica",
  "coxa",
  "sales",
  "salas",
  "salada",
  "russa",
  "russo",
  "aipo",
  "alho",
  "doninha",
  "propunha",
  "proponha",
  "proponho",
  "duque",
  "doque",
  "bomba",
  "bombo",
  "pide",
  "alvo",
  "sobras",
  "sobra",
  "ena",
  "pobreza",
  "truque",
  "raiz",
  "dica",
  "quero",
  "alto",
  "alta",
  "alte",
  "coca",
  "amam",
  "amem",
  "bolo",
  "bola",
  "bole",
  "bolota",
  "boleta",
  "roleta",
  "bofa",
  "bofo",
  "bula",
  "bulo",
  "siba",
  "sibe",
  "suba",
  "subo",
  "vima",
  "vime",
  "troco",
  "troca",
  "lacro",
  "lacra",
  "lacre",
  "liga",
  "ligo",
  "diva",
  "divo",
  "nuno",
  "nuna",
  "teresa",
  "noa",
  "terra",
  "libre",
  "libra",
  "libras",
  "libro",
  "calibre",
  "calibra",
  "calibro",
  "delego",
  "delega",
  "fita",
  "fito",
  "fite",
  "ponho",
  "ponha",
  "bloque",
  "holo",
  "trofa",
  "neve",
  "neva",
  "nevo",
  "fumo",
  "fuma",
  "fume",
  "sena",
  "riso",
  "vila",
  "baba",
  "babe",
  "babo",
  "irra",
  "crista",
  "cristo",
  "trela",
  "trelo",
  "doas",
  "migo",
  "miga",
  "mesa",
  "massiva",
  "massivo",
  "soba",
  "sobra",
  "sobre",
  "sobro",
  "clama",
  "clame",
  "clamo",
  "unha",
  "gazela",
  "tuba",
  "tubo",
  "tejo",
  "sala",
  "trota",
  "troto",
  "trote",
  "buca",
  "buco",
  "here",
  "mirra",
  "mirre",
  "mira",
  "miro",
  "mire",
  "gripe",
  "gripa",
  "gripo",
  "vina",
  "miau",
  "bruna",
  "bruno",
  "brune",
  "blusa",
  "blusita",
  "blusinha",
  "ufa",
  "uva",
  "moura",
  "mouro",
  "mouta",
  "moutita",
  "moutinha",
  "moita",
  "moito",
  "moite",
  "moitinha",
  "moitita",
  "cabrinha",
  "cabrita",
  "cabrito",
  "cabrinho",
  "farinha",
  "troque",
  "troce",
  "somo",
  "soma",
  "some",
  "traque",
  "trace",
  "nocivo",
  "nociva",
  "lapo",
  "lapa",
  "braba",
  "brabo",
  "rapela",
  "rapele",
  "rapelo",
  "folha",
  "folho",
  "folhe",
  "paleta",
  "lago",
  "laga",
  "laguinho",
  "laguinha",
  "claro",
  "clara",
  "elisão",
  "pu",
  "pua",
  "puada",
  "pue",
  "puem",
  "pui",
  "puia",
  "puiam",
  "puias",
  "puona",
];

// ==================================================== VARIÁVEIS =====================================================
// Para a geração da palavra
let silInicio;
let silMeio;
let silFim;

let palavra;

// Para a separação das sílabas
let newSilInicio;
let newSilMeio;
let newSilFim;

let newPalavra;

// Para a geração da imagem
let ultimasImagens = [];

let imagem;

// ============================================= CARREGAMENTO DAS PÁGINAS =============================================
if (window.location.pathname.includes("/palavra.html")) {
  window.onload = function () {
    // Verifica o tipo de navegação utilizando PerformanceNavigationTiming (se dá refresh ou se avança/recua no histórico)
    const navigationType = performance.getEntriesByType("navigation")[0].type;

    if (navigationType === "back_forward") {
      MostrarPalavra();
    } else {
      GerarPalavra(); // Chama a função que gera uma nova palavra
    }
  };
}

if (window.location.pathname.includes("/arquivo.html")) {
  window.onload = function () {
    MostrarArquivo();
  };
}

// ===================================================== GERADOR ======================================================
async function GerarPalavra() {
  // ----------------------------------------------- GERAÇÃO DE IMAGEM ------------------------------------------------
  try {
    const response = await fetch("https://diciomeunario-api.onrender.com/data");
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText); // Lida com erros de status
    }

    const responseData = await response.json();
    console.log(responseData); // Exibe a resposta do servidor na consola

    if (!Array.isArray(responseData)) {
      throw new Error("A resposta não é um array válido."); // Isto verifica se a resposta é um array
    }
    if (responseData.length == 0) {
      console.log("VAZIO");

      // Isto impede que a imagem gerada seja igual à última que viu
      do {
        imagem = Math.floor(Math.random() * 75) + 1;
        console.info(imagem);
      } while (imagem == sessionStorage.getItem("imagem"));
    } else {
      // Isto mostra as últimas 3 imagens geradas
      ultimasImagens = ultimasImagens.concat(
        responseData[responseData.length - 1].ultimas_imagens
      );
      console.log(ultimasImagens);

      // Isto impede que a imagem gerada seja igual às últimas 3 ou que não seja igual à última que viu
      do {
        imagem = Math.floor(Math.random() * 75) + 1;
        console.info(imagem);
      } while (
        ultimasImagens.includes(imagem) ||
        imagem == sessionStorage.getItem("imagem")
      );
    }
  } catch (error) {
    console.error("Erro ao buscar as imagens:", error);
  }

  // ------------------------------------------- GERAÇÃO DE PSEUDO-PALAVRAS -------------------------------------------
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

  // Sílaba inicial
  do {
    silInicio = SIL_INICIO[Math.floor(Math.random() * SIL_INICIO.length)];
    palavra = silInicio;
    console.log("Sílaba inicial: " + palavra);
    // console.log(palavra.charAt(palavra.length - 1));

    // Sílaba do meio
    for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
      do {
        silMeio = SIL_MEIO[Math.floor(Math.random() * SIL_MEIO.length)];
        // console.log(silMeio.charAt(0));
      } while (
        palavra.charAt(palavra.length - 1) == silMeio.charAt(0) || // evita letras iguais entre sílabas
        (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
          consoantes.includes(silMeio.charAt(0)) &&
          consoantes.includes(silMeio.charAt(1))) || // evita três consoantes seguidas
        (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
          consoantes
            .filter((c) => c !== "r" && c !== "s")
            .includes(silMeio.charAt(0))) // evita consoantes exceto "r" e "s" a seguir a outra consoante
      );
      palavra += silMeio; // Sílaba(s) intermédia(s)
      console.log("Sílaba(s) intermédias: " + palavra);
    }
    // console.log(palavra.charAt(palavra.length - 1));

    // Sílaba final
    do {
      silFim = SIL_FIM[Math.floor(Math.random() * SIL_FIM.length)];
    } while (
      palavra.charAt(palavra.length - 1) == silFim.charAt(0) || // evita letras iguais entre sílabas
      (vogais.includes(palavra.charAt(palavra.length - 1)) &&
        vogaisNasais.includes(silFim.charAt(0))) || // evita uma vogal nasal logo a seguir a uma vogal
      (["h", "j", "m", "x", "z"].includes(palavra.charAt(palavra.length - 1)) &&
        consoantes
          .filter((c) => c !== "r" && c !== "s")
          .includes(silFim.charAt(0))) || // evita consoantes exceto "r" e "s" a seguir a outra consoante
      (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
        silFim.charAt(0) == silFim.charAt(1)) || // evita "rr" e "ss" depois de uma consoante
      (palavra.charAt(palavra.length - 1) == "m" &&
        ["r", "s", "d", "t"].includes(silFim.charAt(0))) || // evita "r", "s", "d" e "t" depois de um "m"
      (consoantes.includes(palavra.charAt(palavra.length - 1)) &&
        consoantes.includes(silFim.charAt(0)) &&
        consoantes.includes(silFim.charAt(1))) // evita três consoantes seguidas
    );
    console.info(`${silInicio} + ${silMeio} + ${silFim}`);

    palavra += silFim; // Sílaba final
    console.log("Sílaba final: " + palavra);
  } while (PALAVRAS_EXISTENTES.includes(palavra)); // Gera uma nova palavra se coincidir com uma palavra existente

  // --------------------------------------------- SEPARAÇÃO DAS SÍLABAS ----------------------------------------------
  newSilInicio = silInicio;
  newSilMeio = silMeio;
  newSilFim = silFim;

  // Caso NÃO haja sílaba do meio
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

  // Caso haja sílaba do meio
  if (newSilMeio !== undefined) {
    let newInicioBefore = newSilInicio;
    let newMeioBefore = newSilMeio;

    // Passa consoantes de uma sílaba para a outra
    if (
      // Início + meio
      consoantes.includes(newSilInicio.charAt(newSilInicio.length - 1)) &&
      vogais.includes(newSilMeio.charAt(0))
    ) {
      console.info("InicioMeio");
      newSilInicio = newSilInicio.slice(0, newSilInicio.length - 1);
      console.log(newSilInicio);
      newSilMeio =
        newInicioBefore.charAt(newInicioBefore.length - 1) + newSilMeio;
      console.log(newSilMeio);
    }
    if (
      // Meio + fim
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

    // Passa consoante para ao pé do "r", "s" ou "l" quando é antecedida por uma vogal
    if (
      // Meio + fim (com "r", "s" ou "l")
      consoantes
        .filter(
          (c) =>
            c !== "h" &&
            c !== "j" &&
            c !== "l" &&
            c !== "m" &&
            c !== "n" &&
            c !== "r" &&
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

    // Separa "rr" e "ss" pelas duas sílabas
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

  const juntarDitongos = [
    ["a•i", "ai"],
    ["ã•o", "ão"],
    ["a•u", "au"],
    ["e•i", "ei"],
    ["e•u", "eu"],
    ["o•i", "oi"],
    ["o•u", "ou"],
    ["u•i", "ui"],
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

  // Separa vogais caso a palavra contenha uma sequência CVVC ou CVVV na mesma sílaba
  for (let i = 0; i < newPalavra.length - 3; i++) {
    // CVVC
    if (
      !newPalavra.slice(i, i + 4).includes("•") &&
      consoantes.includes(newPalavra.charAt(i)) &&
      vogais.includes(newPalavra.charAt(i + 1)) &&
      vogais.includes(newPalavra.charAt(i + 2)) &&
      consoantes.includes(newPalavra.charAt(i + 3)) &&
      newPalavra.slice(i, i + 3) !== "que"
    ) {
      console.info("CVVC");
      newPalavra = `${newPalavra.slice(0, i + 2)}•${newPalavra.slice(i + 2)}`;
    }
    // CVVV
    if (
      !newPalavra.slice(i, i + 4).includes("•") &&
      consoantes.includes(newPalavra.charAt(i)) &&
      vogais.includes(newPalavra.charAt(i + 1)) &&
      vogais.includes(newPalavra.charAt(i + 2)) &&
      vogais.includes(newPalavra.charAt(i + 3))
    ) {
      console.info("CVVV");
      newPalavra = `${newPalavra.slice(0, i + 3)}•${newPalavra.slice(i + 3)}`;
    }
  }

  // Mostra divisão de sílabas
  console.info(newPalavra);

  // Armazena a informação gerada na memória (da sessão) do browser
  sessionStorage.clear();
  sessionStorage.setItem("palavra", palavra);
  sessionStorage.setItem("silabas", newPalavra);
  sessionStorage.setItem("imagem", imagem);
  sessionStorage.setItem("ultimas-imagens", JSON.stringify(ultimasImagens));

  MostrarPalavra(); // Mostra os resultados no website
}

// ========================================= MOSTRA OS RESULTADOS DO GERADOR ==========================================
function MostrarPalavra() {
  // Vai buscar as informações da memória do browser
  let palavraMemoria = sessionStorage.getItem("palavra");
  let silabasMemoria = sessionStorage.getItem("silabas");
  let imagemMemoria = sessionStorage.getItem("imagem");
  let ultimasImagensMemoria = sessionStorage.getItem("ultimas-imagens");

  // Atualiza os valores das variáveis
  palavra = palavraMemoria;
  newPalavra = silabasMemoria;
  imagem = Number(imagemMemoria); // Converte a string para um número novamente
  ultimasImagens = JSON.parse(ultimasImagensMemoria); // Converte a string para um array, para poder ser modificado na submissão

  // Exibe as informações da memória no website
  if (imagemMemoria) {
    document.getElementById(
      "imagem"
    ).src = `images/grandes/${imagemMemoria}.webp`;
  }

  document.getElementById("imagem").onload = function () {
    if (palavraMemoria) {
      document.getElementById("palavra").innerText = palavraMemoria;
    }
    if (silabasMemoria) {
      document.getElementById("silabas").innerText = silabasMemoria;
    }

    console.warn(`sessionStorage: ${palavra} + ${newPalavra} + ${imagem}`);
    console.warn(ultimasImagens);

    substituirBulletsPorEstilo(); // Substitui os bullet points

    // Impede a possibilidade de dar 'enter' na textarea
    document
      .getElementById("significado")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault(); // Impede a ação padrão de adicionar uma nova linha
        }
      });

    document.getElementById("loading").style.display = "none";
    document.getElementById("significado").focus();
  };
}

// ================================================= ENVIO DA PALAVRA =================================================
function EnviarSignificado(event) {
  let significado = document.getElementById("significado").value;
  console.log(significado);

  if (significado.length >= 10) {
    // Garante que o envio do formulário não impeça o envio dos dados para o servidor, sem antes fazer o resto
    event.preventDefault();

    // // Impede que o botão seja clicado durante o processo de envio, para não ficarem palavras repetidas
    document.getElementById("submit").disabled = true;
    document.getElementById("significado").disabled = true;

    // Adiciona a imagem gerada ao conjunto das mais recentes, impedindo que este tenha mais de 3 elementos
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

    // Feito com ajuda de Rui Barbosa
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

// ===================================================== ARQUIVO ======================================================
function MostrarArquivo() {
  // Vai buscar os conteúdos do servidor
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
        throw new Error("A resposta não é um array válido."); // Verifica se a resposta é um array
      }

      // Coloca o histórico ao contrário: o mais recente primeiro
      responseData = responseData.reverse();

      // Vai buscar o container onde as divs serão inseridas
      const container = document.getElementById("container");

      // Limpa o conteúdo anterior do container (caso haja algum). Há partida não há mas fica aqui
      container.innerHTML = "";

      // Quando arquivo está vazio, convida o utilizador a ser o primeiro a colaborar (isto se alguém simplesmente decidir abrir o arquivo)
      if (responseData.length == 0) {
        document.getElementById("button-recomecar").innerText = "Começar";
        document.getElementById("container").innerText =
          "Ainda não há nada submetido. Porque não começas tu?";
        document.getElementById("container").style.color = "white";
      }

      // Iterar sobre os itens do JSON e criar uma div para cada um
      responseData.forEach((item) => {
        if (item.palavra && item.silabas && item.significado) {
          // Verifica se os campos estão presentes

          // Cria uma nova div para cada entrada
          const div = document.createElement("div");

          // Preenche a div com o conteúdo
          div.tabIndex = "0"; // Serve para se poder dar tab (necessário para se ver os significados no iOS!)
          div.innerHTML = `
            <h3>${item.palavra}</h3> <!-- Exibe a palavra -->
            <h3>${item.silabas}</h3> <!-- Exibe as sílabas (no hover) -->
            <img width="100%" height="auto" src="images/pequenas/${item.imagem}.webp" alt="Imagem gerada anteriormente"> <!-- Exibe a imagem -->
            <p>${item.significado}</p> <!-- Exibe o significado (no hover) -->
          `;

          div.addEventListener("click", function (event) {
            // Previne que o foco seja atribuído ao elemento clicado
            event.preventDefault();
            event.stopPropagation();
            // Isso vai impedir que o clique no elemento altere o foco da página
          });
          // Assim, o div só tem foco se se usar o tab

          // Adiciona a nova div ao container principal
          container.appendChild(div);
        }
      });
    })
    .then((response) => {
      substituirBulletsPorEstilo(); // Substitui os bullet points
      document.getElementById("button-recomecar").style.display =
        "inline-block";
    })
    .catch((error) => {
      console.error("Erro:", error); // Trata o erro
    });
}

// :::::::::::::::::::::::::::::::::::::::::::::::::: BULLET POINTS :::::::::::::::::::::::::::::::::::::::::::::::::::
function substituirBulletsPorEstilo() {
  // Seleciona o conteúdo do site que contém os bullet points
  let conteudo = document.body.innerHTML;

  // Substitui o caractere '•' por um <span> com a fonte Arial Bold e padding lateral
  conteudo = conteudo.replace(/•/g, (bullet) => {
    return `<span class="bullet">${bullet}</span>`;
  });
  if (conteudo.includes(`<span class="bullet"><span class="bullet">`)) {
    conteudo = conteudo.replaceAll(
      `<span class="bullet"><span class="bullet">`,
      `<span class="bullet">`
    );
    if (conteudo.includes("</span></span>")) {
      conteudo = conteudo.replaceAll("</span></span>", "</span>");
    }
  }

  // Atualiza o conteúdo do site com os novos bullet points
  document.body.innerHTML = conteudo;
}

// =============================================== LIMPEZA DO SERVIDOR ================================================
// LimparServidor();

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

// ========================================== INSERÇÃO DE DADOS (PARA DEBUG) ==========================================
// DebugServidor();

function DebugServidor() {
  // Aqui inserem-se os aqui dados para substituir! Apenas para debug!!
  debugData = [];

  fetch("https://diciomeunario-api.onrender.com/debug", {
    method: "POST", // Specify the request method
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json", // Specify the content type
    },
    body: JSON.stringify(debugData), // Convert the data to a JSON string
  });
}

/*
REGRAS DE FORMAÇÃO DE PALAVRAS que estão definidas:
- a seguir a uma vogal, não pode vir outra igual | CHECK
- a seguir a uma vogal, não pode vir outra anasalada | CHECK
- a seguir a uma consoante, não pode vir outra consoante igual | CHECK
- a seguir a uma consoante, não podem vir rr, ss, etc. (tem de vir apenas um r, s, etc.) | CHECK
- a seguir a uma vogal, não pode vir outra vogal que não faça ditongo com esta | CHECK
- nunca pode haver 3 consoantes seguidas | CHECK
- ter cuidado com 3 vogais seguidas | CHECK
*/

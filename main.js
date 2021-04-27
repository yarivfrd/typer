const mainContainer = document.querySelector('main');
const startButton = document.querySelector('.start-btn');
const scoreboard = document.querySelector('.scoreboard');
const wordSlot = document.querySelector('.word-slot');
const digitsSlot = document.querySelector('.digits');
const timeBarFillContainer = document.querySelector('.fill-container');
const timeBarFill = document.querySelector('.fill');
const timeBarBarriers = {
    left: document.querySelector('.fill-barrier.left'),
    right: document.querySelector('.fill-barrier.right')
}
const carlton = document.querySelector('.carlton');

let timeLimit = 10;
let mistypes = 0;
const timeBarBarrierWidth = 100 / timeLimit / 2;
let score = 0;
let currentWord;
let currentDigits;

function initGame() {
    words = [
        "able",
        "about",
        "absolute",
        "accept",
        "account",
        "achieve",
        "across",
        "active",
        "actual",
        "address",
        "admit",
        "advertise",
        "affect",
        "afford",
        "after",
        "afternoon",
        "again",
        "against",
        "agent",
        "agree",
        "allow",
        "almost",
        "along",
        "already",
        "alright",
        "although",
        "always",
        "america",
        "amount",
        "another",
        "answer",
        "apart",
        "apparent",
        "appear",
        "appoint",
        "approach",
        "appropriate",
        "around",
        "arrange",
        "associate",
        "assume",
        "attend",
        "authority",
        "available",
        "aware",
        "away",
        "awful",
        "baby",
        "back",
        "balance",
        "ball",
        "bank",
        "base",
        "basis",
        "bear",
        "beat",
        "beauty",
        "because",
        "become",
        "before",
        "begin",
        "behind",
        "believe",
        "benefit",
        "best",
        "between",
        "bill",
        "birth",
        "black",
        "bloke",
        "blood",
        "blow",
        "blue",
        "board",
        "boat",
        "body",
        "book",
        "both",
        "bother",
        "bottle",
        "bottom",
        "break",
        "brief",
        "brilliant",
        "bring",
        "britain",
        "brother",
        "budget",
        "build",
        "business",
        "busy",
        "cake",
        "call",
        "card",
        "care",
        "carry",
        "case",
        "catch",
        "cause",
        "cent",
        "centre",
        "certain",
        "chair",
        "chairman",
        "chance",
        "change",
        "chap",
        "character",
        "charge",
        "cheap",
        "check",
        "child",
        "choice",
        "choose",
        "city",
        "claim",
        "class",
        "clean",
        "clear",
        "client",
        "clock",
        "close",
        "closes",
        "clothe",
        "club",
        "coffee",
        "cold",
        "colleague",
        "collect",
        "college",
        "colour",
        "come",
        "comment",
        "commit",
        "committee",
        "common",
        "community",
        "company",
        "compare",
        "complete",
        "compute",
        "concern",
        "condition",
        "confer",
        "consider",
        "consult",
        "contact",
        "continue",
        "contract",
        "control",
        "converse",
        "cook",
        "copy",
        "corner",
        "correct",
        "cost",
        "could",
        "council",
        "count",
        "country",
        "county",
        "couple",
        "course",
        "court",
        "cover",
        "create",
        "cross",
        "current",
        "danger",
        "date",
        "dead",
        "deal",
        "dear",
        "debate",
        "decide",
        "decision",
        "deep",
        "definite",
        "degree",
        "department",
        "depend",
        "describe",
        "design",
        "detail",
        "develop",
        "difference",
        "difficult",
        "dinner",
        "direct",
        "discuss",
        "district",
        "divide",
        "doctor",
        "document",
        "door",
        "double",
        "doubt",
        "down",
        "draw",
        "dress",
        "drink",
        "drive",
        "drop",
        "during",
        "each",
        "early",
        "east",
        "easy",
        "economy",
        "educate",
        "effect",
        "eight",
        "either",
        "elect",
        "electric",
        "eleven",
        "else",
        "employ",
        "encourage",
        "engine",
        "english",
        "enjoy",
        "enough",
        "enter",
        "environment",
        "equal",
        "especial",
        "europe",
        "even",
        "evening",
        "ever",
        "every",
        "evidence",
        "exact",
        "example",
        "except",
        "excuse",
        "exercise",
        "exist",
        "expect",
        "expense",
        "experience",
        "explain",
        "express",
        "extra",
        "face",
        "fact",
        "fair",
        "fall",
        "family",
        "farm",
        "fast",
        "father",
        "favour",
        "feed",
        "feel",
        "field",
        "fight",
        "figure",
        "file",
        "fill",
        "film",
        "final",
        "finance",
        "find",
        "fine",
        "finish",
        "fire",
        "first",
        "fish",
        "five",
        "flat",
        "floor",
        "follow",
        "food",
        "foot",
        "force",
        "forget",
        "form",
        "fortune",
        "forward",
        "four",
        "france",
        "free",
        "friday",
        "friend",
        "from",
        "front",
        "full",
        "function",
        "fund",
        "further",
        "future",
        "game",
        "garden",
        "general",
        "germany",
        "girl",
        "give",
        "glass",
        "good",
        "goodbye",
        "govern",
        "grand",
        "grant",
        "great",
        "green",
        "ground",
        "group",
        "grow",
        "guess",
        "hair",
        "half",
        "hall",
        "hand",
        "hang",
        "happen",
        "happy",
        "hard",
        "hate",
        "have",
        "head",
        "health",
        "hear",
        "heart",
        "heat",
        "heavy",
        "hell",
        "help",
        "here",
        "high",
        "history",
        "hold",
        "holiday",
        "home",
        "honest",
        "hope",
        "horse",
        "hospital",
        "hour",
        "house",
        "however",
        "hello",
        "hundred",
        "husband",
        "idea",
        "identify",
        "imagine",
        "important",
        "improve",
        "include",
        "income",
        "increase",
        "indeed",
        "individual",
        "industry",
        "inform",
        "inside",
        "instead",
        "insure",
        "interest",
        "into",
        "introduce",
        "invest",
        "involve",
        "issue",
        "item",
        "jesus",
        "join",
        "judge",
        "jump",
        "just",
        "keep",
        "kill",
        "kind",
        "king",
        "kitchen",
        "knock",
        "know",
        "labour",
        "lady",
        "land",
        "language",
        "large",
        "last",
        "late",
        "laugh",
        "lead",
        "learn",
        "leave",
        "left",
        "less",
        "letter",
        "level",
        "life",
        "light",
        "like",
        "likely",
        "limit",
        "line",
        "link",
        "list",
        "listen",
        "little",
        "live",
        "load",
        "local",
        "lock",
        "london",
        "long",
        "look",
        "lord",
        "lose",
        "love",
        "luck",
        "lunch",
        "machine",
        "main",
        "major",
        "make",
        "manage",
        "many",
        "mark",
        "market",
        "marry",
        "match",
        "matter",
        "maybe",
        "mean",
        "meaning",
        "measure",
        "meet",
        "member",
        "mention",
        "middle",
        "might",
        "mile",
        "milk",
        "million",
        "mind",
        "minister",
        "minus",
        "minute",
        "miss",
        "mister",
        "moment",
        "monday",
        "money",
        "month",
        "more",
        "morning",
        "most",
        "mother",
        "motion",
        "move",
        "much",
        "music",
        "must",
        "name",
        "nation",
        "nature",
        "near",
        "necessary",
        "need",
        "never",
        "news",
        "next",
        "nice",
        "night",
        "nine",
        "none",
        "normal",
        "north",
        "note",
        "notice",
        "number",
        "obvious",
        "occasion",
        "offer",
        "office",
        "often",
        "okay",
        "once",
        "only",
        "open",
        "operate",
        "opportunity",
        "oppose",
        "order",
        "organize",
        "original",
        "other",
        "otherwise",
        "ought",
        "over",
        "pack",
        "page",
        "paint",
        "pair",
        "paper",
        "paragraph",
        "pardon",
        "parent",
        "park",
        "part",
        "particular",
        "party",
        "pass",
        "past",
        "pence",
        "pension",
        "people",
        "percent",
        "perfect",
        "perhaps",
        "period",
        "person",
        "photograph",
        "pick",
        "picture",
        "piece",
        "place",
        "plan",
        "play",
        "please",
        "plus",
        "point",
        "police",
        "policy",
        "politic",
        "poor",
        "position",
        "positive",
        "possible",
        "post",
        "pound",
        "power",
        "practise",
        "prepare",
        "present",
        "press",
        "pressure",
        "presume",
        "pretty",
        "previous",
        "price",
        "print",
        "private",
        "probable",
        "problem",
        "proceed",
        "process",
        "produce",
        "product",
        "programme",
        "project",
        "proper",
        "propose",
        "protect",
        "provide",
        "public",
        "pull",
        "purpose",
        "push",
        "quality",
        "quarter",
        "question",
        "quick",
        "quid",
        "quiet",
        "quite",
        "radio",
        "rail",
        "raise",
        "range",
        "rate",
        "rather",
        "read",
        "ready",
        "real",
        "realise",
        "really",
        "reason",
        "receive",
        "recent",
        "reckon",
        "recognize",
        "recommend",
        "record",
        "reduce",
        "refer",
        "regard",
        "region",
        "relation",
        "remember",
        "report",
        "represent",
        "require",
        "research",
        "resource",
        "respect",
        "responsible",
        "rest",
        "result",
        "return",
        "right",
        "ring",
        "rise",
        "road",
        "role",
        "roll",
        "room",
        "round",
        "rule",
        "safe",
        "sale",
        "same",
        "saturday",
        "save",
        "scheme",
        "school",
        "science",
        "score",
        "scotland",
        "seat",
        "second",
        "secretary",
        "section",
        "secure",
        "seem",
        "self",
        "sell",
        "send",
        "sense",
        "separate",
        "serious",
        "serve",
        "service",
        "settle",
        "seven",
        "shall",
        "share",
        "sheet",
        "shoe",
        "shoot",
        "shop",
        "short",
        "should",
        "show",
        "shut",
        "sick",
        "side",
        "sign",
        "similar",
        "simple",
        "since",
        "sing",
        "single",
        "sister",
        "site",
        "situate",
        "size",
        "sleep",
        "slight",
        "slow",
        "small",
        "smoke",
        "social",
        "society",
        "some",
        "soon",
        "sorry",
        "sort",
        "sound",
        "south",
        "space",
        "speak",
        "special",
        "specific",
        "speed",
        "spell",
        "spend",
        "square",
        "staff",
        "stage",
        "stairs",
        "stand",
        "standard",
        "start",
        "state",
        "station",
        "stay",
        "step",
        "stick",
        "still",
        "stop",
        "story",
        "straight",
        "strategy",
        "street",
        "strike",
        "strong",
        "structure",
        "student",
        "study",
        "stuff",
        "stupid",
        "subject",
        "succeed",
        "such",
        "sudden",
        "suggest",
        "suit",
        "summer",
        "sunday",
        "supply",
        "support",
        "suppose",
        "sure",
        "surprise",
        "switch",
        "system",
        "table",
        "take",
        "talk",
        "tape",
        "teach",
        "team",
        "telephone",
        "television",
        "tell",
        "tend",
        "term",
        "terrible",
        "test",
        "than",
        "thank",
        "then",
        "there",
        "therefore",
        "they",
        "thing",
        "think",
        "thirteen",
        "thirty",
        "this",
        "thou",
        "though",
        "thousand",
        "three",
        "through",
        "throw",
        "thursday",
        "time",
        "today",
        "together",
        "tomorrow",
        "tonight",
        "total",
        "touch",
        "toward",
        "town",
        "trade",
        "traffic",
        "train",
        "transport",
        "travel",
        "treat",
        "tree",
        "trouble",
        "true",
        "trust",
        "tuesday",
        "turn",
        "twelve",
        "twenty",
        "type",
        "under",
        "understand",
        "union",
        "unit",
        "unite",
        "university",
        "unless",
        "until",
        "upon",
        "usual",
        "value",
        "various",
        "very",
        "video",
        "view",
        "village",
        "visit",
        "vote",
        "wage",
        "wait",
        "walk",
        "wall",
        "want",
        "warm",
        "wash",
        "waste",
        "watch",
        "water",
        "wear",
        "wednesday",
        "week",
        "weigh",
        "welcome",
        "well",
        "west",
        "what",
        "when",
        "where",
        "whether",
        "which",
        "while",
        "white",
        "whole",
        "wide",
        "wife",
        "will",
        "wind",
        "window",
        "wish",
        "with",
        "within",
        "without",
        "woman",
        "wonder",
        "wood",
        "word",
        "work",
        "world",
        "worry",
        "worse",
        "worth",
        "would",
        "write",
        "wrong",
        "year",
        "yesterday",
        "young"
    ];
    shuffleArray(words);
    currentWord = words[0].split('');
    mountWord();
    mountDigits();
    refillTimeBar();
    timeBarFill.addEventListener("animationend", () => gameOver('loss'));
    document.addEventListener("keyup", handleKeypress);
}

function shuffleArray(arr) {
    var i = arr.length;
    if (i == 0) return arr;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var a = arr[i];
        var b = arr[j];
        arr[i] = b;
        arr[j] = a;
    }
    return arr;
}

function initAudio() {
    sounds = {
        music: new Audio('sound/music.mp3'),
        musicAlt: new Audio('sound/music-alt.mp3'),
        type: new Audio('sound/type.wav'),
        digit: new Audio('sound/digit.wav'),
        timeRefill: new Audio('sound/time-refill.wav'),
        score: new Audio('sound/score.wav'),
        letterMiss: new Audio('sound/letter-miss.wav'),
        digitMiss: new Audio('sound/digit-miss.wav'),
        gameLose: new Audio('sound/game-lose.wav'),
        gameWin: new Audio('sound/game-win.wav')
    };
    sounds.music.loop = true;
    sounds.musicAlt.loop = true;
}

function playSound(soundName, volume = 1) {
    const sound = sounds[soundName];
    sound.pause();
    sound.currentTime = 0;
    sound.volume = volume;
    sound.play();
};

function stopSound(soundName) {
    const sound = sounds[soundName];
    sound.pause();
    sound.currentTime = 0;
}

function mountWord() {
    let splitWord = currentWord.map(c => `<span class="char">${c}</span>`);
    splitWord = splitWord.join('');
    wordSlot.innerHTML = splitWord;
}

function mountDigits() {
    const randomNum = Math.floor(Math.random() * (999 - 100) + 100);
    currentDigits = randomNum.toString().split('');
    const digits = randomNum.toString().split('').map(n => `<span class="digit">${n}</span>`).join('');
    digitsSlot.innerHTML = digits;
}

function handleKeypress(e) {
    if (/^[a-zA-Z0-9]{1}$/.test(e.key)) {
        checkMatch(e.key);
    }
}

function checkMatch(pressedKey) {
    if (isNaN(Number(pressedKey))) {
        if (pressedKey === currentWord[0]) {
            currentWord.shift();
            wordSlot.children[wordSlot.children.length - currentWord.length - 1].classList.add('matched');
            playSound('type', 0.33);
        } else {
            applyPenalty();
            playSound('letterMiss', 0.5);
        }
    
        if (!currentWord.length) {
            modifyScore(1);
            words.shift();
    
            setTimeout(() => {
                if (words.length) {
                    currentWord = words[0].split('');
                    mountWord();
                    playSound('score', 0.3);
                    
                    switch (score) {
                        case 10:
                            scoreboard.dataset.shenanigen = 'true';
                            playSound('music', 0.10);
                            break;
                        case 20:
                            digitsSlot.dataset.shenanigen = 'true';
                            break;
                        case 30:
                            wordSlot.dataset.shenanigen = 'true';
                            stopSound('music');
                            playSound('musicAlt', 0.10);
                            break;
                        case 40:
                            mainContainer.dataset.shenanigen = 'true';
                            carlton.classList.add('dance');
                            break;
                        case 50:
                            gameOver('win');
                    }
                } else {
                    gameOver('win');
                }
            }, 100);
        }
    } else {
        if (pressedKey === currentDigits[0]) {
            currentDigits.shift();
            digitsSlot.children[digitsSlot.children.length - currentDigits.length - 1].classList.add('matched');
            playSound('digit', 0.15);
        } else {
            playSound('digitMiss', 0.15);
        }

        if (!currentDigits.length) {
            refillTimeBar();
            setTimeout(() => {
                mountDigits();
                playSound('timeRefill', 0.1);
            }, 100);
        }
    }
}

function refillTimeBar() {
    timeBarFill.style.setProperty('animation', '');
    void timeBarFill.offsetWidth; // Forces a DOM reflow, needed for animation restart.
    timeBarFill.style.setProperty('animation', `drain linear 1 forwards`);
    timeBarFill.style.setProperty('animation-duration', `${timeLimit - mistypes}s`);
}

function modifyScore(mod) {
    const modifiedScore = score + mod;
    score = modifiedScore;
    scoreboard.innerHTML = `SCORE ${modifiedScore.toString().padStart(2, '0')}`;
}

function addTimeBarBarriers() {
    const currentLeftBarrierWidth = Number(timeBarBarriers.left.style.getPropertyValue('width').replace('%',''));
    const currentRightBarrierWidth = Number(timeBarBarriers.right.style.getPropertyValue('width').replace('%',''));
    timeBarBarriers.left.style.setProperty('width', `${currentLeftBarrierWidth + timeBarBarrierWidth}%`);
    timeBarBarriers.right.style.setProperty('width', `${currentRightBarrierWidth + timeBarBarrierWidth}%`);
    if (Number(timeBarBarriers.left.style.getPropertyValue('width').replace('%','')) === 50) {
        gameOver('loss');
    }
}

function applyPenalty() {
    addTimeBarBarriers();
    mistypes++;
    timeBarFill.style.setProperty('animation-duration', `${timeLimit - mistypes}s`);
}

function resetPenalties() {
    mistypes = 0;
    timeBarBarriers.left.style.removeProperty('width');
    timeBarBarriers.right.style.removeProperty('width');
}

function gameOver(result) {
    document.removeEventListener('keyup', handleKeypress);
    timeBarFill.style.setProperty('animation', '');
    stopSound('music');
    stopSound('musicAlt');
    scoreboard.removeAttribute('data-shenanigen');
    digitsSlot.removeAttribute('data-shenanigen');
    wordSlot.removeAttribute('data-shenanigen');
    mainContainer.removeAttribute('data-shenanigen');
    carlton.classList.remove('dance');
    
    if (result === 'win') {
        wordSlot.innerHTML =
        `<div class="end-message">
            YOU WIN
        </div>`;
        playSound('gameWin', 0.15);
    } else {
        wordSlot.innerHTML =
        `<div class="end-message">
            YOU LOSE<br>
            <div class="char retry">
            r
            </div>etry?
        </div>`;
        playSound('gameLose', 0.5);
        document.addEventListener('keyup', handleReset);
    }
}

function resetGame() {
    modifyScore(-score);
    resetPenalties();
    initGame();
}

function handleReset(e) {
    if (e.key === 'r') {
        document.removeEventListener('keyup', handleReset);
        resetGame();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initAudio();
    startButton.addEventListener('click', () => {
        document.querySelector('.start-screen').remove();
        initGame();
    });
});
/* RESA: In Town (tema 18) – se 01-weather.js för förklaring */
{
const s = ORDRESAN.svg;
ORDRESAN.add({
  id: "town",
  titel: "In Town",
  kod: "TRAIN",
  ord: {
    shop: { sv: "affär",          bild: s('<path d="M10 24h44l-4-12H14Z"/><path d="M14 30v24h36V30"/><rect x="20" y="38" width="10" height="16"/><rect x="36" y="36" width="10" height="9"/><path d="M10 24c0 4 3 6 7 6s7-2 7-6c0 4 4 6 8 6s8-2 8-6c0 4 3 6 7 6s7-2 7-6"/>') },
    park: { sv: "park",           bild: s('<circle cx="20" cy="20" r="12"/><path d="M20 32v24"/><path d="M34 42h22M36 42v14M54 42v14M34 34h22v8"/><path d="M6 56h52"/>') },
    bus:  { sv: "buss",           bild: s('<rect x="8" y="12" width="48" height="36" rx="6"/><path d="M8 32h48M14 18h16v10H14ZM34 18h16v10H34Z"/><circle cx="19" cy="50" r="5"/><circle cx="45" cy="50" r="5"/>') },
    buy:  { sv: "köpa",           bild: s('<path d="M6 10h8l6 30h30l6-20H17"/><circle cx="24" cy="50" r="4"/><circle cx="46" cy="50" r="4"/>') },
    go:   { sv: "gå, åka",        bild: s('<path d="M8 32h44M38 18l14 14-14 14"/>') },
    wait: { sv: "vänta",          bild: s('<path d="M18 8h28M18 56h28M22 8v6c0 8 20 10 20 18s-20 10-20 18v6M42 8v6c0 8-20 10-20 18s20 10 20 18v6"/>') },
    fast: { sv: "snabb",          bild: s('<path d="M26 32h30M44 20l12 12-12 12M6 22h12M4 32h14M6 42h12"/>') },
    slow: { sv: "långsam",        bild: s('<circle cx="34" cy="34" r="14"/><path d="M34 34a5 5 0 1 1 5-5"/><path d="M8 50h44c4 0 6-3 6-6M14 50c-4 0-6-4-4-8l4-6M12 36l-3-8M16 36l2-8"/>') },
    nice: { sv: "fin, trevlig",   bild: s('<path d="M32 6l7.8 16.6 18.2 2-13.6 12.4 3.8 18L32 46l-16.2 9 3.8-18L6 24.6l18.2-2Z"/>') }
  },
  stopp: [
    { title: "Lyssna", sv: "Hör ordet och välj bild", tasks: [
      { type: "listen", word: "bus",  opts: ["bus", "shop", "park"] },
      { type: "listen", word: "wait", opts: ["wait", "go", "buy"] },
      { type: "listen", word: "slow", opts: ["slow", "fast", "nice"] },
      { type: "listen", word: "shop", opts: ["shop", "park", "bus"] },
      { type: "listen", word: "buy",  opts: ["buy", "wait", "go"] } ] },
    { title: "Titta och välj", sv: "Vilket ord passar bilden?", tasks: [
      { type: "pick", word: "park", opts: ["park", "shop", "bus"] },
      { type: "pick", word: "fast", opts: ["fast", "slow", "nice"] },
      { type: "pick", word: "go",   opts: ["go", "wait", "buy"] },
      { type: "pick", word: "nice", opts: ["nice", "slow", "fast"] },
      { type: "pick", word: "bus",  opts: ["bus", "park", "shop"] } ] },
    { title: "Bygg ordet", sv: "Sätt bokstäverna i rätt ordning", tasks: [
      { type: "letters", word: "bus" },
      { type: "letters", word: "shop" },
      { type: "letters", word: "park" },
      { type: "letters", word: "fast" },
      { type: "letters", word: "wait" } ] },
    { title: "Bygg meningen", sv: "Från svenska till engelska", tasks: [
      { type: "sentence", sv: "Jag åker buss.",        answer: "I go by bus.",       extra: ["shop"], pic: "bus" },
      { type: "sentence", sv: "Jag går till affären.", answer: "I go to the shop.",  extra: ["park"], pic: "shop" },
      { type: "sentence", sv: "Bussen är långsam.",    answer: "The bus is slow.",   extra: ["fast"], pic: "slow" },
      { type: "sentence", sv: "Parken är fin.",        answer: "The park is nice.",  extra: ["bus"],  pic: "park" } ] },
    { title: "Svara på frågan", sv: "Svara och skriv själv", tasks: [
      { type: "answer", q: "Is the bus fast?",  answer: "No, it is slow.",   extra: ["fast"],   pic: "slow" },
      { type: "answer", q: "Where do you go?",  answer: "I go to the park.", extra: ["shop"],   pic: "park" },
      { type: "answer", q: "Is the park nice?", answer: "Yes, it is.",       extra: ["isn't."], pic: "nice" },
      { type: "write", word: "bus" },
      { type: "write", word: "park" } ] }
  ]
});
}

/* RESA: Weather (tema 14)
   id    = kort namn utan mellanslag (används i resor.js och elever.js)
   titel = det eleven ser
   kod   = kodordet. Bokstäverna delas ut jämnt över stoppen.
   ord   = orden: "engelska": { sv: "svenska", bild: ORDRESAN.svg('...') }
           bild kan tas bort – då visas det svenska ordet i stället för en bild. */
{
const s = ORDRESAN.svg;
ORDRESAN.add({
  id: "weather",
  titel: "Weather",
  kod: "CLOUD",
  ord: {
    sun:   { sv: "sol",     bild: s('<circle cx="32" cy="32" r="11"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M13.6 50.4l5.7-5.7M44.7 19.3l5.7-5.7"/>') },
    rain:  { sv: "regn",    bild: s('<path d="M18 36a10 10 0 0 1 1-20 13 13 0 0 1 25 2 9 9 0 0 1 2 18Z"/><path d="M22 44l-3 8M32 44l-3 8M42 44l-3 8"/>') },
    snow:  { sv: "snö",     bild: s('<path d="M32 6v52M9.5 19l45 26M9.5 45l45-26M26 10l6 6 6-6M26 54l6-6 6 6"/>') },
    shine: { sv: "skina",   bild: s('<circle cx="20" cy="20" r="9"/><path d="M30 30l22 22M34 22l22 8M22 34l8 22"/><path d="M50 10v8M46 14h8"/>') },
    melt:  { sv: "smälta",  bild: s('<path d="M18 12h28v18c0 4-3 6-5 6s-3 3-3 6-2 4-4 4-4-2-4-5-2-5-4-5-8-2-8-6Z"/><ellipse cx="32" cy="55" rx="20" ry="4"/>') },
    build: { sv: "bygga",   bild: s('<rect x="8" y="40" width="22" height="16" rx="2"/><rect x="34" y="40" width="22" height="16" rx="2"/><rect x="21" y="20" width="22" height="16" rx="2"/><path d="M32 4v10M27 9l5 5 5-5"/>') },
    sunny: { sv: "soligt",  bild: s('<circle cx="32" cy="26" r="10"/><path d="M32 6v4M14 26h4M46 26h4M19 13l3 3M45 13l-3 3"/><path d="M4 52c10-10 18-10 28 0s18 10 28 0"/>') },
    rainy: { sv: "regnigt", bild: s('<path d="M8 32a24 22 0 0 1 48 0Z"/><path d="M32 32v18a5 5 0 0 1-10 0"/><path d="M14 8l-2 6M30 4l-2 6M48 8l-2 6"/>') },
    cold:  { sv: "kallt",   bild: s('<path d="M22 10a5 5 0 0 1 10 0v28a10 10 0 1 1-10 0Z"/><circle cx="27" cy="46" r="4" fill="currentColor"/><path d="M48 10v18M40 15l16 8M40 23l16-8"/>') }
  },
  stopp: [
    { title: "Lyssna", sv: "Hör ordet och välj bild", tasks: [
      { type: "listen", word: "sun",  opts: ["sun", "rain", "snow"] },
      { type: "listen", word: "rain", opts: ["rain", "cold", "build"] },
      { type: "listen", word: "snow", opts: ["snow", "shine", "melt"] },
      { type: "listen", word: "melt", opts: ["melt", "build", "sun"] },
      { type: "listen", word: "cold", opts: ["cold", "rainy", "sunny"] } ] },
    { title: "Titta och välj", sv: "Vilket ord passar bilden?", tasks: [
      { type: "pick", word: "rainy", opts: ["rainy", "sunny", "cold"] },
      { type: "pick", word: "build", opts: ["build", "melt", "shine"] },
      { type: "pick", word: "shine", opts: ["shine", "snow", "rain"] },
      { type: "pick", word: "sunny", opts: ["sunny", "rainy", "snow"] },
      { type: "pick", word: "snow",  opts: ["snow", "sun", "cold"] } ] },
    { title: "Bygg ordet", sv: "Sätt bokstäverna i rätt ordning", tasks: [
      { type: "letters", word: "sun" },
      { type: "letters", word: "snow" },
      { type: "letters", word: "rain" },
      { type: "letters", word: "cold" },
      { type: "letters", word: "melt" } ] },
    { title: "Bygg meningen", sv: "Från svenska till engelska", tasks: [
      { type: "sentence", sv: "Det är soligt.", answer: "It is sunny.", extra: ["rainy"], pic: "sunny" },
      { type: "sentence", sv: "Det är kallt.",  answer: "It is cold.",  extra: ["sunny"], pic: "cold" },
      { type: "sentence", sv: "Solen skiner.",  answer: "The sun shines.", extra: ["snow"], pic: "shine" },
      { type: "sentence", sv: "Snön smälter.",  answer: "The snow melts.", extra: ["sun"], pic: "melt" } ] },
    { title: "Svara på frågan", sv: "Svara och skriv själv", tasks: [
      { type: "answer", q: "Is it rainy?", answer: "Yes, it is.",   extra: ["isn't."], pic: "rainy" },
      { type: "answer", q: "Is it cold?",  answer: "No, it isn't.", extra: ["is."],    pic: "sunny" },
      { type: "answer", q: "Is it sunny?", answer: "Yes, it is.",   extra: ["No,"],    pic: "sunny" },
      { type: "write", word: "snow" },
      { type: "write", word: "rain" } ] }
  ]
});
}

/* RESA: My Family (tema 16) – se 01-weather.js för förklaring */
{
const s = ORDRESAN.svg;
const face = m => s('<circle cx="32" cy="32" r="24"/>' + m);
ORDRESAN.add({
  id: "family",
  titel: "My Family",
  kod: "HEART",
  ord: {
    mum:    { sv: "mamma",   bild: s('<circle cx="32" cy="18" r="9"/><path d="M22 24c-3-12 3-18 10-18s13 6 10 18"/><path d="M23 58l5-26h8l5 26Z"/>') },
    dad:    { sv: "pappa",   bild: s('<circle cx="32" cy="16" r="9"/><path d="M23 13c2-7 16-7 18 0"/><path d="M20 58V36a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v22"/><path d="M28 20c2 2 6 2 8 0"/>') },
    sister: { sv: "syster",  bild: s('<circle cx="30" cy="28" r="7"/><path d="M37 26c5 0 8 4 7 9"/><path d="M24 58l3-20h6l3 20Z"/><path d="M34 20l5-4v8Z"/>') },
    love:   { sv: "älska",   bild: s('<path d="M32 54C14 40 8 32 8 23a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 9-6 17-24 31Z"/>') },
    help:   { sv: "hjälpa",  bild: s('<circle cx="20" cy="14" r="6"/><path d="M20 20v20M20 40l-6 16M20 40l6 16M20 26l14 10"/><circle cx="44" cy="30" r="5"/><path d="M44 35v12M44 47l-4 10M44 47l4 10M34 36l10 2"/>') },
    hug:    { sv: "krama",   bild: s('<circle cx="24" cy="16" r="7"/><circle cx="40" cy="16" r="7"/><path d="M14 58V34a10 10 0 0 1 20 0M30 34a10 10 0 0 1 20 0v24"/><path d="M14 40c8 8 28 8 36 0"/>') },
    happy:  { sv: "glad",    bild: face('<circle cx="23" cy="27" r="2" fill="currentColor"/><circle cx="41" cy="27" r="2" fill="currentColor"/><path d="M21 38c6 8 16 8 22 0"/>') },
    sad:    { sv: "ledsen",  bild: face('<circle cx="23" cy="27" r="2" fill="currentColor"/><circle cx="41" cy="27" r="2" fill="currentColor"/><path d="M22 45c6-7 14-7 20 0M43 32c2 4 2 6 0 7"/>') },
    tired:  { sv: "trött",   bild: face('<path d="M18 28h9M37 28h9M26 42h12"/><path d="M48 6h8l-8 8h8" stroke-width="2.5"/>') }
  },
  stopp: [
    { title: "Lyssna", sv: "Hör ordet och välj bild", tasks: [
      { type: "listen", word: "mum",  opts: ["mum", "dad", "sister"] },
      { type: "listen", word: "love", opts: ["love", "hug", "help"] },
      { type: "listen", word: "sad",  opts: ["sad", "happy", "tired"] },
      { type: "listen", word: "dad",  opts: ["dad", "sister", "mum"] },
      { type: "listen", word: "hug",  opts: ["hug", "love", "happy"] } ] },
    { title: "Titta och välj", sv: "Vilket ord passar bilden?", tasks: [
      { type: "pick", word: "sister", opts: ["sister", "mum", "dad"] },
      { type: "pick", word: "help",   opts: ["help", "hug", "love"] },
      { type: "pick", word: "happy",  opts: ["happy", "sad", "tired"] },
      { type: "pick", word: "tired",  opts: ["tired", "happy", "sad"] },
      { type: "pick", word: "mum",    opts: ["mum", "dad", "sister"] } ] },
    { title: "Bygg ordet", sv: "Sätt bokstäverna i rätt ordning", tasks: [
      { type: "letters", word: "mum" },
      { type: "letters", word: "dad" },
      { type: "letters", word: "hug" },
      { type: "letters", word: "love" },
      { type: "letters", word: "sad" } ] },
    { title: "Bygg meningen", sv: "Från svenska till engelska", tasks: [
      { type: "sentence", sv: "Jag är glad.",        answer: "I am happy.",        extra: ["sad"], pic: "happy" },
      { type: "sentence", sv: "Mamma hjälper mig.",  answer: "Mum helps me.",      extra: ["dad"], pic: "help" },
      { type: "sentence", sv: "Jag älskar pappa.",   answer: "I love dad.",        extra: ["hug"], pic: "love" },
      { type: "sentence", sv: "Min syster är trött.", answer: "My sister is tired.", extra: ["am"], pic: "tired" } ] },
    { title: "Svara på frågan", sv: "Svara och skriv själv", tasks: [
      { type: "answer", q: "Are you happy?", answer: "Yes, I am.",    extra: ["not"],  pic: "happy" },
      { type: "answer", q: "Are you sad?",   answer: "No, I am not.", extra: ["Yes,"], pic: "happy" },
      { type: "answer", q: "Who is this?",   answer: "It is dad.",    extra: ["mum"],  pic: "dad" },
      { type: "write", word: "mum" },
      { type: "write", word: "love" } ] }
  ]
});
}

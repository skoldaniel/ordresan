/* MALL FÖR EN NY RESA
   1. Kopiera den här filen och döp om den, t.ex. 04-clothes.js
   2. Fyll i id, titel, kod, ord och stopp.
   3. Lägg till filnamnet i resor.js.
   Den här filen används inte förrän den står i resor.js.

   Uppgiftstyper:
     listen   – hör ordet, välj bild           { type:"listen",  word:"hat", opts:["hat","scarf","socks"] }
     pick     – se bilden, välj ord            { type:"pick",    word:"hat", opts:["hat","scarf","socks"] }
     letters  – bygg ordet av bokstäver        { type:"letters", word:"hat" }
     sentence – bygg meningen av ordbrickor    { type:"sentence", sv:"Jag har en mössa.", answer:"I have a hat.", extra:["scarf"], pic:"hat" }
     answer   – svara på en fråga med brickor  { type:"answer",  q:"Is it a hat?", answer:"Yes, it is.", extra:["isn't."], pic:"hat" }
     write    – skriv ordet själv              { type:"write",   word:"hat" }
   Alla ord i word, opts och pic måste finnas i ord.
   Utan bild visas det svenska ordet i stället – det fungerar också. */
{
const s = ORDRESAN.svg;
ORDRESAN.add({
  id: "clothes",
  titel: "Clothes",
  kod: "SCARF",
  ord: {
    hat:   { sv: "mössa" },
    scarf: { sv: "halsduk" },
    socks: { sv: "strumpor" }
  },
  stopp: [
    { title: "Lyssna", sv: "Hör ordet och välj", tasks: [
      { type: "listen", word: "hat", opts: ["hat", "scarf", "socks"] } ] },
    { title: "Titta och välj", sv: "Vilket ord passar?", tasks: [
      { type: "pick", word: "scarf", opts: ["hat", "scarf", "socks"] } ] },
    { title: "Bygg ordet", sv: "Sätt bokstäverna i rätt ordning", tasks: [
      { type: "letters", word: "hat" } ] },
    { title: "Bygg meningen", sv: "Från svenska till engelska", tasks: [
      { type: "sentence", sv: "Jag har en mössa.", answer: "I have a hat.", extra: ["scarf"], pic: "hat" } ] },
    { title: "Skriv själv", sv: "Skriv ordet", tasks: [
      { type: "write", word: "socks" } ] }
  ]
});
}

# Ordresan

Ett ordspel i stil med Duolingo för elever som behöver tydlighet och repetition. Eleven går en stig med stopp. Varje klart stopp ger en bokstav, och till sist låser eleven upp ett kodord som visas för läraren.

## Filerna

| Fil | Vad den gör | Ändras |
|---|---|---|
| `index.html` | Själva spelet | Sällan |
| `resor.js` | Listan över resor, i ordning | När du lägger till en resa |
| `resor/01-weather.js` … | En resa: ord, bilder, uppgifter, kodord | När du gör nya övningar |
| `resor/MALL.js` | Mall att kopiera för en ny resa | Aldrig |
| `elever.js` | Elever och vilka resor de har | När du får en ny elev |

## Lägga upp på GitHub (en gång)

1. Skapa ett konto på github.com.
2. Klicka på **New repository**, döp det till `ordresan` och välj **Public**. Klicka på **Create repository**.
3. Klicka på **uploading an existing file**. Dra in **alla filer och mappen `resor`** på en gång och klicka på **Commit changes**.
4. Gå till **Settings → Pages**. Under *Branch* väljer du `main` och `/ (root)` och klickar på **Save**.
5. Efter några minuter finns spelet på `https://DITTNAMN.github.io/ordresan/`.

## Lägga till en ny resa

1. Kopiera `resor/MALL.js`, döp om kopian (t.ex. `04-clothes.js`) och fyll i den. Du kan också be Claude göra filen.
2. Lägg till en rad i `resor.js`: `"resor/04-clothes.js"`
3. Lägg till resans `id` hos eleverna i `elever.js` (om de har en egen lista).
4. Ladda upp de ändrade filerna på GitHub (**Add file → Upload files**, samma namn ersätter de gamla).

Elevens länk är densamma, och det eleven redan har klarat ligger kvar.

## Elever

- Personlig länk: `https://DITTNAMN.github.io/ordresan/#e1` (länkordet ska skrivas med små bokstäver i `elever.js`).
- Utan `#…` väljer eleven sitt namn på startsidan.
- Framstegen sparas i webbläsaren på den dator där eleven spelar. Byter eleven dator: öppna **För läraren** längst ner, skriv av **framstegskoden** och läs in den på den nya datorn.
- Sidan är offentlig. Skriv aldrig elevernas riktiga namn.

## Om något inte fungerar

Spelet visar på skärmen vilken fil som har fel. Vanligast är ett glömt kommatecken eller citattecken. Under **För läraren** visas också ord som används i uppgifter men saknas i ordlistan.

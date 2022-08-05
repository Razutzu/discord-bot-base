## Introducere

Discord Bot Base este un cod initial pentru boti de Discord. Am facut acest repository mai mult pentru mine, dar am zis sa-l fac public in caz ca cineva ar avea nevoie.

## Module

Pentru a putea folosi codul, ai nevoie de modulele necesare. Trebuie sa deschizi un cmd/terminal in folder-ul unde ai descarcat bot-ul si sa folosesti comanda:

```
npm install
```

## Functionalitatea bot-ului

Pentru inceput, trebuie sa te duci in fisierul `.env` si sa schimbi variabilele de acolo:

```env
TOKEN=TOKENUL_BOTULUI
DB_URL=URL_DE_CONECTARE_LA_MONGODB
```

Acum, trebuie sa te duci in fisierul `index.js` din folder-ul `src` si sa inlocuiesti `/* put your intents here */` (linia 7) cu intents-urile de care ai nevoie.

## Comenzi

Am facut un fisier numit `commands_handler.js`, care se afla in `src/handler`, care actualizeaza comenzile daca `client.update_commands` (linia 12) este `true`.

Pentru a-ti pune comenzile, trebuie sa inlocuiesti `/* put your commands here */` (linia 7) cu comenzile tale, folosind de [SlashCommandBuilder](https://discordjs.guide/interactions/slash-commands.html#options).

## Alte informatii

- Acesta nu este un bot complet, este doar un cod intitial pe care l-ai putea folosi ca sa nu mai pierzi timp.
- Dupa ce ai urmat pasii de mai sus, esti gata sa incepi sa-ti faci bot-ul.

Sper ca am scris tot ce trebuia de scris. Bafta!

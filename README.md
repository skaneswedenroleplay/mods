# ER:LC Adminpanel – Skåne Sweden Roleplay

Detta är frontend-grunden för en adminpanel med Discord-inloggning och knappar för ban/unban.

## Viktigt
GitHub Pages ska inte innehålla Discord Client Secret eller ER:LC Server Key. De ska ligga på en backend.

## GitHub
Ladda upp alla fyra filer till ditt repository:
- index.html
- style.css
- config.js
- app.js

Ändra sedan `backendUrl` i config.js när backend finns.

## Nästa steg
Backend ska hantera:
1. Discord OAuth2-inloggning.
2. Kontroll av Discord-ID och rätt serverroll.
3. ER:LC API-anrop för ban/unban/banlista.
4. Session/cookie och behörighetskontroll.

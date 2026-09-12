pichle episode mein database connect kiya। Schema banaya। Data permanently save hona shuru hua।"

"Ab woh cheez banayenge jo har real app mein hoti है — REST API। Notes banao, dekho, update karo, delete karo — sab database ke saath।"

"Aur Postman se live test karenge — data Atlas pe jaata hua dekhenge। Chalte hain

<!-- CONCEPT 1 — REST API KYA HAI -->

API — Application Programming Interface। Bada naam — simple concept।"

"Socho Zomato। T

Tumhara App          API              Database
(Frontend)     →   (Waiter)    →    (Kitchen)
               ←              ←
           Request          Response

Frontend seedha database mein nahi jaata। API ke through jaata है। API decide karta है — kya milega, kya nahi।

REST — Representational State Transfer। Ek set of rules hai — APIs kaise banate hain।"

"REST follow karo — tumhari API — duniya ka koi bhi app use kar sakta है। Standard hai।

REST ke Rules:

1. URL mein resource ka naam ho
   ✅ /api/notes
   ❌ /api/getNotes
   ❌ /api/fetchAllNotes

2. HTTP method se action pata chale
   GET    → Read
   POST   → Create
   PUT    → Update
   DELETE → Delete

3. Response mein status code ho
   200 → OK
   201 → Created
   400 → Bad Request
   404 → Not Found
   500 → Server Error

4. JSON format mein data

<!-- Notes API ka complete plan -->

Kya banayenge:

GET    /api/notes        → Sab notes laao
GET    /api/notes/:id    → Ek note laao
POST   /api/notes        → Nayi note banao
PUT    /api/notes/:id    → Note update karo
DELETE /api/notes/:id    → Note delete karo


<!-- CONCEPT 2 — FOLDER STRUCTURE READY KARO -->

src/
├── routes/
│   └── note.routes.js     ← Route definitions
├── controllers/
│   └── note.controller.js ← Business logic
└── models/
    └── note.model.js      ← Already bana hua ✅


<!-- CONCEPT 3 — CONTROLLER BANANA -->

Controller — actual kaam karta है। Request aayi — database se data lo — response bhejo। Yahan logic hoti है।"
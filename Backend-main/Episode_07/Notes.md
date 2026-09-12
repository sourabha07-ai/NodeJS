Bhai — pichli episode mein Notes App banayi। Koi bhi notes add kar sakta tha, delete kar sakta tha।"
"Ab socho — yeh Instagram hota। Koi bhi tumhari photos delete kar deta। Koi bhi tumhare messages padh leta

Real apps mein yeh nahi hota। Kyunki Authentication hoti है। Login karo — tab apna data dekho। Doosre ka data — bilkul nahi।"
"Aaj yeh banayenge — Register, Login, aur Protected Routes। Chalte hain।

<!-- CONCEPT 1 — AUTHENTICATION KYA HAI  -->

Socho tumhara college। Gate pe security guard है। Pehle ID card dikhao — tab andar jaane do

Bina Authentication:
User → App → Sab kuch nhi  milta है

Authentication ke saath:
User → Login karo → Token milta है
     → Token ke saath request → Data milta है
     → Token nahi → 401 Unauthorized


<!-- Authentication vs Authorization -->

Yeh do alag cheezein hain — bahut log confuse hote hain

Authentication — TUM KON HO?
"Kya tumhara account hai?"
Login karo — verify karo

Authorization — TUMHARA PERMISSION KYA HAI?
"Kya tum yeh kar sakte ho?"
Admin → sab kuch
User  → sirf apna data


Authentication — pehchaan। Authorization — permission। Dono alag hain

<!-- Session vs Token -->

Pehle samjho — do tarike hain authentication ke 

SESSION BASED:
User login kiya
→ Server session banata है
→ Session ID browser mein save
→ Har request mein session ID jaati है
→ Server check karta है apne paas
→ Problem — server pe load badh jaata है

TOKEN BASED (JWT):
User login kiya
→ Server token banata है
→ Token user ke paas
→ Har request mein token jaata है
→ Server token verify karta है
→ Server pe kuch store nahi
→ Fast aur scalable

<!-- CONCEPT 2 — JWT KYA HAI -->

JWT — ek token है। Teeno parts hote hain — dot se alag

eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMifQ.abc123

Header          Payload         Signature
────────        ───────         ─────────
Algorithm       User data       Verify karta है
aur type        store hota है   ki token genuine है

Header — kaunsa algorithm use hua। Payload — user ki information — id, email। Signature — verify karna ki token genuine है ya fake

<!-- JWT kaam kaise karta hai  -->

Step 1: User login karta है
        email + password bhejta है

Step 2: Server verify karta है
        Password sahi है?

Step 3: Server JWT banata है
        User ki id andar daalta है
        Secret key se sign karta है

Step 4: Token user ko deta है

Step 5: User har request mein
        token bhejta है

Step 6: Server token verify karta है
        Valid है? — Data do
        Invalid है? — 401 bhejo


Jaise college ID card। College ne banaya — tumhara naam andar — college ki seal। Har jagah dikhao — valid है

<!-- CONCEPT 3 — BCRYPT — PASSWORD HASHING -->

Bhai — ek bahut important baat। Password KABHI directly database mein mat store karo।"

"Socho — database hack ho gaya। Sab passwords plaintext mein hain। Attacker — sab accounts access kar sakta है।"


❌ GALAT — Direct store karna:
Database mein:
{ email: "rahul@gmail.com", password: "mypassword123" }

Hack hua → attacker ko password pata

✅ SAHI — Hash store karna:
Database mein:
{ email: "rahul@gmail.com", 
  password: "$2b$10$abc...xyz" }

Hack hua → hash milega — 
password pata nahi chalega

<!-- Hashing kya hoti hai -->

Hash — ek one way function है। Password daalo — hash nikalta है। Hash se password wapas nahi nikal sakte।"
<!-- password123----> hash honey k baad --> asdf!@#$1234!@#$ASFD -->
"Jaise coffee banana। Coffee beans daalo — coffee nikli। Coffee se beans wapas nahi nikal sakte।"


"mypassword123" → bcrypt → "$2b$10$abc...xyz"

Verify karte waqt:
User ne "mypassword123" diya
→ bcrypt compare karta है
→ Hash se match karta है
→ Sahi है — login allow


<!-- CONCEPT 6 — AUTH MIDDLEWARE -->

Har protected route pe — pehle middleware chalega। Token check karega — valid है? User dhundhega — req.user mein daalega। Tab controller chalega

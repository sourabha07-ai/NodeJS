pichle episode mein humne ghar banaya। Folder structure set kiya। Har kamra ready hai।"
"Ab kya?"

Ghar banaya — but shutter band hai। Koi andar nahi aa sakta। Koi kuch nahi kar sakta।"

"Aaj shutter kholenge। Server start karenge। Pehli baar — koi request aayegi — aur humara server respond karega।"
"Chalte hain।"

CONCEPT 1 — EXPRESS KYA HAI

Bhai — pichle episode mein Node.js install kiya। Toh Express kyun chahiye? Dono alag hain kya?

Node.js se server banana:

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello World')
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('About Page')
    } else {
        res.writeHead(404)
        res.end('Not Found')
    }
})

server.listen(3000)


Express se same kaam:

import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(3000)


<!-- Express with example -->

Node.js — cycle hai। A point se B point tak ja sakte ho। Kaam ho jaata hai।"

"Express — car hai। Same A se B। But AC hai, music hai, GPS hai, comfortable seats hain। Zyada fast bhi।"

"Node.js pe sab khud karna padta। Express mein — sab built-in

<!-- CONCEPT 3 — ROUTES -->

Routes banane se pehle — HTTP methods samjho। Chaar main methods hain 

GET    → Data maango
         Browser URL se GET request hoti है

POST   → Naya data bhejo
         Form submit, data create

PUT    → Existing data update karo
         Poora update

DELETE → Data delete karo

Yeh chaar — CRUD operations ke liye use hote hain। Create, Read, Update, Delete

<!-- Multiple Routes  -->

// GET — data laao
app.get('/users', (req, res) => {
    res.json({ 
        users: [
            { id: 1, name: 'Rahul' },
            { id: 2, name: 'Priya' }
        ]
    })
})

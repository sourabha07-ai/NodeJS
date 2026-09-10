import http from "node:http";

const PORT = 3000;
const server = http.createServer((req, res) => {
        // console.log(req.method);
        // console.log(req.url);
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("Hello World");
        console.log(req.headers);
});

server.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}`);
})
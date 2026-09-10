import http from "node:http";

const server = http.createServer((req, res) => {
        if (req.method === "GET" && req.url === "/") {
                res.end("Home");
                return;
        }
        if (req.method === "GET" && req.url === "/about") {
                res.end('About');
                return;
        }

        if (req.method === "GET" && req.url === "/user") {
                const user = {
                        id: 24,
                        name: "Sourabha",
                        city: "Bhubaneswar"
                };
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(user));
                // res.end("User");
                return;
        }

        req.statusCode = 400;
        res.end("Page not Found...");
});

server.listen(3000, () => {
        console.log("Server is Running...");
})
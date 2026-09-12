const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

        // Open the HTML page
        if (req.method === "GET" && req.url === "/") {

                fs.readFile("index.html", (err, data) => {

                        if (err) {
                                res.writeHead(500);
                                res.end("Error loading page");
                                return;
                        }

                        res.writeHead(200, {
                                "Content-Type": "text/html"
                        });

                        res.end(data);
                });
        }

        // Receive form data
        else if (req.method === "POST" && req.url === "/submit") {

                let body = "";

                req.on("data", chunk => {
                        body += chunk;
                });

                req.on("end", () => {

                        const student = JSON.parse(body);

                        console.log("\n===== Student Details =====");
                        console.log("Name  :", student.name);
                        console.log("Email :", student.email);
                        console.log("Age   :", student.age);
                        console.log("===========================\n");

                        res.writeHead(200, {
                                "Content-Type": "text/plain"
                        });

                        res.end("Form submitted successfully!");
                });
        }

        else {
                res.writeHead(404);
                res.end("Page not found");
        }

});

server.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
});
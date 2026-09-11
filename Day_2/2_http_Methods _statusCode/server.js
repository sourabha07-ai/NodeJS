
import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {

        // Home Page
        if (req.method === "GET" && req.url === "/") {

                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.end("This Home Page!");

        }

        // Login Page
        else if (req.method === "GET" && req.url === "/login.html") {

                fs.readFile("./login.html", (error, data) => {

                        if (error) {
                                res.statusCode = 404;
                                res.setHeader("Content-Type", "text/plain");
                                res.end("Login page not found!");
                                return;
                        }

                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(data);
                });

        }

        // Receive Login Form
        else if (req.method === "POST" && req.url === "/login") {

                let body = "";

                // Receive data chunks
                req.on("data", (chunk) => {
                        body += chunk;
                });

                // When all data is received
                req.on("end", () => {

                        const params = new URLSearchParams(body);

                        const fullName = params.get("fullName");
                        const email = params.get("email");
                        const password = params.get("password");
                        const gender = params.get("gender");
                        const city = params.get("city");

                        // Print user details in terminal
                        console.log("--------------------------------");
                        console.log("User Details");
                        console.log("--------------------------------");
                        console.log("Full Name:", fullName);
                        console.log("Email:", email);
                        console.log("Password:", password);
                        console.log("Gender:", gender);
                        console.log("City:", city);
                        console.log("--------------------------------");

                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/plain");
                        res.end("Form submitted successfully!");
                });

        }

        // 404
        else {

                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Page not Found");
        }
});

server.listen(3000, () => {
        console.log("Server is Running on http://localhost:3000");
});


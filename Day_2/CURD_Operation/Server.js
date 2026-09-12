import http from 'node:http';

const Users = [
        {
                "id": 1,
                "name": "Rahul Kumar",
                "email": "rahul@example.com",
                "role": "user",
                "status": "active"
        },
        {
                "id": 2,
                "name": "Priya Das",
                "email": "priya@example.com",
                "role": "user",
                "status": "active"
        },
        {
                "id": 3,
                "name": "Amit Sharma",
                "email": "amit@example.com",
                "role": "admin",
                "status": "active"
        },
        {
                "id": 4,
                "name": "Sneha Patel",
                "email": "sneha@example.com",
                "role": "user",
                "status": "inactive"
        }
];

const server = http.createServer((req, res) => {
        console.log(req.method);
        console.log(req.url);

        res.setHeader("Content-Type", "application/json");
        if (req.method === "GET" && req.url === "/") {
                res.statusCode = 200;
                res.end(JSON.stringify("This is My Home Page..."));
        }
        if (req.method === "GET" && req.url === "/Users") {
                res.statusCode = 200;
                res.end(JSON.stringify(Users));
        }

        if (req.method === "GET" && req.url.startsWith("/Users/")) {
                const id = Number(req.url.split("/")[2]);

                const user = Users.find(user => user.id === id);

                if (!user) {
                        res.statusCode = 404;
                        res.end(JSON.stringify({ message: "User not Found!..." }));
                        return;
                }

                res.statusCode = 200;
                res.end(JSON.stringify(user));
        }

        if (req.method === "DELETE" && req.url.startsWith("/Users/")) {
                const id = Number(req.url.split("/")[2]);

                const index = Users.findIndex(user => user.id === id);

                if (index === -1) {
                        res.statusCode = 404;
                        res.end(JSON.stringify({
                                message: "User not found"
                        }));
                        return;
                }

                Users.splice(index, 1);

                res.statusCode = 204;
                res.end();
        }




























        
});
server.listen(3000, () => {
        console.log("Server is Running... http://localhost:3000");
})
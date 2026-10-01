#!/bin/bash

mkdir -p node-day2/data
mkdir -p node-day2/streams
mkdir -p node-day2/files
mkdir -p node-day2/server

touch node-day2/data/users.json

touch node-day2/streams/input.txt
touch node-day2/streams/stream-read.cjs
touch node-day2/streams/stream-copy.cjs

touch node-day2/files/file-practice.cjs
touch node-day2/files/path-practice.cjs

touch node-day2/server/basic-server.cjs
touch node-day2/server/crud-server.cjs

touch node-day2/package.json

echo "================================"
echo " Node Day 2 Project Created"
echo "================================"

echo ""
echo "node-day2/"
echo "├── data/"
echo "│   └── users.json"
echo "├── streams/"
echo "│   ├── input.txt"
echo "│   ├── stream-read.cjs"
echo "│   └── stream-copy.cjs"
echo "├── files/"
echo "│   ├── file-practice.cjs"
echo "│   └── path-practice.cjs"
echo "├── server/"
echo "│   ├── basic-server.cjs"
echo "│   └── crud-server.cjs"
echo "└── package.json"

echo ""
echo "✅ Node Day 2 structure created successfully!"

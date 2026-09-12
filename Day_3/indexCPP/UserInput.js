 const { spawn } = require("child_process");
const readline = require("readline");

const cpp = spawn("./output/UserInput.exe");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Receive output from C++
cpp.stdout.on("data", (data) => {
    console.log("C++:", data.toString().trim());

    askUser();
});

// Receive errors from C++
cpp.stderr.on("data", (data) => {
    console.error("C++ Error:", data.toString());
});

// When C++ finishes
cpp.on("close", (code) => {
    console.log(`C++ process ended with code ${code}`);
    rl.close();
});

// Ask user for input
function askUser() {
    rl.question("Enter a number (or exit): ", (answer) => {

        if (answer.toLowerCase() === "exit") {
            cpp.stdin.end();
            rl.close();
            return;
        }

        cpp.stdin.write(answer + "\n");
    });
}

// Start
askUser();
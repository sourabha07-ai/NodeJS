const { spawn } = require("child_process");

const cpp = spawn("./output/HelloSourabha.exe");

cpp.stdout.on("data", (data) => {
    console.log("C++ says:", data.toString());
});

cpp.stderr.on("data", (data) => {
    console.error("C++ error:", data.toString());
});

// cpp.on("close", (code) => {
//     console.log("C++ finished with code:", code);
// });
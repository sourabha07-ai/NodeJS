const fs = require("fs");

//1.Create Folder
fs.mkdir("Task_StudentFileManagement", { recursive: true }, (err) => {
        if (err) {
                console.log("Error: ", err);
                return;
        }
        console.log("1.Create dir successfully✅ ");

        //2.Create File 
        fs.writeFile('Task_StudentFileManagement/Student.txt', "\nName: Sourabha\nCourse: MCA\nCollege: ABC University", (err) => {
                if (err) {
                        console.log("Error: ", err);
                        return;
                }
                console.log("2.File Create successfully✅");

                // 3.Read File 
                fs.readFile('Task_StudentFileManagement/Student.txt', "utf8", (err, data) => {
                        if (err) {
                                console.log("Error: ", err);
                                return;
                        }
                        console.log("3.Read the File📂");
                        console.log(data);

                        //     4.appended data 
                        fs.appendFile("Task_StudentFileManagement/Student.txt", "\nSemester:4", (err) => {
                                if (err) {
                                        console.log("error: ", err);
                                        return;
                                }
                                console.log("4.appended Data 📊");

                                // 5. Read Directory 
                                fs.readdir('Task_StudentFileManagement', (err, files) => {
                                        if (err) {
                                                console.log("Error: ", err);
                                                return;
                                        }
                                        console.log("5.Read Directory 📁");
                                        console.log(files);

                                        // 6. Get file information
                                        fs.stat("Task_StudentFileManagement/Student.txt", (err, stats) => {
                                                if (err) {
                                                        console.log("error: ", err);
                                                        return;
                                                }
                                                console.log("6.File📂 information ");
                                                console.log(`Size ${stats.size} bytes`);
                                                console.log(`is File📂:  ${stats.isFile()}`);
                                                console.log(`is Directory 📁 ${stats.isDirectory()}`);

                                                //7. Rename file name
                                                fs.rename("Task_StudentFileManagement/Student.txt", 'Task_StudentFileManagement/Sourabha_Student.txt', (err) => {
                                                        if (err) {
                                                                console.log("Error: ", err);
                                                                return;
                                                        }
                                                        console.log("7.Rename File📂 successfully✅");
                                                        //8. Delete file
                                                        fs.unlink("Task_StudentFileManagement/Sourabha_Student.txt", (err) => {
                                                                if (err) {
                                                                        console.log("Error: ", err);
                                                                        return;
                                                                }
                                                                console.log("8.File📂 Delete 📦");

                                                                //9.Delete Folder 
                                                                fs.rmdir("Task_StudentFileManagement", (err) => {
                                                                        if (err) {
                                                                                console.log("Error: ", err);
                                                                                return;
                                                                        }
                                                                        console.log("9.Delete Directory successfully✅");
                                                                });
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });
});





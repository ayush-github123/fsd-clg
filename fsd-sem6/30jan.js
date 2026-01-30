const fs = require("fs");
const path = require("path");

// Paths
const baseDir = __dirname;
const filePath = path.join(baseDir, "demo.txt");
const renamedPath = path.join(baseDir, "renamedDemo.txt");
const movedPath = path.join(baseDir, "movedDemo.txt");

//create file
fs.writeFileSync(filePath, "File created successfully\n");
console.log("✅ File created");

//write file
fs.writeFileSync(filePath, "This is written data\n");
console.log("✅ File written");

//write file
fs.appendFileSync(filePath, "This data is appended\n");
console.log("✅ Data appended");

//read file
const data = fs.readFileSync(filePath, "utf8");
console.log("📄 File content:\n" + data);

//rename file
fs.renameSync(filePath, renamedPath);
console.log("✅ File renamed");

//rename the file
fs.renameSync(renamedPath, movedPath);
console.log("✅ File moved");

//change file permission
fs.chmodSync(movedPath, 0o444); // read-only
console.log("✅ File permission changed to READ ONLY");

/* 8. DELETE FILE */
// fs.unlinkSync(movedPath);
// console.log("✅ File deleted");
let fs = require("fs");
fs.writeFile("homework.txt", "", (err) => {err;});
const path = require("path");
const homework = path.join(__dirname, "homework.txt");
newText = "Homework 02 in Basic Node";
fs.writeFileSync(homework, newText);
fs.appendFileSync(homework, "FINISHED");
console.log(fs.readFileSync(homework, { encoding: "utf-8" }));
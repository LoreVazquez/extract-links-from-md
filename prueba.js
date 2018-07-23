const glinkMD = require('glinks-md');
const fs = require("fs")

const links = fs.readFileSync('file.md').toString();
console.log(glinkMD(links))
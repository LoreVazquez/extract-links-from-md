const glinkMD = require('glink-md');
const fs = require("fs")

const links = fs.readFileSync('file.md').toString();
console.log(glinkMD(links))


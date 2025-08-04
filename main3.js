// const fs = require("fs")

import fs from 'fs';

console.log("starting")
// fs.writeFileSync("kannu.txt", "kannu is a good boy")
fs.writeFile("kannu.txt", "kannu is a good boy", ()=> { 

    console.log("done")
    fs.readFile("kannu")
})

console.log("ending")
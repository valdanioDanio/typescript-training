const fs = require('fs')

console.log(1)

const callback = (error, data) =>{
    console.log(error, String(data));
}

fs.readFile('./f2.txt', callback)

fs.readFile('./f1.txt', (err, contents) => {
  fs.readFile('./f2.txt', (err2, contents2) => {
    console.log(err, String(contents));
    console.log(err2, String(contents2));
  })
})

console.log(2)
console.log(3)

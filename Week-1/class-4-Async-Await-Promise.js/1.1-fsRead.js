
const fs = require("fs");
//asyn function it is very slow
fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data)
});

console.log("Hello");
let a=0;
for(let i=0;i<1000000;i++){
    a++;
}
console.log("hey there")
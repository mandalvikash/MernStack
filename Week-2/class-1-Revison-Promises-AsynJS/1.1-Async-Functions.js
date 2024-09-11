// function sum(a,b){
//   return a+b;
// }
// console.log(sum(3,4))

function onDone(){
  console.log("Hii");
}

setTimeout(onDone,3000);
console.log("After setTimeout");

const fs=require("fs");

fs.readFile("a.txt","utf-8",function(data){
  console.log(data)
})
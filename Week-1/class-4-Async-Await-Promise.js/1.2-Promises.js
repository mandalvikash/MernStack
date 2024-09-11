// function findSum(n){
//   let ans=0;
//   for(let i=1;i<=n;i++){
//     ans+=i;
//   }
//   return ans;
// }
// function findSumTill100(){
//   console.log(findSum(100));
// };
// setTimeout(findSumTill100,2000);
// console.log("Hello World")

//My own asynchronous function without promise
const fs=require("fs");
function vikashReadFile(cb){
  fs.readFile("a.txt","utf-8",function(err,data){
    cb(data);
  })
}

function onDone(data){
  console.log(data);
}
vikashReadFile(onDone);


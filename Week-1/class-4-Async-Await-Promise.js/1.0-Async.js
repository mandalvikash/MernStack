function findSum(n){
  let ans=0;
  for(let i=1;i<=n;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
 console.log(findSum(100));
}

//busy waiting
// function syncSleep(){
//   let a=1;
//   for(let i=0;i<10000000000;i++){
//     a++;
//   }
// }
// syncSleep()

setTimeout(findSumTill100,2000);

console.log("Hello World")
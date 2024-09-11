// function calculateArithmetic(a,b,type){
//   if(type==="add"){
//     return a+b;
//   }
//   if(type==="sub"){
//     return a-b;
//   }
// }


// function calculateArithmetic(a,b,type){
//   if(type==="add"){
//     const val=sum(a,b);
//     return val;
//   }
//   if(type==="sub"){
//     const val=sub(a,b);
//     return val;
//   }
// }

// function sum(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }
// const value=calculateArithmetic(3,6,"add");
// console.log(value)

function calculateArithmetic(a,b,fnToCall){
  const ans=fnToCall(a,b);
  return ans;
}

function sum(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
const value=calculateArithmetic(3,6,sum);
console.log(value)
function vikashAsyncFunction(){
  let p=new Promise(function(resolve){
      setTimeout(function(){
        resolve("Hi there");
      },2000);
  });
  return p;
};

// function main(){
//   vikashAsyncFunction().then(function(value){
//     console.log(value);
//   });
// }
// main();

// async function main(){
//   let val=vikashAsyncFunction();
//     console.log(val);
// }
// main();



async function main(){
  //no callback no.then syntax
  let val=await vikashAsyncFunction();
    console.log("Hey");
    console.log(val);
}
main();
console.log("After main")
// function myOwnSetTimeout(callback,durration) {
//   setTimeout(callback, durration);
// }
// myOwnSetTimeout(function(){
// console.log("Hey bro");
// },2000);


// function promisifiedSetTimeout(durration) {
//   let p = new Promise(function (resolve) {
//     setTimeout(resolve, durration);
//   });
//   return p;
// }

// promisifiedSetTimeout(3000).then(function(){
//   console.log("Hello");
// })


//another way
function promisifiedSetTimeout1(durration) {
  let p = new Promise(function (resolve) {
    setTimeout(function(){
      resolve();
    }, durration);
  });
  return p;
}

let ans=promisifiedSetTimeout1(3000);
console.log(ans);
ans.then(function(){
  console.log("Time out is done");
})
  



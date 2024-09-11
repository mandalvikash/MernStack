function square(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}
// function sumOfSquares(a,b){
//   const val1=square(a);
//   const val2=square(b);
//   return val1+val2;
// }
// function sumOfCubes(a,b){
//   const val1=cube(a);
//   const val2=cube(b);
//   return val1+val2;
// }
// console.log(sumOfSquares(1,2));
// console.log(sumOfCubes(1,2))

function sumOfSomething(a,b,fn){
  console.log(fn);
  const val1=fn(a);
  const val2=fn(b);
  return val1+val2;
}
console.log(sumOfSomething(1,2,square));
console.log(sumOfSomething(1,2,cube));


//anonymous function
console.log(sumOfSomething(1,4,function(n){
  return n*10;
}))
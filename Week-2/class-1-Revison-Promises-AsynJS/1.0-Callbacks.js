function sq(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}
function quad(n){
  return n*n*n*n;
}
// function sumOfSq(a,b){
//   let v1=sq(a);
//   let v2=sq(b);
//   return v1+v2;
// }

// function sumOfcube(a,b){
//   let v1=cube(a);
//   let v2=cube(b);
//   return v1+v2;
// }
// console.log(sumOfSq(4,2))
// console.log(sumOfcube(2,2))


function sumOfAlls(a,b,fn){
  let v1=fn(a);
  let v2=fn(b);
  return v1+v2;
}
console.log(sumOfAlls(1,2,sq));
console.log(sumOfAlls(1,2,cube));
console.log(sumOfAlls(1,2,quad))
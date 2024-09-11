//push() it push in the last
const intialArr=[1,2,3];
console.log("Before:"+intialArr);
intialArr.push(5);
console.log("After push:"+intialArr);

//unshift() it  push in the first 
intialArr.unshift(0);
console.log("After pop first element:"+intialArr);

//pop() it pop the last element
intialArr.pop();
console.log("After pop last element:"+intialArr);

//shift() it  pop the first element
intialArr.shift();
console.log("After pop first element:"+intialArr);


//concat
const arr1=[1,2,3];
const arr2=[4,5,6];
console.log(arr1.concat(arr2))

//forEach()
const arr=[1,2,3,4,5,6];
function logThings(str){
  console.log(str);
}
arr.forEach(logThings)

//callbacks

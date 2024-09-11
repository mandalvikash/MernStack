
//Lenngth of string
function getLength(str){
  console.log("Original String:"+str);
  console.log("Length :"+str.length)
}
getLength("Hello");

//FirstIndexOf element
function findIndexOf(str){
  console.log("Original String:"+str);
  console.log("Index of 'l':"+str.indexOf('l'));
}
findIndexOf("Hello");

//FirstLastIndexOf element
function findLastIndexOf(str,target){
  console.log("Original String:"+str);
  console.log("Index of : "+target+": " +str.lastIndexOf(target));
}
findLastIndexOf("Hello",'l');

//slice(start,end)
function getSlice(str,start,end){
  console.log("Original String:"+str);
  console.log("Slice:"+str.slice(start,end))
}

getSlice("Hello",0,4)

//substr(start,length)
function subString(str,start,end){
  console.log("Original String:"+str);
  console.log("Substring:"+str.substr(start,end))
}

subString("Hello",2,3)

//replace(target,replacement)
function replaceString(str,target,replacement){
  console.log("Original String:"+str);
  console.log("After replace:"+str.replace(target,replacement));
}
replaceString("Hello World","World","JavaScript");

//split(sepeartor)
function splitString(str,separator){
  console.log("Original String:"+str);
  console.log("After split:"+str.split(separator));
}
splitString("Hello my name is vikash"," ");

//trim() extra space in start and end will be trimed
function trimString(str){
  console.log("Original String:"+str);
  console.log("After trim:"+str.trim());
}
trimString("  Hello my name is vikash ");

//toUpperCase()
function toUpperCaseString(str){
  console.log("Original String:"+str);
  console.log("After:"+str.toUpperCase());
}
toUpperCaseString("Hello my name is vikash");


function toLowerCaseString(str){
  console.log("Original String:"+str);
  console.log("After:"+str.toLowerCase());
}
toLowerCaseString("Hello my name is vikash");
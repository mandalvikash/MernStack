var d=new Promise(function(resolve){
  setTimeout(function(){
    resolve("Fooled");
  },3000);
});
function callBack(){
  console.log(d);
}
// show promise is pending
console.log(d);
d.then(callBack)
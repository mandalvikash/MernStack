function vikashAsyncFunction(){
  let p=new Promise(function(resolve){
    setTimeout(resolve,4000);
  });
  return p;
};
const val=vikashAsyncFunction();
val.then(function(){
  console.log("hello")
})
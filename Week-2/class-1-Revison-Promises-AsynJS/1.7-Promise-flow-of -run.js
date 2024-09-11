console.log("At the top 1");
function promisifiedSetTimeout(){
    console.log("Function called 3");
    return new Promise(function(res){
      console.log("Inside promise callback 4");
      setTimeout(function(){
        console.log("setTimeout called 5");
        res("done I am burn out");
      },5000);
    });
}
console.log("In the middle 2");
promisifiedSetTimeout().then(function(value){
  console.log("Promisified then 6");
  console.log(value);
});
function myOwnTimeout(fn,durration){
  setTimeout(fn,durration);
}

myOwnTimeout(function(){
  console.log("Hi there")
},2000);
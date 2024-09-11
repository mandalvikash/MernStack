const { waitForDebugger } = require("inspector");

setTimeout(function(){
  console.log("Hey first");
  setTimeout(function(){
    console.log("Hey second");
  },2000);
},2000);

console.log("End")
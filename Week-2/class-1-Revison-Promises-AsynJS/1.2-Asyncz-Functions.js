const fs=require("fs");
function readAndThenWrite(cb) {
    fs.readFile("a.txt","utf-8",function(err,data){
      data=data+"Vikash";
      fs.writeFile("a.txt",data,function(){
         cb();
      })
    });
}
readAndThenWrite(function(){
        console.log("Copyright has been put");
});
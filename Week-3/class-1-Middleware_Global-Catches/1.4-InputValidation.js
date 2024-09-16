const express=require("express");
const app=express();
  app.use(express.json());
app.post("/health-checkup",function(req,res){
  const kidneys=req.body.kidneys;
  const kidneyLength=kidneys.length;
  res.send("You have "+kidneyLength+ " kidneys");
});

//glbal catches
app.use(function(err,req,res,next){
  res.json("Sorry something is wrong")
})
app.listen(3000,(ree,res)=>{
  console.log("Server is running")
});
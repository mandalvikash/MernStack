const express = require("express");
const app = express();

function usernameMiddleware(req,res,next){
 const username=req.headers.username;
 const password=req.headers.password;
  if (username != "Vikash" || password != "pass") {
    res.status(403).json({
      msg:"Incoorect input"
    });
  }else{
    next();
  }
}
function kidneyIdMiddleware(req,res,next){
  const kidneyId=req.query.kidneyId;
  console.log(kidneyId)
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
       msg:"Incoorect input"
    })
  }else{
    next();
  }
}
app.get("/health-checkup",usernameMiddleware,kidneyIdMiddleware, (req, res) => {
 
  res.send("You are healthy ");
});

app.get("/kidney-check", usernameMiddleware,kidneyIdMiddleware,(req, res) => {
  res.send("You kidney is healthy");
});

app.get("/heart-check", usernameMiddleware,kidneyIdMiddleware,(req, res) => {
  res.send("Your heart is healthy");
});


app.listen(3000,()=>{
  console.log("Server is running")
});
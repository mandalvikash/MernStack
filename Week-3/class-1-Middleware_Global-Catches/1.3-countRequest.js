const express = require("express");
const app = express();

let numberOfCount=0;
function numberOfRequest(req,res,next){
    numberOfCount++;
    console.log(numberOfCount);
    next();
}
app.use(numberOfRequest)
app.post("/health-checkup",(req, res) => {
 
  res.send("You are healthy ");
});

app.get("/health-checkup2",(req, res) => {
 
  res.send("You are healthy2 ");
});
app.listen(3000,()=>{
  console.log("Server is running")
});
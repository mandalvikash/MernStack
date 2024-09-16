const express = require("express");
const app = express();


function usernameValidator(username,password){
  if (username != "Vikash" || password != "pass") {
    return false;
  }
  return true;
}
function kidneyIdValidator(kidneyId){
  if (kidneyId != 1 && kidneyId != 2) {
    return false;
  }
  return true;
}
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!usernameValidator(username,password)) {
    res.status(403).json({
      msg: "Somethingg is wrong in input",
    });
    return;
  }

  if (!kidneyIdValidator(kidneyId)) {
    res.status(411).json({
      msg: "Somethingg is wrong in input",
    });
  }
  
  res.send("Your kidney is fine");
});

app.put("/replace-kidney", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!usernameValidator(username,password)) {
    res.status(403).json({
      msg: "Somethingg is wrong in input",
    });
    return;
  }

  if (!kidneyIdValidator(kidneyId)) {
    res.status(411).json({
      msg: "Somethingg is wrong in input",
    });
  }

  res.send("Your kidney is fine");
});




app.listen(3000,()=>{
  console.log("Server is running")
});
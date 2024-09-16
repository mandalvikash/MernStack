const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "Vikash" || password != "pass") {
    res.status(400).json({
      msg: "Somethingg is wrong in input",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Somethingg is wrong in input",
    });
  }
  
  res.send("Your kidne is fine");
});

app.put("/replace-kidney", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "Vikash" || password != "pass") {
    res.status(400).json({
      msg: "Somethingg is wrong in input",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Somethingg is wrong in input",
    });
  }
  
  res.send("Your kidne is fine");
});




app.listen(3000,()=>{
  console.log("Server is running")
});
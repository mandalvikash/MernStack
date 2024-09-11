const express = require("express");
const user = [
  {
    name: "Vikash",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
const app = express();

app.get("/", function (req, res) {
  const johnKidney = user[0].kidneys;
  console.log(johnKidney);
  const numberOfKidneys = johnKidney.length;

  let numberOfHealtyKidneys = 0;
  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealtyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealtyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealtyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json());
app.post("/", function (req, res) {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});
app.put("/", function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});
app.delete("/", function (req, res) {
  if (atleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    user[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "you dont have bad kidneys",
    });
  }
});

function atleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.listen(3000);

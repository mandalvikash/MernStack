const express = require("express");
const app = express();
const zod = require("zod");

// const schema = zod.array(zod.number());
const schema=zod.object({
  email:zod.string(),
 password:zod.string(),
  country:zod.literal("IN").or(zod.literal("US")),
  kidneys:zod.array(zod.number())
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const body= req.body;
  const response = schema.safeParse(body);

  if (!response.success) {
    res.json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000, (ree, res) => {
  console.log("Server is running");
});

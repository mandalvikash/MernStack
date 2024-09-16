const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());
function validateinput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  return response;
}
// validateinput({email:"Vikash@12gmail.com",password:"12345678"})
app.post("/login", function (req, res) {
  const response = validateinput(req.body);
  if (!response.success) {
    res.json({
      msg: "Your input are invalid",
    });
    return;
  } else {
    res.send(response);
  }
});
app.listen(3000)
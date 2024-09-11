
const exrpress=require('express');

const app=exrpress();

const bodyParser=require("body-parser")

app.use(bodyParser.json());
app.post('/route-handler',(req,res)=>{
  // console.log(req.headers["authorization"])

  //this is being undefined so thats why we use bodyParser
  console.log(req.body) 
  res.send({
    msg:"2+2=4"
  })
});

app.listen(3000,()=>{
  console.log(`Example app listening on port ${3000}`)
})
const express=require("express")
const app=express();
const bodyParser=require("body-parser");
const port=process.env.PORT || 3000
app.use(bodyParser.json())

app.post('/backend',(req,res)=>{
  console.log(req.body)
  const message=req.body.output;
  console.log(message);
  res.json({
    output:"2+2=4"
  })
})

app.listen(port)
const exrpress=require('express');

const app=exrpress();
app.get('/route-handler',(req,res)=>{
  res.json({
    name:"Vikash",
    age:23
  })
});

app.listen(3000,()=>{
  console.log(`Example app listening on port ${3000}`)
})
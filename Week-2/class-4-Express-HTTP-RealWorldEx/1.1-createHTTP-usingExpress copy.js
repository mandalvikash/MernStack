const express=require("express");
function calulateSum(n){
  let ans=0;
  for(let i=1;i<=n;i++){
    ans+=i;
  }
  return ans;
}
const app=express();


app.get("/",function(req,res){ 
  const n=req.query.n;
  const ans=calulateSum(n)
  res.send("Hi your answer is: "+ans)
})

app.listen(3000);
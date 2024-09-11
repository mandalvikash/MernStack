function findSum(n){
  let ans=0;
  for(let i=1;i<=n;i++){
    ans+=i;
  }
  return ans;
}
console.log(findSum(100))
console.log(findSum(50))
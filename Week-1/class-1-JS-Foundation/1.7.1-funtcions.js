function sum(a,b,fnToCall){
  const result=a+b;
  fnToCall(result)
}

function displayResult(data){
  console.log("Result of the sum: "+data);
}

function displayResultPassive(data){
  console.log("Sum of the result is: "+data);
}

sum(4,7,displayResult);
sum(4,7,displayResultPassive);
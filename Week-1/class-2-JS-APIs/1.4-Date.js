const currDate=new Date();
console.log(currDate)
//0 based indexing of month
console.log(currDate.getMonth()+1)
console.log(currDate.getDay())
console.log(currDate.getFullYear())
console.log(currDate.getHours())
console.log(currDate.getMinutes())
console.log(currDate.getSeconds())


//setting component of date
currDate.setFullYear(2020);
console.log(currDate)

//setting month
currDate.setMonth(3)
console.log(currDate)

//getting and setting time in  milliseconds
console.log(currDate.getTime())

function calculateSum(){
  let a=0;
  for(let i=0;i<10;i++){
    a+=i;
  }
  return a;
}
const beforeDate=new Date();
const beforeTimeInMs=beforeDate.getTime();
console.log(calculateSum());
const afterDate=new Date();
const afterTimeInMs=afterDate.getTime();
console.log(afterTimeInMs-beforeTimeInMs);
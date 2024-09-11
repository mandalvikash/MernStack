const arr=[1,2,3,4,5];
// const newArray=[];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){

//   newArray.push(arr[i]);
//   }
// }
// console.log(newArray)

const ans=arr.filter((i)=>{
     if(i%2==0){
      return true;
     }else{
      return false;
     }
});
console.log(ans)
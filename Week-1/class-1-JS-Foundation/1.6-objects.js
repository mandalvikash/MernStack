// const person1="Harkirat";
// const gender1="male";

// const person2="Vikash";
// const gender2="male";

// const person3="Riya";
// const gender3="female";

// const personArray=["Harkirat","Vikash","Riya"];
// const genderArray=["male","male","female"];

// for(let i=0;i<personArray.length;i++){
//   if(genderArray[i]=="male"){
//     console.log(personArray[i])
//   }
// }



const user1={
  firstName:"Harkirat",
  gender:"male"
}

console.log(user1["gender"])


const allUsers=[{
  firstName:"Harkirat",
  gender:"male"
},
{
  firstName:"Vikash",
  gender:"male"
},
{
  firstName:"Priya",
  gender:"female"
}];
for(let i=0;i<allUsers.length;i++){
  if(allUsers[i]["gender"]=="male"){
    console.log(allUsers[i]["firstName"]);
  }
}
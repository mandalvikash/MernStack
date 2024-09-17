function getAnimalData(){
    fetch("https://fakerapi.it/api/v1/persons").then(async function(response){
            const data=await response.json();
            document.getElementById("container").innerHTML=JSON.stringify(data);
    })
}
// async function getAnimalData() {
//     const response=await fetch("https://fakerapi.it/api/v1/persons");
//     const finalData=await response.json();
//     console.log(finalData)
    
// }
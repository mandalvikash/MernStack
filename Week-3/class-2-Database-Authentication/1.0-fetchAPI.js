function getAnimalData(){
    fetch("https://fakerapi.it/api/v1/persons").then(function(response){
        response.json().then(function(finalData){
            console.log(finalData);
        })
    })
}
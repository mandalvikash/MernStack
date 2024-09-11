function jsonMethods(jsonString){
  console.log("Origianl JSON String:"+jsonString);
   
  //JSON.parse
  const user=JSON.parse(jsonString);
  console.log(user["key"]);

  const user1=JSON.stringify(jsonString);
  console.log(user1["key"])

}
const sampleJSONString='{"key":"value","number":22,"nested":{"nestedKey":"nestedValue"}}'
jsonMethods(sampleJSONString)
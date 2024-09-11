function objectMethods(obj){
  console.log("Original Object:",obj);

  let keys=Object.keys(obj);
  console.log("After Object.keys():",keys);

  let values=Object.values(obj);
  console.log("After Object.values():",values);

  let entries=Object.entries(obj);
  console.log("After Object.entries():",entries)

   let hasProp=Object.hasOwnProperty(obj);
   console.log("After hasOwnProperty():",hasProp);

   let newObj=Object.assign({},obj,{
    newProperty:"newValue"
   });
   console.log("After Object.assign():",newObj)
}

const sampelObject={
  key1:"Value1",
  key2:"Value2",
  key3:"Value3",
};
objectMethods(sampelObject)
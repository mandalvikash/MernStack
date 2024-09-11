class Animal{
  constructor(name,legCount,speak){
    this.name=name;
    this.legCount=legCount;
    this.speak=speak;
  }
  static myType(){
    console.log("ANIMAL");
  }
  speaks(){
    console.log("Hi there:"+this.speak);
  }
  countleg(){
    console.log("Hi there:"+this.legCount);
  }
  names(){
    console.log("Hi there:"+this.name);
  }
}

Animal.myType();
let dog=new Animal("Dog",4,"Bhow Bhow")
let cat=new Animal("Cat",4,"meow")

dog.speaks();
cat.speaks();
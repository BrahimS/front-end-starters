
export default class Person {
  name: string;
  age: number;
  constructor(name:string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayName(){
    console.log(`Hello, my name is ${this.name}`);
  }
  sayAge(){
    console.log(`I'am ${this.age} year's old`);
  }
}

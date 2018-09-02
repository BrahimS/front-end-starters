
import  Person  from './person'
import '../css/index.sass';

console.log("hello worlddddd");
(function(){
  const _select = (element: string) => document.querySelector(element)
  setInterval( ( ) => {
    _select('body').style.background = 'pink'
  }, 5000)

  setInterval( ( ) => {
    _select('body').style.background = 'purple'
  }, 5000)
  
  const person = new Person("Brahim", 41);
  person.sayName();
  person.sayAge();

}())

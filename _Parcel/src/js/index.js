import '../css/index.sass';
console.log("hello worlddddd");

(function(){
  const _select = element => document.querySelector(element)
  setInterval( ( ) => {
    _select('body').style.background = 'pink'
  }, 5000)
  setTimeout( ( ) => {
    location.reload();
  }, 10000)
}())

const favouriteFilms = ["The best offer", "Pretty woman", "Green mile"];
console.log("favouriteFilms", favouriteFilms);
favouriteFilms[3] = "Forrest Gamp";
favouriteFilms.push("Intouchables");

function calc(a, b, callback) {
    return callback(a,b) 
 }
 function add(a, b) {
   return a + b;
 }
 function subtr(a, b) {
   return a - b;
 }
 function div(a, b) {
   return a / b;
 }
 function modDiv(a, b) {
   return a % b;
 }
 function exp(a, b) {
   return a ** b;
 }
 console.log(calc(8, 1, add, ));
 console.log(calc(7,2, subtr));
 console.log(calc(10,5,div));
 console.log(calc(8,5,modDiv));
 console.log(calc(2,2,exp));
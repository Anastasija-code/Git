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
  

 const calc = (a, b, callback) => {
    return callback(a, b);
  };
  const add = (a = 1, b = 2) => {
    return a + b;
  };
  const subtr = (a = 5, b = 4) => {
    return a - b;
  };
  const div = (a = 8, b = 2) => {
    return a / b;
  };
  const modDiv = (a = 15, b = 3) => {
    return a % b;
  };
  const exp = (a = 2, b = 3) => {
    return a ** b;
  };
  console.log(calc(3, 5, add));
  console.log(calc(4, 1, subtr));
  console.log(calc(10, 5, div));
  console.log(calc(8, 5, modDiv));
  console.log(calc(2, 2, exp));
  
  
  const runTask = function () {
    const app = document.getElementById("app");
    for (let i = 1; i <= 11111111110; i = i * 10 + 1) {
      const DIV = document.createElement("div");
      DIV.innerHTML = i;
      app.append(DIV);
    }
}
    app.append(DIV.innerHTML);

    const celsius = [
        -3.5,
        -3,
        1.8,
        9.3,
        15.5,
        18.5,
        20.5,
        19.7,
        14.2,
        8.4,
        1.9,
        -2.3
      ];
      const farenheit = celsius.map(function (item) {
        return item * 33.8;
      });
      console.log("farenheit", farenheit);
var myObj = {};
var symbol1 = Symbol("foo");
var symbol2 = Symbol("foo");
myObj[symbol1] = 2;
myObj[symbol2] = 5;
console.log(myObj[symbol1]);
console.log(myObj[symbol2]);
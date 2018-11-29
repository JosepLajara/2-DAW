/* Actividad 1*/
let enlaces = document.querySelectorAll("a");

let map = new Map();

for(let enlace of enlaces){
   if(!map.has(enlace)){
       map.set(enlace.hostname,enlace.hostname);
   }
}
console.log(map);

/*Actividad 2*/

let query = document.querySelectorAll('a,.step img');

console.log(query);

/*Actividad 3*/

let query1 = document.querySelectorAll('.step-icon ~ img');

console.log(query1);

/*Actividad 4*/

let query2 = document.querySelectorAll("a[href='https://go.microsoft.com/fwlink/?linkid=862126']");

console.log(query2);
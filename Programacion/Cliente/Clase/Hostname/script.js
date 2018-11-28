let enlaces = document.querySelectorAll("a");

let map = new Map();

for(let enlace of enlaces){
   if(!map.has(enlace)){
       map.set(enlace.hostname,enlace.hostname);
   }
}
console.log(map);
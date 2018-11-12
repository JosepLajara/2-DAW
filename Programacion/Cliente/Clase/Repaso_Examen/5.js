let array = [1,2,3,4,5];

/*
   Funcion que comrueba si es un numero par
 */
function par(x) {
    return x%2 === 0;
}
/*
   Funcion que eleva un numero al cuadrado
 */
function power2(x) {
    return x**2;
}

let array_powered = array.map(power2);
let array_filtered = array_powered.filter(par);

console.log(array_filtered);


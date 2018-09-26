/**
 * Funcion que devuelve una suma
 * @param a
 * @param b
 * @returns {*}
 */
function suma(a,b){
    return a+b;
}
/**
 * Funcion que guarda los numeros pares en un array
 * @param x
 * @returns {boolean}
 */
function par(x){
    return x%2 == 0;
}

/**
 * Filtra por numeros pares
 * @type {number[]}
 */
let array = [1,2,3,2,5];
let newArray = array.filter(par);
/**
 * Suma los componentes del array
 * @type {number[]}
 */
let array_par = newArray;
console.log( array_par.reduce(suma,0) );
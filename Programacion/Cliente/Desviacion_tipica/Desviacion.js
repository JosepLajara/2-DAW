
//calcula la media de el array
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let media = sum / values.length;

console.log(media);

/**
 * Funcion que a cada valor del array le reduce la media
 * @param x
 * @returns {number}
 * @constructor
 */
function ReduceAVG(x){
    return x-media;
}

let arrayReduced = values.map(ReduceAVG);
console.log(newArray);

/**
 * Funcion que eleva e¡cada num del array al cuadrado
 * @param x
 * @returns {number}
 * @constructor
 */
function POW(x){
    return x**2;
}

let array_pow = arrayReduced.map(POW);

/**
 * Funcion de sumatorio del array de los numeros al cuadrado
 * @param a
 * @param b
 * @returns {*}
 */
function suma(a,b){
    return a+b;
}

let num_sum=array_POW.reduce(suma,0);

//calcula la desviacion tipica
let deviation=Math.sqrt(num_sum/values.length);
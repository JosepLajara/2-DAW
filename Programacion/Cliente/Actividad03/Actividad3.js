
let frase1='Hola como estas';
let frase2='donde estas';

let palabras1=frase1.split(" ");
let palabras2=frase2.split(" ");

for (let palabra1 of palabras1){
    for (let palabra2 of palabras2){
        if(palabra1 === palabra2){
            console.log("Palabra igual encontrad: "+palabra1+" y "+palabra2);
        }
    }
}

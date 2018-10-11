//npm install --save readline-sync     instalar readline

//crear package.json npm init -f
//Incluir clases y ficheros en este fichero
const CrearAutor = require("./Clases/Autor").Autor;
const CrearArticulo = require("./Clases/Articulos").Articulos;
const CrearPatente = require("./Clases/Patente").Patente;

const readline = require('redline-sync');

let salir = false;

while (!salir){
    console.log('Bienvenidos al sistema de gestión de patentes');
    console.log('1) Dar de alta autor');
    console.log('2) Dar de alta articlo');
    console.log('3) Dar de alta patente');
    console.log('4) Salir del programa');
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');

    //Listado de caso de opciones introducidas
    if(opcion===1){
        //Opcion para dar de alta un autor
    }else if(opcion===2){
        //Opcion para dar de alta un articulo
    }else if(opcion===3){
        //Opcion para dar de alta una patente
    }
    else if(opcion===4){
        //Opcion para salir del programa
        salir=true;
    }
}

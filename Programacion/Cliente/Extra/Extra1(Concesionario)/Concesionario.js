/**
 * Ejercicio: Concesionario
 * Dar alta un coche
 * Dar de baja un coche
 * Buscar un coche y mostrar información
 */
const readline = require('redline-sync');

/**
 * Clase para crear un coche
 */
class Coche{

    constructor(matricula,marca,modelo,color,km){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.km = km;
        this.reservado = false;
    }

    getMatricula(){
        return this.matricula;
    }
}

let listaCoches = [];
let salir = false;

while (!salir){
    console.log('Bienvenidos al sistema de gestión del concesionario');
    console.log('1) Dar de alta el coche');
    console.log('2) Dar de baja un coche');
    console.log('3) Buscar un coche y mostrar información');
    console.log('4) Salir del programa');
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');

    //Listado de caso de opciones introducidas
    if(opcion===1){
        //Dar alta un usuario
        let matricula=readline.question('Por favor introduce una matrícula: ');
        let marca=readline.question('Por favor introduce una marca: ');
        let color=readline.question('Por favor introduce un color: ');
        let modelo=readline.question('Por favor introduce un modelo: ');
        let km=readline.questionFloat('Por favor introduce el numero de km del coche: ');

        let newCar = new Coche(matricula,marca,modelo,color,km);

        listaCoches.push(newCar);

    }else if(opcion===2){
        //Dar de baja un coche
        let matricula = readline.question('Por favor, introduzca la matricula del vehículo que desea eliminar');
        let encontrado=false;
        for (let i=0;i<listaCoches.length;i++){
            let coche = listaCoches[i];
            if(coche.matricula===matricula){
                listaCoches.splice(i);
                encontrado=true;
                break;
            }
        }
        if(encontrado===true){
            console.log('Coche encontrado y eliminado');
        }else{
            console.log('Coche no encontrado');
        }
    }else if(opcion===3){
        //Buscar un coche y mostrar información
        let matricula = readline.question('Por favor introduce una matricula: ');
        for(let coche of listaCoches){
            if (coche.matricula===matricula){
                console.log(coche);
                break;
            }
        }
    }else if(opcion===4){
        salir=true;
    }
}

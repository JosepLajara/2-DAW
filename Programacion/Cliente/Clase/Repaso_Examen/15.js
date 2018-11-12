class Corredor {

    /*
    Constructor que inicializa la clase
     */
    constructor(nombre,apellido,edad = undefined,club = undefined,categoria = undefined, ){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.club=club;
        this.categoria=categoria;
        this.marca_array=[];
    }

    /*
    Funcion para introducir una marca
     */
    marca(marca){
        marca.push(this.marca_array);
    }

    /*
    Funcion que devueve la marca más baja
     */
    getMarca_baja(){
        let marcaAux = Infinity;
        for (let i of this.marca_array){
            if(i<marcaAux){
                marcaAux=i;
            }
        }
        return marcaAux;
    }

    getMarca_alta(){
        let marcaAux= Number.NEGATIVE_INFINITY;
        for (let i of this.marca_array){
            if(i>marcaAux){
                marcaAux=i;
            }
        }
        return marcaAux;
    }

    esMayor(){
        return this.edad >= 18;
    }

}
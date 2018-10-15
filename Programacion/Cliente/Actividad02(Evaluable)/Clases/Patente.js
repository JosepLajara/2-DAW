/**
 * Clase para crear una Patente
 */

class Patente{

    constructor(nombre,autores,anyo_publi,anyo_venci){
        this.nombre=nombre;
        this.autores=autores;
        this.anyo_publi=anyo_publi;
        this.anyo_venci=anyo_venci;
        //parte de la funcion para diferenciar si es una patente
        this._Patente=true;
    }

    /**
     * Getters
     * @returns {*}
     */
    getNombre(){
        return this.nombre;
    }

    getAutores(){
        return this.autores;
    }
    getAnyo_publi(){
        return this.anyo_publi;
    }
    getAnyo_venci(){
        return this.anyo_venci;
    }

    /**
     * Funcion para diferenciar si es una patente
     * @returns {boolean}
     */
    isPatente(){
        return this._Patente;
    }
}

//exportar clase
exports.Patente = Patente;
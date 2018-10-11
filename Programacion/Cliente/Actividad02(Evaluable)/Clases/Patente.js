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

    getNombre(){
        return this.nombre;
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
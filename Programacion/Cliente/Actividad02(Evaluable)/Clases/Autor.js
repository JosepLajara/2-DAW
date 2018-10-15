
/**
 * Clase para crear un autor
 */
class Autor{

    constructor(id_user,nombre,anyo_nacimiento){
        this.id_user=id_user;
        this.nombre=nombre;
        this.anyo_nacimiento=anyo_nacimiento;
        this._autor=true;
    }

    /**
     * Getters
     * @returns {*}
     */
    getId_user(){
        return this.id_user;
    }
    getNombre(){
        return this.nombre;
    }
    getAnyo_nacimiento(){
        return this.anyo_nacimiento;
    }

    isAutor(){
        return this._autor;
    }

}

//exportar clase
exports.Autor = Autor;
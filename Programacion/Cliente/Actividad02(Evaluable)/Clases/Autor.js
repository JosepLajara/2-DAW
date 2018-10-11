
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

    getId_user(){
        return this.id_user;
    }

    isAutor(){
        return this._autor;
    }

}

//exportar clase
exports.Autor = Autor;
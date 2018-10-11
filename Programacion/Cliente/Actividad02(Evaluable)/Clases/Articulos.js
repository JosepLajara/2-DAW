/**
 * Clase para crear un articulo de revista
 */
class Articulo_revista{

    constructor(id_revista,titulo,autor,paginas,anyo,menciones){
        this.id_revista=id_revista;
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.anyo=anyo;
        this.menciones=menciones;
        this._articulo_revista=true;
    }

    getId_revista(){
        return this.id_revista;
    }

    isArticulo_revista(){
        return this._articulo_revista;
    }
}

/**
 * Clase para crear un articulo de conferencia
 */
class Articulo_conferencia{

    constructor(id_conferencia,titulo,autor,paginas,conferencia,lugar){
        this.id_conferencia=id_conferencia;
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.conferencia=conferencia;
        this.lugar=lugar;
        this._articulo_conferencia=true;

    }

    getId_conferencia(){
        return this.id_conferencia;
    }

    isArticulo_conferencia(){
        return this._articulo_conferencia;
    }
}

//exportar clase
exports.Articulo_conferencia = Articulo_conferencia;
exports.Articulo_conferencia = Articulo_conferencia;
/**
 * Clase para crear un articulo de revista
 */
class Articulo_revista{

    constructor(id_revista,titulo,autor,paginas,anyo_publicacion,menciones,revista,editorial,factor_impacto){
        this.id_revista=id_revista;
        this.titulo=titulo;
        this.factor_impacto=factor_impacto;
        this.revista=revista;
        this.editorial=editorial;
        this.autor=autor;
        this.paginas=paginas;
        this.anyo_publicacion=anyo_publicacion;
        this.menciones=menciones;
        this._articulo_revista=true;
    }

    /**
     * Getters
     * @returns {*}
     */
    getId_revista(){
        return this.id_revista;
    }
    getTitulo(){
        return this.titulo;
    }
    getAutor(){
        return this.autor;
    }
    getPaginas(){
        return this.paginas;
    }
    getAnyo_publicacion(){
        return this.anyo_publicacion;
    }
    getMenciones(){
        return this.menciones;
    }
    getRevista(){
        return this.revista;
    }
    getEditorial(){
        return this.editorial;
    }
    getFactor_impacto(){
        return this.factor_impacto;
    }


    isArticulo_revista(){
        return this._articulo_revista;
    }
}

/**
 * Clase para crear un articulo de conferencia
 */
class Articulo_conferencia{

    constructor(id_conferencia,titulo,autor,paginas,anyo_publicacion,menciones,conferencia,lugar,libro_publicacion){
        this.id_conferencia=id_conferencia;
        this.titulo=titulo;
        this.autor=autor;
        this.libro_publicacion=libro_publicacion;
        this.anyo_publicacion=anyo_publicacion;
        this.menciones=menciones;
        this.paginas=paginas;
        this.conferencia=conferencia;
        this.lugar=lugar;
        this._articulo_conferencia=true;

    }

    /**
     * Getters
     * @returns {*}
     */
    getId_conferencia(){
        return this.id_conferencia;
    }
    getTitulo(){
        return this.titulo;
    }
    getAutor(){
        return this.autor;
    }
    getPaginas(){
        return this.paginas;
    }
    getAnyo_publicacion(){
        return this.anyo_publicacion;
    }
    getMenciones(){
        return this.menciones;
    }
    getConferencia(){
        return this.conferencia;
    }
    getLugar(){
        return this.lugar;
    }
    getLibro_publicacion(){
        return this.libro_publicacion;
    }

    isArticulo_conferencia(){
        return this._articulo_conferencia;
    }
}

//exportar clase
exports.Articulo_conferencia = Articulo_conferencia;
exports.Articulo_revista = Articulo_revista;
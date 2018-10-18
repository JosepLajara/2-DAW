//npm install --save readline-sync     instalar readline

//crear package.json npm init -f


/*
SE DA A ENTENDER QUE LOS ID SON SOLO NÚMEROS
SE DA A ENTENDER QUE EN LOS AUTORES EN ARTICULOS SE INTRODUCE EL ID DEL AUTOR
 */
//Incluir clases y ficheros en este fichero
const CrearAutor = require("./Clases/Autor").Autor;
const CrearArticulo_conferencia = require("./Clases/Articulos").Articulo_conferencia;
const CrearArticulo_revista = require("./Clases/Articulos").Articulo_revista;
const CrearPatente = require("./Clases/Patente").Patente;


const readline = require('readline-sync');

//Declaracion de variables

let publicaciones = [];
let salir = false;

//Declaracion de funciones

function hay_autor(autor) {
    //Funcion que mira si hay un autor introducido
    if(autor!==''){
        return true;
    }
}

function hay_anyo(anyo){
    //Funcion que mira si hay un año de publicacion introducido
    if(anyo!==''){
        return true;
    }
}

function hay_tipo(tipo){
    //Funcion que mira si hay un tipo introducido
    if(tipo!==''){
        return true;
    }
}

function ordenarAsc(a, b) {
    return b-a;
}
while (!salir){
    console.log('Bienvenidos al sistema de gestion de patentes');
    console.log('SE DA A ENTENDER QUE LOS ID SON SOLO NÚMEROS');
    console.log('SE DA A ENTENDER QUE EN LOS AUTORES EN ARTICULOS SE INTRODUCE EL ID DEL AUTOR');
    console.log('1) Dar de alta');
    console.log('2) Modificar');
    console.log('3) Dar de baja');
    console.log('4) Otras opciones');
    console.log('5) Salir');
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
    //Listado de caso de opciones introducidas
    if(opcion===5){
        //Opcion para salir del programa
        console.log('Pulse ctrl+C si esta seguro de salir');
    }
    let salir2=false;
    while(!salir2){

        if(opcion===1){
            //Opcion para dar de alta

            console.log('1)Dar de alta un autor');
            console.log('2)Dar de alta una patente');
            console.log('3)Dar de alta un articulo');
            console.log('4)Volver');
            let caso = readline.questionInt('Seleccione una opcion: ');
            if(caso===1){
                //caso de introducir un autor
                let id_user=readline.questionInt('Introduce el id del autor: ');
                let nombre=readline.question('Introduce el nombre del autor: ');
                let anyo_nacimiento=readline.questionInt('Introduce el año de nacimiento del autor: ');
                console.log('Autor creado');
                //Crea un objeto de la clase de autor y lo sube al array
                let nuevo_autor = new CrearAutor(id_user,nombre,anyo_nacimiento);
                publicaciones.push(nuevo_autor);

            }else if(caso===2){
                //caso de introducir una patente
                let nombre = readline.question('Introduce el nombre de la patente: ');
                let autores = readline.question('Introduce el/los autores: ');
                let anyo_publi= readline.questionInt('Introduce el año de publicacion:  ');
                let anyo_vencimiento = readline.questionInt('introduce el año de vencimiento de la publicacion: ');
                console.log('Patente creada');
                //Crea un nuevo objeto de la clase patente y sube los datos al array
                let nueva_patente = new CrearPatente(nombre,autores,anyo_publi,anyo_vencimiento);
                publicaciones.push(nueva_patente);

            }else if(caso === 3){
                //caso de introducir un articulo

                console.log('1)Dar de alta un articulo de conferencia');
                console.log('2)Dar de alta un articulo de revista');
                console.log('3)Volver');
                let casee = readline.questionInt('Seleccione una opcion: ');
                let salir3=false;
                while(!salir3){
                    if(casee===1){
                        //Caso de articulo de conferencia

                        let id_conferencia=readline.questionInt('Introduce el id del articulo: ');
                        let titulo=readline.question('Introduce el titulo del articulo: ');
                        let autor=readline.question('Introduce el/los autores: ');
                        let anyo_publicacion=readline.question('Introduce el año de publicacion: ');
                        let menciones=readline.question('Introduce el numero de menciones: ');
                        let paginas=readline.questionInt('Introduce el numero de paginas del articulo: ');
                        let conferencia=readline.question('Introduce el nombre de la conferencia: ');
                        let lugar=readline.question('Introduce el lugar de la conferencia: ');
                        let libro_publicacion=readline.question('Introduce el titulo del libro de la publicacion: ');
                        console.log('Articulo creado');

                        salir3=true;
                        //Crea un nuevo objeto de la clase conferencia y sube los datos al array
                        let nueva_conferencia = new CrearArticulo_conferencia(id_conferencia,titulo,autor,paginas,anyo_publicacion,menciones,conferencia,lugar,libro_publicacion);
                        publicaciones.push(nueva_conferencia);

                    }else if(casee===2){
                        //Caso de articulo de revista

                        let id_revista=readline.questionInt('Introduce el id del articulo: ');
                        let titulo=readline.question('Introduce el titulo del articulo: ');
                        let autor=readline.question('Introduce el/los autores: ');
                        let anyo_publicacion=readline.question('Introduce el año de publicacion: ');
                        let menciones=readline.question('Introduce el numero de menciones: ');
                        let paginas=readline.questionInt('Introduce el numero de paginas del articulo: ');
                        let revista=readline.question('Introduce el titulo de la revista: ');
                        let editorial=readline.question('Introduce la editorial de la revista: ');
                        let factor_impacto=readline.question('Introduce el factor de impacto: ');
                        console.log('Articulo creado');

                        salir3=true;
                        //Crea un nuevo objeto de la clase conferencia y sube los datos al array
                        let nueva_revista = new CrearArticulo_revista(id_revista,titulo,autor,paginas,anyo_publicacion,menciones,revista,editorial,factor_impacto);
                        publicaciones.push(nueva_revista);

                    }else if(casee===3){
                        //Opcion para salir del programa
                        salir3=true;
                    }
                }
            }else if(caso === 4){
                //Opcion para salir del programa
                salir2=true;
            }
        }else if(opcion===2){
            //Opcion para modificar
            console.log('1)Editar autor');
            console.log('2)Editar articulo de revista');
            console.log('3)Editar articulo de conferencia');
            console.log('4)Editar patente');
            console.log('5)Salir');
            let encontrar2=false;
            let opcion2=readline.questionInt('Seleccione una opcion: ');
            if(opcion2===1){
                //Opcion para modificar un autor
                console.log('Introduzca solo los campos que desea cambiar, si no dejelos en blanco');
                let id=readline.question('Introduzca el id del autor que desea modificar');
                for(let i=0; i<publicaciones.length;i++){
                    let autor=publicaciones[i];
                    if(autor.id_user === id && autor.isAutor()===true){
                        let id_usuario=readline.question('Introduzca el id del usuario');
                        if(id_usuario===''){
                            id_usuario=autor.getId_user();
                        }
                        let name=readline.question('Introduzca el nombre del usuario');
                        if(name===''){
                            name=autor.getNombre();
                        }
                        let anyo_nacimiento=readline.question('Introduzca el id del usuario');
                        if(anyo_nacimiento===''){
                            anyo_nacimiento=autor.getAnyo_nacimiento();
                        }

                        //Elimina el anterior autor
                        publicaciones.splice(i);

                        let encontrar2=true;
                        if(encontrar2===true){
                            //Crea un objeto de la clase de autor y lo sube al array
                            let nuevo_autor = new CrearAutor(id_usuario,name,anyo_nacimiento);
                            publicaciones.push(nuevo_autor);
                        }

                    }
                }
            }else if(opcion2===2){
                //Opcion para modificar un articulo de revista
                console.log('Introduzca solo los campos que desea cambiar, si no dejelos en blanco');
                let id_revist=readline.question('Introduzca el id del articulo de revista que desea modificar');
                for(let i=0; i<publicaciones.length;i++){
                    let articulo_r=publicaciones[i];
                    if(articulo_r.id_revista === id_revist && articulo_r.isArticulo_revista()===true){
                        //Guarda en una variable lo que se pide en el console.log y si se deja en blanco accede al objeto y recupera la que estaba
                        let id_revista=readline.question('Introduzca el id del articulo de revista');
                        if(id_revista===''){
                            id_revista=articulo_r.getId_revista();
                        }
                        let titulo=readline.question('Introduzca el titulo del articulo de revista');
                        if(titulo===''){
                            titulo=articulo_r.getTitulo();
                        }
                        let autor=readline.question('Introduzca el autor/es del articulo de revista');
                        if(autor===''){
                            autor=articulo_r.getAutor();
                        }
                        let paginas=readline.question('Introduzca las paginas del articulo de revista');
                        if(paginas===''){
                            paginas=articulo_r.getPaginas();
                        }
                        let anyo_publicacion=readline.question('Introduzca el año de publicacion del articulo de revista');
                        if(anyo_publicacion===''){
                            anyo_publicacion=articulo_r.getAnyo_publicacion();
                        }
                        let menciones=readline.question('Introduzca las menciones del articulo de revista');
                        if(menciones===''){
                            menciones=articulo_r.getMenciones();
                        }
                        let revista=readline.question('Introduzca la revista del articulo de revista');
                        if(revista===''){
                            revista=articulo_r.getRevista();
                        }
                        let editorial=readline.question('Introduzca la editorial del articulo de revista');
                        if(editorial===''){
                            editorial=articulo_r.getEditorial();
                        }
                        let factor_impacto=readline.question('Introduzca el factor de impacto del articulo de revista');
                        if(factor_impacto===''){
                            factor_impacto=articulo_r.getFactor_impacto();
                        }
                        //Elimina el anterior articulo
                        publicaciones.splice(i);

                        let encontrar2=true;

                        if(encontrar2===true){
                            //Crea un nuevo objeto de la clase conferencia y sube los datos al array
                            let nueva_revista = new CrearArticulo_revista(id_revista,titulo,autor,paginas,anyo_publicacion,menciones,revista,editorial,factor_impacto);
                            publicaciones.push(nueva_revista);
                        }

                    }
                }

            }else if(opcion2===3){
                //Opcion para modificar un articulo de conferencia
                console.log('Introduzca solo los campos que desea cambiar, si no dejelos en blanco');
                let id_conf=readline.question('Introduzca el id del articulo de conferencia que desea modificar');
                for(let i=0; i<publicaciones.length;i++){
                    let articulo_c=publicaciones[i];
                    if(articulo_c.id_revista === id_conf && articulo_c.isArticulo_conferencia()===true){
                        //Guarda en una variable lo que se pide en el console.log y si se deja en blanco accede al objeto y recupera la que estaba
                        let id_conf=readline.question('Introduzca el id del articulo de revista');
                        if(id_conf===''){
                            id_conf=articulo_c.getId_conferencia();
                        }
                        let titulo=readline.question('Introduzca el titulo del articulo de conferencia');
                        if(titulo===''){
                            titulo=articulo_c.getTitulo();
                        }
                        let autor=readline.question('Introduzca el autor/es del articulo de conferencia');
                        if(autor===''){
                            autor=articulo_c.getAutor();
                        }
                        let paginas=readline.question('Introduzca las paginas del articulo de conferencia');
                        if(paginas===''){
                            paginas=articulo_c.getPaginas();
                        }
                        let anyo_publicacion=readline.question('Introduzca el año de publicacion del articulo de conferencia');
                        if(anyo_publicacion===''){
                            anyo_publicacion=articulo_c.getAnyo_publicacion();
                        }
                        let menciones=readline.question('Introduzca las menciones del articulo de conferencia');
                        if(menciones===''){
                            menciones=articulo_c.getMenciones();
                        }
                        let conferenc=readline.question('Introduzca la conferencia del articulo');
                        if(conferenc===''){
                            conferenc=articulo_c.getConferencia();
                        }
                        let lugar=readline.question('Introduzca el lugar de la conferencia del articulo');
                        if(lugar===''){
                            lugar=articulo_c.getLugar();
                        }
                        let libro_publi=readline.question('Introduzca el libro de publicacion del articulo de conferencia');
                        if(libro_publi===''){
                            libro_publi=articulo_c.getLibro_publicacion();
                        }
                        //Elimina el anterior articulo
                        publicaciones.splice(i);

                        let encontrar2=true;

                        if(encontrar2===true){
                            //Crea un nuevo objeto de la clase conferencia y sube los datos al array
                            let nueva_conferencia= new CrearArticulo_conferencia(id_conf,titulo,autor,paginas,anyo_publicacion,menciones,conferenc,lugar,libro_publi);
                            publicaciones.push(nueva_conferencia);
                        }
                    }
                }
            }else if(opcion2===4){
                //Opcion para editar patente
                console.log('Introduzca solo los campos que desea cambiar, si no dejelos en blanco');
                let name=readline.question('Introduzca nombre de la patente que desea modificar');
                for(let i=0; i<publicaciones.length;i++){
                    let patente=publicaciones[i];
                    if(patente.id_user === name && patente.isPatente()===true){
                        let nombre=readline.question('Introduzca elnombre de la patente');
                        if(nombre===''){
                            nombre=patente.getNombre();
                        }
                        let autores=readline.question('Introduzca los autores de la patente');
                        if(autores===''){
                            autores=patente.getAutor();
                        }
                        let anyo_publi=readline.question('Introduzca el año en el que la patente fue introducida');
                        if(anyo_publi===''){
                            anyo_publi=patente.getAnyo_publi();
                        }
                        let anyo_venci=readline.question('Introduzca el año en el que la patente fue introducida');
                        if(anyo_venci===''){
                            anyo_venci=patente.getAnyo_venci();
                        }

                        //Elimina la anterior patente
                        publicaciones.splice(i);

                        let encontrar2=true;

                        if(encontrar2===true){
                            //Crea un objeto de la clase de autor y lo sube al array
                            let nueva_patente = new CrearPatente(nombre,autores,anyo_publi,anyo_venci);
                            publicaciones.push(nueva_patente);
                        }
                    }
                }

            }else if(opcion2===5){
                //Opcion para volver atras
                salir2=true;
            }
        }else if(opcion===3){
            console.log('1)Eliminar autor');
            console.log('2)Eliminar articulo de revista');
            console.log('3)Eliminar articulo de conferencia');
            console.log('4)Eliminar patente');
            console.log('5)Volver');
            let option=readline.questionInt('Seleccione una opcion: ');
            if(option===1){
                //Opcion para eliminar autor
                let encontrar = false;
                let id=readline.questionInt('Introduzca el id del autor que desea eliminar: ');
                for(let i=0; i<publicaciones.length;i++){
                    let autor=publicaciones[i];
                    if(autor.id_user === id){
                        publicaciones.splice(i);
                        encontrar=true;
                        break;
                    }
                }
                if(encontrar){
                    console.log('Autor eliminado del sistema');
                }else{
                    console.log('El autor no ha podido ser eliminado del sistema');
                }
            }else if(option===2){
                //Opcion para eliminar articulo de revista
                let encontrar = false;
                let id_conferencia=readline.questionInt('Introduzca el id del articulo de revista que desea eliminar: ');
                for(let i=0; i<publicaciones.length;i++){
                    let conferencia=publicaciones[i];
                    if(conferencia.id_conferencia === id_conferencia){
                        publicaciones.splice(i);
                        encontrar=true;
                        break;
                    }
                }
                if(encontrar){
                    console.log('Articulo de revista eliminado del sistema');
                }else{
                    console.log('El articulo de revista no ha podido ser eliminado del sistema');
                }
            }else if(option===3){
                //Opcion para eliminar articulo de conferencia
                let encontrar = false;
                let id=readline.questionInt('Introduzca el id del articulo de conferencia que desea eliminar: ');
                for(let i=0; i<publicaciones.length;i++){
                    let autor=publicaciones[i];
                    if(publicaciones.id_user === id){
                        publicaciones.splice(i);
                        encontrar=true;
                        break;
                    }
                }
                if(encontrar){
                    console.log('Articulo de conferencia eliminado del sistema');
                }else{
                    console.log('El articulo de conferencia no ha podido ser eliminado del sistema');
                }
            }else if(option===4){
                //Opcion para eliminar una patente
                let encontrar = false;
                let clave_patente=readline.questionInt('Introduzca el nombre de la patente que desea eliminar: ');
                for(let i=0; i<publicaciones.length;i++){
                    let patente=publicaciones[i];
                    if(patente.nombre === clave_patente){
                        publicaciones.splice(i);
                        encontrar=true;
                        break;
                    }
                }
                if(encontrar){
                    console.log('Patente eliminada del sistema');
                }else{
                    console.log('La patente no ha podido ser eliminada del sistema');
                }
            }else if(option===5){
                //Opcion para salir del sistema
                salir2=true;
            }
        }else if(opcion===4){
            //Otras opciones
            console.log('1)Realizar busqueda');
            console.log('2)Producciones por autor');
            console.log('3)Calcular factor de impacto');
            console.log('4)Indice-h');
            console.log('5)Volver');
            let option3=readline.questionInt('Seleccione una opcion: ');
            if(option3===1){
                //Opcion para realizar busquedas
                let autor=readline.questionInt('Introduce el ID del autor');
                let anyo=readline.questionInt('Introduce el año de la publicacion');
                let tipo=readline.question('Introduce el tipo de publicacion(1)Patente,2)Conferencia,3)Revista)');
                let encontrar3=false;
                //Comprueba que hay autor, publicacion y tipo

                for(let publicacion of publicaciones){

                }
            }else if(option3===2){
                //Opcion para calcular las producciones/autor
                let autor=readline.question('Introduce el id del autor deseado');
                let fecha1=readline.questionInt('Introduce el año con el quieres empezar la busqueda');
                let fecha2=readline.questionInt('Introduce la fecha con la que quieres terminar la busqueda');

                let producciones=0;

                for(let publicacion of publicaciones){
                    if(publicacion.getAnyo_publicacion()>=fecha1 && publicacion.getAnyo_publicacion<=fecha2 && publicaciones.getAutor()===autor){
                        producciones=producciones+1;
                    }
                }

            }else if(option3===3){
                //Opcion para calcular el factor de impacto
                let autor=readline.question('Introduce el id del autor deseado');
                let fecha1=readline.questionInt('Introduce el año con el quieres empezar la busqueda');
                let fecha2=readline.questionInt('Introduce la fecha con la que quieres terminar la busqueda');

                let result=0;

                for(let publicacion of publicaciones){
                    if(publicacion.getAnyo_publicacion()>=fecha1 && publicacion.getAnyo_publicacion<=fecha2 && publicaciones.getAutor()===autor){
                        result=result+publicacion.getFactor_impacto();
                    }
                }
                console.log('El factor de impacto del autor'+ autor +' entre los años '+fecha1+' y '+fecha2+' es: '+result);
            }else if(option3===4){
                //Opcion para calcular el indice-h

                let autor=readline.question('Introduce el id del autor que quieras buscar');
                let citaciones=[];
                //bloque de codigo que añade el numero de menciones según el autor indicado al array 'citaciones'
                for(let publicacion of publicaciones){
                    if(publicacion.isArticulo_revista()===true || publicacion.isArticulo_conferencia()===true){
                        //Si es un articulo llega a este punto ya que solo hay citaciones en estos artículos
                        if (publicacion.getAutor()===autor){
                            citaciones.push(publicacion.getMenciones());
                        }
                    }
                }
                //Ordena de mayor a menor los arrays
                citaciones.sort(ordenarAsc);

                for(let i=0;i<citaciones.length;i++){
                    if(i>citaciones[i]){
                        console.log('El indice-h del autor '+autor+' es: '+(i-1));
                    }
                }
            }else if(option3===5){
                //Opcion para Volver
                salir2=true;
            }
        }
    }
}

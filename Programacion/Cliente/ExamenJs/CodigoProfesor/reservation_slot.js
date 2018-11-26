/* PON EL CODIGO DE LA CLASE A PARTIR DE AQUÍ */
/**
 * Clase para reserva de aulas
 */
class ReservationSlot {
    constructor(autor, aula, fecha, horaIni, duracion, descripcion) {
        this.autor = autor;
        this.aula = aula;
        this.fecha = fecha;
        this.horaIni = horaIni;
        this.duracion = duracion;
        this.descripcion = descripcion;


        //Separa la hora final
        this.horaFinal_separado = this.getEndTime().split(":");
        this.horaFinalSeparado=parseInt(this.horaFinal_separado[0]);
        this.minFinalSeparado=parseInt(this.horaFinal_separado[1]);

        //Comprueba que la hora y la duracion este en el rango indicado
        this.hora_separado = this.horaIni.split(":");
        this.horaSeparado=parseInt(this.hora_separado[0]);
        this.minSeparado=parseInt(this.hora_separado[1]);

        if (this.horaSeparado > 21 || this.horaSeparado < 8) {
            throw Error('La hora introducida no es valida');

        }
        if(this.duracion>180 || this.duracion<0){
            throw Error('La duración de la reserva no puede ser mas de 180 minutos');
        }


    }

    //Funcion que calcula la hora de finalizacion de la reserva
    getEndTime(){
        let final;
        switch(this.duracion) {
            case 60:
                this.horaSeparado=this.horaSeparado+1;/*
                this.horaSeparado = this.horaSeparado.toString();
                this.minSeparado = this.minSeparado.toString();*/
                final=this.horaSeparado +':'+this.minSeparado;
                return final.toString();

            case 120:
                this.horaSeparado=this.horaSeparado+2;
                final=this.horaSeparado +':'+this.minSeparado;
                return final.toString();
            case 180:
                this.horaSeparado=this.horaSeparado+2;
                this.minSeparado=this.minSeparado+30;
                if(this.minSeparado>60){
                    this.minSeparado=this.minSeparado-60;
                    this.horaSeparado=this.horaSeparado+1;
                }
                final=this.horaSeparado +':'+this.minSeparado;
                return final.toString();
        }
    }

    /**
     * Funcion que comprueba si se solapan dos reservas
     * @param reserva1
     * @param reserva2
     */
    static overlaps(reserva1,reserva2){
        let disponible = true;
        if(reserva1.this.aula===reserva2.this.aula){
            disponible = false;
        }
        if(reserva2.this.horaSeparado>reserva1.this.horaSeparado && reserva2.this.horaSeparado<reserva1.this.horaFinalSeparado){
            if(reserva2.this.minSeparado>reserva1.this.minSeparado && reserva2.this.minSeparado<reserva1.this.minFinalSeparado){
                disponible=false;
            }
        }
        if(reserva1.this.horaSeparado>reserva2.this.horaSeparado && reserva1.this.horaSeparado<reserva2.this.horaFinalSeparado){
            if(reserva1.this.minSeparado>reserva2.this.minSeparado && reserva1.this.minSeparado<reserva2.this.minFinalSeparado){
                disponible=false;
            }
        }
    return disponible;
    }
}

let reserva = new ReservationSlot('yo',3,'23-10-1999','9:00',60,'hola esto es una reserva');
console.log('Horafinal '+reserva.getEndTime());
/* FIN DEL CÓDIGO DE LA CLASE */

/* PON EL CÓDIGO DEL EJERCICIO 3 A PARTIR DE AQUÍ */

function getMostPopularUser(reserva){
    let map = new Map();

    for(let i=0;i<reserva.autores.length();i++){
        let autor=reserva.autor;
        if(map.has(autor)){
            let contador = map.get(autor);
            map.set(autor, contador + 1);
        }else{
            map.set(autor,1);
        }
    }
    //Selecciona el autor con mas reservas
    let masPopular=-1;

    if([].length) {
        for(let i=0;i<map.length();i++){
            if(map.get(i)>masPopular){
                masPopular=map.get(i);
            }
        }
    } else {
        masPopular=undefined;
    }
    return masPopular;
}

/* FIN DEL EJERCICIO 3 */

/* PON EL CÓDIGO DEL EJERCICIO 4 A PARTIR DE AQUÍ */


/* FIN DEL EJERCICIO 4 */

if(typeof(module) !== 'undefined' && module.exports){
    exports.ReservationSlot = ReservationSlot;
    exports.getMostPopularUser = getMostPopularUser;
    exports.delayReservations = delayReservations;
    exports.getReservationsFromUser = getReservationsFromUser;
}

if (document.body.hasChildNodes()) {
    /* PON AQUÍ EL CÓDIGO DEL EJERCICIO 5 */
    let reserva = document.body.firstElementChild.tBodies[0];

    let row=reserva.rows[3];
    let content=row.cells[4];
    content.style='background-color:red';

    let row1=reserva.rows[5];
    let content1=row1.cells[4];
    content1.style='background-color:red';

    let row2=reserva.rows[7];
    let content2=row2.cells[4];
    content2.style='background-color:red';
/*
    for(let i=0;i<=reserva.rows.length;i++){
        let row=reserva.rows[i];
        let content=row.cells[4];
        content.style='background-color:red';
        console.log(content);

    }*/
    // Pon aquí el código para cambiar la tabla
    
    //Pon aquí tu código para cambiar el código del párrafo, de forma que muestre el usuario que más reservas ha realizado

    let texto = document.body.lastChild.previousSibling.previousSibling;

    texto.textContent='Josep Lajara 10';
    console.log(texto.textContent);
    /* FIN DEL EJERCICIO 5 */
}


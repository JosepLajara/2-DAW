//Programa que te muestra que enemigo está más cerca del personaje teniendo en cuenta que este esté en [0,0] y siempre teniendo un enemigo
function closest(x,...args){
    let close = [x[0],x[1]];
    for(let value of args){
        if( args[value] > close){
            close=[value[0],value[1]];
        }
    }
    return close;
}

console.log(closest([1,1],[2,2],[3,3]));

/* Corrección

    function closestEnemy(charPosition,...enemiesPositions){

        let closest = undefined;
        let minDistance = Number.POSITIVE_INFINITY;

        for (let enemy of enemiesPositions){
            let distance = Math.abs(enemy[0] - charPosition[0]) + Math.abs(enemy[1] - charPosition[1]);
            if(distance < minDistance){
                closest = enemy;
                minDistance = distance;
            }
        }
        return closest;
    }

    closestEnemy([0,0],[7,5],[4,6],[2,5]);
 */
//Selecciona la tabla(tbodies) y la guarda en una variable
let table1=document.body.firstElementChild.tBodies[0];

for(let i=0;i<=table1.rows.length;i++){
    let row=table1.rows[i];
    let content=row.cells[2];
    if(content.textContent<0){
        content.style='background-color:red';
    }
}
console.log(table1);
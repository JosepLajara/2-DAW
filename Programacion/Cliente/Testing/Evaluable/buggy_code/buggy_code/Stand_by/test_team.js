//Importar ficheros
const Team = require('../app/data/team.js').Team;

//Tests
test('TEAM TEST "HAS PLAYER"',()=>{
    //Desarrolla un caso de test para el caso en el cual el parámetro proporcionado es otra fracción

    //Crear fracciones y sumarlas
    let team=new Team('Equipo 1');

    expect(team.hasPlayer()).toBe(false);

});
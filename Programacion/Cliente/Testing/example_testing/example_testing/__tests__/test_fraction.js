const Fraction = require('../fraction').Fraction;

test('Constructor error', ()=>{
    expect(()=>new Fraction(1.2,4)).toThrow(Error);
});

test('Constructor error II', ()=>{
    expect(()=>new Fraction(1,4.3)).toThrow(Error);
});

test('Testing simplify I',()=>{
    let fr = new Fraction(4,2);
    expect(fr.getNumerator()).toBe(2);
    expect(fr.getDenominator()).toBe(1);
});

test('Testing simplify II',()=>{
    let fr = new Fraction(3,5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
});

test('Tests done',()=>{
    //Apartado 1
    expect(Fraction.mcd(4,3)).toBe(1);
    //Apartado 2
    expect(Fraction.mcd(22,30)).toBe(2);
    //Apartado 3
    expect(Fraction.mcd(3,9)).toBe(3);
    expect(Fraction.mcd(9,3)).toBe(3);
    //Apartado 4
    expect(Fraction.mcd(6,9)).toBe(3);
    //Apartado 5
    expect(()=>Fraction.mcd(1.5,5)).toThrowError(Error);
});

test('MCM TEST 1',()=>{
    //Desarrolla un caso de test para probar el caso cuando el mínimo común múltiplo es uno de los dos parámetros.
    expect(Fraction.mcd(6,3)).toBe(3);
});

test('MCM TEST 2',()=>{
    //Desarrolla un caso de test para probar el caso en el cual el mínimo común múltiplo es la multiplicación de ambosmnúmeros.
    expect(Fraction.mcd(2,3)).toBe(1);
});

test('MCM TEST 3',()=>{
    //Desarrolla un caso de test para probar el caso en el cual el mínimo común múltiplo está entre el máximo de los dos parámetros y la multiplicación de ambos (no incluidos).
    expect(Fraction.mcd(8,14)).toBe(2);
});

test('MCM TEST 4',()=>{
    //Desarrolla un caso de test para probar el caso especial donde el primer parámetro no es un entero
    expect(() => Fraction.mcd(1.5,5)).toThrowError(Error);
});

test('MCM TEST 5',()=>{
    //Desarrolla un caso de test para probar el caso especial donde el segundo parámetro no es un entero
    expect(() => Fraction.mcd(5,1.5)).toThrowError(Error);
});


test('ADD TEST 1',()=>{
    //Desarrolla un caso de test para el caso en el cual el parámetro pasado como valor es un entero

    //Crear fracciones y sumarlas
    let fr1=new Fraction(1,3);
    let fr2=new Fraction(2,4);
    let result=fr1.add(fr2);
    //Comprobar resultado
    expect(result.getNumerator()).toBe(5);
    expect(result.getDenominator()).toBe(6);

});
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

test('',()=>{

})
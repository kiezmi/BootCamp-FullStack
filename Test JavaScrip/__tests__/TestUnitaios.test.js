//console.log('Funciona!');

const expect = require('expect');
describe('TDD Expect (Jest)', () => {
    describe('Funcion toBe', () => {
        it('Deberia sumar 1+1=2', () => {
            expect(1 + 1).toBe(2);

        });
        test('Comprueva el type of', () => {
            expect(typeof '1').toBe('string');
        });
        test('Comprueba con negacion', () => {
            // this.timeout = 1000;
            expect([10, 11][0]).not.toBe(11);
        });
    });

    describe('toEqual', () => {
        describe('En arrays', () => {
            test('array completamente iguales', () => {
                const arr = [10, 10, 'string', {}];
                expect(arr).toEqual([10, 10, 'string', {}]);
                expect(arr).not.toEqual([10, 10, 'string', {
                    name: 'Kiezmi'
                }]);
            });

        });

        describe('En objetos', () => {
            test('Objetos completamente iguales', () => {
                const obj = {
                    name: 'Kiezmi',
                    job: 'Programer'
                };
                expect(obj).toEqual({
                    name: 'Kiezmi',
                    job: 'Programer'
                });
                expect(obj).not.toEqual({
                    name: 'Kiezmi',
                    job: 'Programmer'
                });
            });
        });
    });
    test('.toHaveLength()', () => {
        const arr = [];
        expect(arr).toHaveLength(0);
        expect(arr).not.toHaveLength(1);
    });
    describe('.toBeTruthy(),toBeFalsy()', () => {
        test('Si daria true en in if', () => {
            expect(true).toBeTruthy();
            expect(undefined).not.toBeTruthy();
            expect(null).not.toBeTruthy();
        });
        test('Si daria false en in if', () => {
            expect(false).toBeFalsy();
            expect(null).toBeFalsy();
            expect(-3).not.toBeFalsy();
        });
    });
    describe('Comprobacion de numeros', () => {
        const numero = 100;
        it('.toBeGreaterThan() .toBeGreaterThanOrEqual()', () => {
            expect(numero).toBeGreaterThan(99);
            expect(numero).toBeGreaterThanOrEqual(100);
            expect(numero).not.toBeGreaterThan(101);
        });
        it('.toBeLessThan() .toBeLessThanOrEqual()', () => {
            expect(numero).toBeLessThan(101);
            expect(numero).toBeLessThanOrEqual(100);
            expect(numero).not.toBeLessThan(99);
        });
    });
    it('.toBeCloseTo()', () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3, 1);
    });
    test('.toBeDefined() .toBeUndefined', () => {
        let miVariable;
        expect(miVariable).not.toBeDefined();
        expect(miVariable).toBeUndefined();

        miVariable = "Estoy definida";
        expect(miVariable).toBeDefined();
        expect(miVariable).not.toBeUndefined();

    });
    test('.toMatch(regExp', () => {
        let miCadena = 'Cadena a evaluar n12';

        expect(miCadena).toMatch(/^Cadena (a )?[a-z,0-9, ]+$/);

        miCadena = 'Cadena evaLuar n12';

        expect(miCadena).toMatch(/^Cadena (a )?[a-z,0-9,A-Z ]+$/)
    });
    describe('Objetos', () => {
        const obj = {
            name: 'kiezmi',
            job: 'Programmer',
            x: 'x'
        }
        test('toMatchObject()', () => {

            expect(obj).toMatchObject({
                name: 'kiezmi',
                x: 'x'
            });
            expect(obj).not.toMatchObject({
                name: 'kiezmi',
                edad: '27'
            });
            expect(obj).not.toMatchObject({
                name: 'kiezmi2',
                x: 'x'
            });
        });
        test('Array .toMatchObject', () => {
            const arr = [{
                foo: 'bar'
            }, {
                bar: 1
            }];

            expect(arr).toMatchObject([{
                foo: 'bar'
            }, {
                bar: 1
            }]);
            expect(arr).not.toMatchObject([{
                foo: 'bar'
            }]);
        });
        test('.toHabeProperty()', () => {
            expect(obj).toHaveProperty('name');
            expect(obj).not.toHaveProperty('age');
        });

    });
});
let pacientes;
beforeAll(()=>{
    console.log('1 - beforeAll');
});

beforeEach(()=>{
    console.log('1 - beforeEach');
    pacientes = [
        {"id": 1,"name": "Kiezmi"},
        {"id": 2,"name": "Juan"}
    ];
});

afterAll(()=>{
    console.log('1 - afterAll');
});

afterEach(()=>{
    console.log('1 - afterEach');
});

describe('Seed test', () => {
    beforeAll(()=>{
        console.log('2 - beforeAll');
    });
    
    beforeEach(()=>{
        console.log('2 - beforeEach');
    });
    
    afterAll(()=>{
        console.log('2 - afterAll');
    });
    
    afterEach(()=>{
        console.log('2 - afterEach');
    });
    //console.log(pacientes);

    test.only('Borramos el ultimo usuario', () => {
        pacientes.pop();
        expect(pacientes).toEqual([{"id": 1,"name": "Kiezmi"}]
        );
    })
    test.skip('Solamente quiero el paciente 2', () => {
       console.log(pacientes)
    })

    //COn el .skip ejecutas todos menos eso y con el .only solo ejecuta los que tengan esa propiedad

})
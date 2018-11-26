describe('Mocks de funciones', () => {
    test('.mockName().getMockName()', () => {
        const mock = jest.fn();

        mock.mockName('miFuncion');
        expect(mock.getMockName()).toBe('miFuncion');

        //expect(mock).toHaveBeenCalled(1);
    });
    test('.toHabeBeenCallerWith()', () => {
        const mock = jest.fn();
        mock.mockName('miFuncion2');
        mock(10);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(10);
        expect(mock).not.toHaveBeenCalledWith(11);

        expect(mock).toHaveBeenCalledWith(expect.any(Number));

        mock('hola');
        expect(mock).toHaveBeenCalledWith(expect.any(String));
        expect(mock).toHaveBeenCalledWith(expect.any(Number));
        expect(mock).toHaveBeenLastCalledWith(expect.any(String));

    });

    test('.toHaveBeenCalledTime()', () => {
        const mock = jest.fn();

        expect(mock).toHaveBeenCalledTimes(0);
        mock();
        expect(mock).toHaveBeenCalledTimes(1);
        mock();
        expect(mock).toHaveBeenCalledTimes(2);


    });

    test('.mockReturnValueOnce()', () => {
        const mock = jest.fn();

        mock.mockReturnValueOnce(10)
            .mockReturnValueOnce('hola');

        expect(mock()).toBe(10);
        expect(mock()).toBe('hola');
        expect(mock()).toBe(undefined);
        expect(mock()).toBeFalsy;
        expect(mock()).toBeUndefined;
        expect(mock()).not.toBeTruthy;
        expect(mock()).not.toBedefined;

    })

    test('.mockReturnValue()', () => {
        const mock = jest.fn();
        mock.mockReturnValueOnce(false)
            .mockReturnValue(true);

        expect(mock()).toBe(false);
        expect(mock()).toBe(true);

    });

    test('jest.fn().mock.calls', () => {
        const mockFilter = jest.fn();

        mockFilter.mockReturnValueOnce(true)
            .mockReturnValueOnce(false);

        const result = [11, 22].filter(mockFilter);
        //(value, index, [array])
        // console.log(mockFilter.mock.calls)
        expect(result).toEqual([11]);
        expect(mockFilter.mock.calls).toEqual([
            [11, 0, [11, 22]],
            [22, 1, [11, 22]]
        ]);
    })
    test('Mock libreria de moment.js', () => {
        const moment = jest.fn(require('moment'));

        console.log(moment('1991-02-22').format('dddd DD/MM/YY'));

        expect(moment).toHaveBeenCalled();
        expect(moment).toHaveBeenCalledTimes(1);
        expect(moment).toHaveBeenCalledWith('1991-02-22');

    })
    test('.mock.instances', () => {
        let miMock = jest.fn();
        miMock.mockImplementation(function () {
            this.nombre = 'Test';
            this.miFuncion = jest.fn((str = 'Funciona') => {
                return 'bar';
            });
        })
        const instanciaMock = new miMock();
        console.log(instanciaMock.nombre);
        console.log(instanciaMock.miFuncion('Prueba'));

        expect(miMock.mock.instances.length).toBe(1);
        expect(miMock.mock.instances[0]).toBe(instanciaMock);
        expect(miMock.mock.instances[0].miFuncion).toHaveBeenCalled();

        expect(miMock.mock.instances[0].miFuncion).toHaveBeenCalledWith('Prueba');
        expect(miMock.mock.instances[0].miFuncion).not.toHaveBeenCalledWith('Funciona');
        expect(miMock.mock.instances[0].nombre).toBe('Test');
    })
    test('.mockImplementationOnce', () => {
        const mock = jest.fn();

        mock.mockImplementationOnce(callback => callback(null, true))
            .mockImplementationOnce(callback => callback(null, false))
            .mockImplementationOnce(callback => callback(null, 'Respuesta normal'));

        expect(mock((error, respuesta) => respuesta)).toBe(true);
        expect(mock((error, respuesta) => respuesta)).toBe(false);
        expect(mock((error, respuesta) => respuesta)).toBe('Respuesta normal');
    })
})
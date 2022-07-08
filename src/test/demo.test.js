import { getSaludo, getUser } from "./function";

describe( 'test demo', () =>{

    test('test 1 - Numero Igual', () =>{
        expect(1 == 1).toBe(true);
    })
    
    test('test 2 - Mensaje Igual', () =>{
        //1 arrange
        const message1 = 'hola';

        //2 act
        const message2 = message1.trim();

        //3 assert
        expect(message1).toBe(message2);
    })

    test('test 3. getNombre', () =>{
        
        const nombre = 'Gonza';

        const message = getSaludo(nombre);

        expect(message).toBe(`hola ${nombre}`)
    })

    test ('Test 4 - getUser', () =>{
        const testUser ={
            uid: 'ABC123',
            username: 'agosto1995'
        }
        const user = getUser();

        expect(testUser).toEqual(user);
        
    })
});
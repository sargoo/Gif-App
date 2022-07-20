import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGif } from "../../hooks/UseFetchGif";

describe('Test en hook UseFetchGif',() =>{

    test('Debe regresar el estado inicial ', () =>{

        const {result} = renderHook( () => useFetchGif('One Punch'));

        console.log(result);

    const {gifs, loading} = result.current;


        expect(gifs.length).toBe(0);
        expect(loading).toBeTruthy();

     });

    test('Debe retornar un arreglo de imagenes y el loading en flase', async() =>{

        const {result} = renderHook( () => useFetchGif('One Punch'));
        console.log(result);
        await waitFor(
            
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
            
        );

        const {gifs, loading} = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

     });
});
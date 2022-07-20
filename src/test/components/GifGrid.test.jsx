import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/UseFetchGif";

jest.mock("../../hooks/UseFetchGif");

describe('Test en <GifGrid />', () =>{

    const category = "Star wars";

    test('Debe mostrar inicialmente el mensaje cargando', () =>{

        useFetchGif.mockReturnValue({
            gifs: [],
            loading: true,
        });

        render(<GifGrid  category={category}/>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

        screen.debug();
    });

    test('Debe mostrar items, cuando se cargan las imagenes en useFetchGif', () =>{

        useFetchGif.mockReturnValue({
            gifs: [{id: "1", title: "Titulo 1", url: "https://media1.giphy.com/media/3o7btLqYqjtQQqQqZS/giphy.gif"}],
            loading: false,
        });

        render(<GifGrid  category={category}/>);
        expect(screen.getByText('Titulo 1')).toBeTruthy();
        expect(screen.queryByText('Cargando...')).toBeFalsy();

        screen.debug();

    });

});
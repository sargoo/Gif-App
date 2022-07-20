import { render,screen } from "@testing-library/react";
import { GetItem } from "../../components/GetItem";

describe('Test en <GetItem />', () => {

    const title = 'Star Wars';
    const url = 'http://www.starwar.com/starwar.jpg';
    
    // test('Debe coincidir con el snapshot', () => {

    //     const { container } = render(<GetItem title={title} url={url}/>);

    //     expect(container).toMatchSnapshot();

    // });

    test('Debe encontrar un texto', () => {

        const {getByText} = render(<GetItem title={title} url={url}/>);

        expect(getByText(title)).toBeTruthy();

    });

    test('Debe encontrar por test-id', () => {
        
        const {getByTestId} = render(<GetItem title={title} url={url}/>);

        expect(getByTestId('test-title').innerHTML).toContain(title);

     });

     test('Debe mostrar URL y ALT', () => {

        render(<GetItem title={title} url={url}/>); 
        
        //screen.debug();
        


        const {src,alt} = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toContain('gif');
        

     });
});
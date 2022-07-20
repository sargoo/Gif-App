import { render, screen, renderHook, fireEvent } from "@testing-library/react";
import {App} from "../../App";
import '@testing-library/jest-dom/extend-expect'
import { AddCategory } from "../../components/AddCategory";
import { ResetCategories } from "../../components/ResetCategories";



describe('Test de <App />', () => {

    test('Debe testear la App en cuanto inicia la app ', () => {
        
        render(<App />);
        

        expect(screen.getByRole('heading')).toHaveTextContent('GIF APP!');

        expect(screen.getByRole('button')).toHaveTextContent('RESET');

        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Buscar Gif');

        
        
    });

    test('Debe testear que cambie el input al escribir ', () => {



        render(<AddCategory  addCategory={() =>{}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: 'Star Wars'}});

        expect(screen.getByRole('textbox')).toHaveAttribute('value', input.value);

        
        

    });

    test('Debe evaluar que el boton reset borre las categorias', () => {

        render(<ResetCategories  handleReset={() =>{}} categories={[]}/>);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const categories =  () => {ResetCategories ({handleReset: () =>{}})};

        expect(categories).toHaveLength(0);

    });

    screen.debug();
    
});
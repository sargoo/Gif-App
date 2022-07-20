import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test en <AddCategory />', () => {

    test('Debe cambiar el valor del input', () => {

        render(<AddCategory  addCategory={() =>{}}/>,);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: 'Star Wars'}})

        expect(input.value).toBe('Star Wars');
    }); 

    test('Debe llamar a la funcion addCategory si el input tiene valor', () =>{

       const inputValue = 'Star Wars'; 

       const addCategory = jest.fn();

       render(<AddCategory addCategory = {addCategory} />);

       const input = screen.getByRole('textbox');
       const form = screen.getByRole('form');

       fireEvent.change(input, {target: {value: inputValue}});

       fireEvent.submit(form);

       screen.debug();

       expect(input.value).toBe('');

       expect(addCategory).toHaveBeenCalled();
       
       expect(addCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No se debe llamar a la funcion addCategory si el input esta vacio', () =>{

        const inputValue = ''; 

       const addCategory = jest.fn();

       render(<AddCategory addCategory = {addCategory} />);
       const input = screen.getByRole('textbox');
       const form = screen.getByRole('form');

       fireEvent.change(input, {target: {value: inputValue}});

       fireEvent.submit(form);
        
       /// UNA FORMA DE HACERLO:
       expect(addCategory).toHaveBeenCalledTimes(0);

       /// OTRA FORMA:
       expect(addCategory).not.toHaveBeenCalledWith(inputValue);



    });

});
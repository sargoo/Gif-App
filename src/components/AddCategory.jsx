import React, { useState } from "react";

export const AddCategory = ({addCategory}) =>
{
    const  [inputValue, setInputValue] = useState ('');

    const handleInputValue = (e) =>{
        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addCategory(inputValue.trim());
        setInputValue('');

    }



    return(
        <>
            <form onSubmit={handleSubmit}>
            <input  type="text" 
                    placeholder="Buscar Gif"
                    value={inputValue}
                    onChange ={(e) => {handleInputValue(e)}}
                />
            </form>
        </>
    );
}
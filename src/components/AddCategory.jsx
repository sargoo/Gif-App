import PropTypes  from "prop-types";
import React, { useState } from "react";

export const AddCategory = ({addCategory}) =>
{
    const  [inputValue, setInputValue] = useState ('');

    const handleInputValue = (e) =>{
        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        addCategory(inputValue.trim());
        setInputValue('');

    }



    return(
        <>
            <form onSubmit={handleSubmit} aria-label = 'form'>
            <input  type="text" 
                    placeholder="Buscar Gif"
                    value={inputValue}
                    onChange ={(e) => {handleInputValue(e)}}
                />
            </form>
        </>
    );
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
};
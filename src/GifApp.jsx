import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp =() => {

    const [categories, setCategories] = useState([]);

    const handleAddCategory = (value) => {
        setCategories([value, ...categories]);
    };

    return (
         <>
            <h1>GifApp</h1>

            {/*Input*/}
            <AddCategory addCategory = { handleAddCategory }/>
            {/* listado de Gif*/ }

            {categories.map(category => (
            <GifGrid key={category} category = {category}/> 
            ))}
        </>
    );  
};


import { useState } from 'react'
import {AddCategory}  from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { ResetCategories } from './components/ResetCategories';



const  App = ()  => {

  const [categories, setCategories] = useState ([]);
  const HandleAddCategory = (value) =>{
    setCategories([value,...categories]);
  }

  const handleReset = (e) => (
    setCategories(categories.filter(category => category.categories === e.target.id))
    );




  return (
    <>
      <h1> GIF APP!</h1>
      <ResetCategories  handleReset={handleReset} categories={categories}/> 
      <AddCategory  addCategory = {HandleAddCategory}/>
      {
        categories.map(   cat => ( <GifGrid  key= {cat} category = {cat}/> ))
      }
      
    </>
  );
}

export default App

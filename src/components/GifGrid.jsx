import { useFetchGif } from "../hooks/UseFetchGif";
import { GetItem } from "./GetItem";
import { RemoveCategory } from "./RemoveCategory";
import  PropTypes  from 'prop-types';


export const GifGrid = ({category}) =>{

    const handleFilterCategory = (e) =>{
        setGifs(gifs.filter(gif => gif.category !== e.target.id));        
    }

    const handleFilterGif = (e) =>{
        setGifs(gifs.filter(gif => gif.id !== e.target.id));
    }

    const {gifs, loading, setGifs} = useFetchGif(category);

    
    return(
        <>
             
            <h3> {category}</h3> 
            <RemoveCategory category={category} handleFilterCategory={handleFilterCategory}/>
            <div className="card-grid">
            {
                loading? <h2> Cargando...</h2> : gifs.map( gif => (<GetItem  key={gif.id} {...gif} handleFilterGif ={handleFilterGif}/>))
            }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


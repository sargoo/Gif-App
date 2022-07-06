import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    
  const {gif, loading} = useFetchGif(category);


  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid" >
          {/*Desplegar listado*/}
          {
            loading ? <h2>Cargando...</h2> :gif.map(gif=> <GifItem key={gif.id} {...gif}/>
          )}
        </div>
      </>
  )
}
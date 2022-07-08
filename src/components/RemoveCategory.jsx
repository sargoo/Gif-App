export const RemoveCategory = ({category, handleFilterCategory} ) =>{
   
    return(
        <>
            <div className="boton">
                <button onClick={handleFilterCategory} id={category}>Quitar {category} </button>
            </div>
        </>
    );
}
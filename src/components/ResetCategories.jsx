export const ResetCategories = ({handleReset, categories}) =>{

    return(
        <>
            <div className="boton">
                <button onClick={handleReset} id = {categories}> RESET</button>
            </div>
        </>
    );
}
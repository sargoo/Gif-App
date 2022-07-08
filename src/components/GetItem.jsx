import { ReactPropTypes } from 'prop-types';

export const GetItem = ({url, title, id, handleFilterGif}) =>{

    return (
        <div className="card">
            <img src={url} alt="gif"></img>
            <p> {title}</p>
            <div className="boton">
                <button onClick={handleFilterGif} id={id}> Quitar gif</button>
            </div>
        </div>
    );
}

GifItem.propTypes = {
    title: ProTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
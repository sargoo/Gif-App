import PropTypes  from 'prop-types';

export const GetItem = ({url, title, id, handleFilterGif}) =>{

    return (
        <div className="card">
            <img src={url} alt="gif"></img>
            <p data-testid = 'test-title'> {title}</p>
            <div className="boton">
                <button onClick={handleFilterGif} id={id}> Quitar gif</button>
            </div>
        </div>
    );
}

GetItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
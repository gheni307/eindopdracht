import React from 'react';
import './movie.css';

function Movie({image, name, year, type, key}) {
    return (
        <div className='select-movie' key={key}>
            <h3>{name}</h3>
            <h3>{year}</h3>
            <h3>{type}</h3>
            {image === "N/A" ? <p>er is geen foto in data</p> : <img src={image} alt={name}/>}
        </div>
    );
}

export default Movie;
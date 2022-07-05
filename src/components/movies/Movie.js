import React from 'react';
import './movie.css';

function Movie({image, name, year, type, key, movieListDisabled, addMovies}) {
    return (
        <div className='select-movie' key={key}>
            <h3>{name}</h3>
            <h3>{year}</h3>
            <h3>{type}</h3>
            {image === "N/A" ? <p>er is geen foto in data</p> : <img src={image} alt={name}/>}
            <button
                type='button'
                disabled={movieListDisabled}
                onClick={addMovies}
            >
                add to addList
            </button>
        </div>
    );
}

export default Movie;
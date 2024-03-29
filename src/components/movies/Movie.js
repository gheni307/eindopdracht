import React from 'react';
import './movie.css';

function Movie({image, name, year, type, myKey, movieListDisabled, addMovies}) {
    return (
        <div className='select-movie'>
            {console.log(myKey)}
            <h3>{name}</h3>
            <h3>{year}</h3>
            <h3>{type}</h3>
            {image === "N/A" ? <p>er is geen foto in data</p> : <img src={image} alt={name}/>}
            <button
                type='button'
                disabled={movieListDisabled}
                onClick={addMovies}
            >
                toevoegen aan favorieten
            </button>
        </div>
    );
}

export default Movie;
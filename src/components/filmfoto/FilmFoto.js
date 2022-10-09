import React from 'react';
import './filmfoto.css';

function FilmFoto({foto, id}) {
    return (
        <div id={id}>
            <img src={foto} alt='Film-foto' className='photo'/>
        </div>
    );
}

export default FilmFoto;
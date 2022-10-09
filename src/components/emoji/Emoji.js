import React from 'react';
import './emoji.css'
function Emoji({emoji, id}) {
    return (
        <div id={id}>
            <img id='im' src={emoji}/>
        </div>
    );
}

export default Emoji;
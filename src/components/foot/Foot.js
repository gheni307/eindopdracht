import React from 'react';
import './foot.css'

function Foot({aders, jaar, contact}) {
    return (

        <div id='foot1'>
            <h4>{aders}</h4>
            <h4>{jaar}</h4>
            <h4>{contact}</h4>
        </div>

    );
}

export default Foot;
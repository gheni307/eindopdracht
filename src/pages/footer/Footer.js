import React from 'react';
import './footer.css'
import Foot from "../../components/foot/Foot";

function Footer() {
    return (
        <div className='foot'>
            {<Foot aders={'informatie:'} jaar={'© 2022'} contact={'tel:'}/>}
        </div>
    );
}

export default Footer;
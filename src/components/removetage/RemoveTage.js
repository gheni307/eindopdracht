import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

function RemoveTage({value}) {
    const {movieRemove} = useContext(GlobalContext);
    return (
        <button
        type='button'
        onClick={()=>movieRemove(value.imdbID)}
        >verwijderen</button>
    );
}

export default RemoveTage;
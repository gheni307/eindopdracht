import React, { useContext, useEffect } from 'react';
import {GlobalContext} from "../../context/GlobalState";
import './favorite.css'
import RemoveTage from "../../components/removetage/RemoveTage";
function Favorite() {
    const { movieList } = useContext(GlobalContext);
    useEffect(()=>{
        window.localStorage.removeItem("movieList")
    },[])

    return (

            <div >
            { movieList.map((value, index)=>{
                return <div className="added-list" key={index}><h3>{value.Title}</h3>
                    <h3>{value.Year}</h3>
                    <h3>{value.Type}</h3>
                    {value.Poster === "N/A" ? <p>er is geen foto in data</p> : <img src={value.Poster} alt={value.Title}/>}
                    <RemoveTage value={value}/>
                </div>
            })}
            </div>

    );
}

export default Favorite;
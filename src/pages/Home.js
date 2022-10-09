import React, {useContext} from 'react';
import './home.css'
import {AuthContext} from "../context/AuthContext";
import Emoji from "../components/emoji/Emoji";

function Home() {
    const { isAuth } = useContext(AuthContext);
    return (
        <section className='home-body'>
            <div className='home'>
                <h1 className='home-text'>Welkom bij de filmclub<Emoji emoji='../Emojione_1F60E.svg.png'/></h1>
                <p className='home-text'>Wil je weten of je favoriete film is gemaakt in een serie of is aangepast in een game? Het antwoord vind je hier.</p>

                { isAuth ? <p className='home-text'><strong>je bent ingelogd</strong></p> : <p className='home-text'><strong>je bent niet ingelogd</strong></p>}
            </div>
        </section>
    );
}

export default Home;
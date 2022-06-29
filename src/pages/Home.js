import React, {useContext} from 'react';
import './home.css'
import {AuthContext} from "../context/AuthContext";

function Home() {
    const { isAuth } = useContext(AuthContext);
    return (
        <section className='home-body'>
            <div className='home'>
                <p>welkome to home</p>
                { isAuth ? <p>you are logged in</p> : <p>you are not logged in yet</p>}
            </div>
        </section>
    );
}

export default Home;
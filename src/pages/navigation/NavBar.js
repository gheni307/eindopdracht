import React, {useContext} from 'react';
import './navBar.css'
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const {isAuth, logout} = useContext(AuthContext);
    function home(){
        history.push('/')
    }

    function profile(){
        history.push('/profile')
    }

    function favorite(){
        history.push('/favorite')
    }

    return (
        <nav>
            <section className='link'>
                <button
                    type='button'
                    onClick={home}
                >
                    Home
                </button>
                { isAuth ?
                    <>
                        <button
                        type="button"
                        onClick={logout}
                    >
                            uitloggen
                    </button>
                        <button
                            type="button"
                            onClick={profile}
                        >
                            profiel
                        </button>
                        <button
                            type="button"
                            onClick={favorite}
                        >
                            favorieten
                        </button>
                    </>
                     :
                    <>
                    <button
                    type="button"
                    onClick={() => history.push('/signIn')}
                    >
                    Log in
                    </button>
                    <button
                    type="button"
                    onClick={() => history.push('/signup')}
                    >
                    Registreren
                    </button>
                    </>

                }
            </section>
            <div id='thema'>
                <h1>Movie club</h1>
            </div>
        </nav>
    );
}

export default NavBar;
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
                        log out
                    </button>
                        <button
                            type="button"
                            onClick={profile}
                        >
                            profile
                        </button>
                        <button
                            type="button"
                            onClick={favorite}
                        >
                            favorite
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
        </nav>
    );
}

export default NavBar;
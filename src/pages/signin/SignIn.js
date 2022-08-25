import React, {useContext, useEffect, useState} from 'react';
import './signIn.css'
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    async function handleSubmit(e){
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',{
                username: username,
                password: password,
            });
            login(result.data.accessToken);
            console.log(result.data)
        }catch (e) {
            console.error(e);
            setError(<p>username of password is niet klopt</p>);
        }
    }
    useEffect(()=>{
        handleSubmit();
    },[])
    return (
        <div className='signIn-body'>
            <div className='signIn'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username
                        <input
                            type='text'
                            id='username'
                            onChange={(e)=>setUsername(e.target.value)}
                            value={username}
                        />
                        {username === '' && <p>Dit is verplicht</p>}
                    </label>
                    <label htmlFor='password'>Password
                        <input
                            type='password'
                            id='password'
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                        {password.length < 6 && <p>minimaal 6 karakter</p>}
                        {error}
                    </label>
                    <button type='submit'>Inloggen</button>
                </form>
            </div>

        </div>
    );
}

export default SignIn;
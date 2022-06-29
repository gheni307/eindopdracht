import React, {useContext, useState} from 'react';
import './signIn.css'
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState('');
    const { login } = useContext(AuthContext);


    async function handleSubmit(e){
        e.preventDefault();
        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',{
                username: username,
                password: password,
            });
            login(result.data.accessToken);
            console.log(result.data.accessToken);
        }catch (e) {
            console.error(e);
        }
    }
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
                    </label>
                    <label htmlFor='password'>Password
                        <input
                            type='password'
                            id='password'
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    <button type='submit'>Inloggen</button>
                </form>
            </div>

        </div>
    );
}

export default SignIn;
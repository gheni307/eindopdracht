import React, {useContext, useState} from 'react';
import './signup.css'
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [role,setRole] = useState('');
    const { registration } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setRole('user');
        try{
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`,{
                username: username,
                email: email,
                password: password,
                role: role,
            });
            registration();
        }catch (e) {
            console.error(e);
        }
    }

    return (
        <div className='register-body'>
            <div className='register'>
                <form onSubmit={handleSubmit} className='signup-form'>
                    <label htmlFor='email'>Email
                        <input
                            type='email'
                            id='email'
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                        {!email.includes('@') && !email.includes('.') && <p>mail moet bevaat "@" en "."</p>}
                    </label>
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
                    </label>
                    <button type='submit'>Registreren</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
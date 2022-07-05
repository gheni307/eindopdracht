import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(token){
            async function getData(){
                try{
                    const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,{
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    })
                    setAuth({
                        isAuth: true,
                        user: {
                            email: response.data.email,
                            username: response.data.username,
                            id: response.data.id,
                        },
                        status: 'done',
                    });
                }catch (e) {
                    setAuth({
                        ...isAuth,
                        status: 'done',
                    });
                    console.log(e);
                }
            }
            getData();
        } else {
            setAuth({
                ...isAuth,
                status: 'done',
            });
        }
    },[]);

    function login(jwt){
        localStorage.setItem('token',jwt);
        const decode = jwtDecode(jwt);
        console.log(decode);
        setAuth({
            ...isAuth,
            isAuth: true,
            user: {
                username: decode.username,
                password: decode.password,
            },
            status: 'done',
        });
        history.push('/profile');
    }

    function logout(){
        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        history.push('/');
    }

    function registration(){
        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        history.push('/');
    }





    const data={
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
        registration: registration,
    }

    return (
        <AuthContext.Provider value={data}>
            { isAuth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
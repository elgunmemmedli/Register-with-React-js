import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsDb } from '../api';


export const Authcontext = createContext();

const AuthcontextProvider = ({ children }) => {

    let navigate = useNavigate();

    const [user, setUser] = useState('');
    const [isLogin, setIsLogin] = useState(false);



useEffect( ()=>{
    let token = localStorage.getItem('token');
    if(token){
        setUser(token);
        setIsLogin(true);
    }else{
        navigate('/signUp');
    }
}, []);


    // login oldu adam
    const login = (data) => {
        setUser(data.idToken);
        setIsLogin(true);
        localStorage.setItem('token', data.idToken);
        navigate('/');
    }

   const values = {
        user, 
        isLogin, 
        login,
    }

    return (
        <div>
            <Authcontext.Provider value={values} >
                {children}
            </Authcontext.Provider>
        </div>
    );
}

export default AuthcontextProvider;

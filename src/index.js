import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Auth/SignUp';
import Navbar from './components/Navbar.js';
import AuthcontextProvider from './context/AuthContext';
import Home from './components/Home';
import Profile from './components/Profile/Profile';
import Addproducts from './components/Profile/AddProducts';


const Index = () => {
    return (
        <div className='container' >
        <Router>
            <AuthcontextProvider>
                <Navbar/>
               <Routes>
                   <Route path='/signUp' element={<SignUp/>} />
                   <Route path='/' element={<Home/>} />
                   <Route path='/profile' element={<Profile/>} />
                   <Route path='/add' element={<Addproducts/>} />
               </Routes>
               </AuthcontextProvider>
        </Router>
        </div>
                 
    );
}

export default Index;



let container  = document.querySelector("#root");
let root = createRoot(container);
root.render( <Index/>)


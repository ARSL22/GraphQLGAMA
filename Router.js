import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';




export default function Router() {
    return (
        <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            
            
        </Routes>
    );
};
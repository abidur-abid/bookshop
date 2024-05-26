import React from 'react';
import Header from '../Main Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Main Pages/Footer';

const Main = () => {
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    );
};

export default Main;
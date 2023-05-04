import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../../Shared/Footer/Footer';
import TopNav from '../../Shared/TopNav/TopNav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
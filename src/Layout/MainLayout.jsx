import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div className='flex flex-col  min-h-screen '>
          <Navbar/>

          <div className='flex-1 max-w-screen-xl mx-auto w-full p-4 md:p-8 lg:p-12'>
            <Outlet></Outlet>
          </div>
          
          <Footer></Footer>

          
        </div>
    );
};

export default MainLayout;
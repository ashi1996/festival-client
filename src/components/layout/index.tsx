import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './header/header';
import Footer from './footer/footer';
import './layout.css';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main className='container'>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>

  );
}

export default Layout;

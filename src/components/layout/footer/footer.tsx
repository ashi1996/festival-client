import React from 'react';
import {NavLink} from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='container-fluid d-flex justify-content-between align-items-center text-white'> 
      <div className='d-flex align-items-center p-1'>
        <img src='UserLogo.png' width="60px" className='logo pe-2'/>
        <span>User Management</span>
      </div>
      <ul className='nav'>
        
      </ul>
    </footer>
  );
}

export default Footer;
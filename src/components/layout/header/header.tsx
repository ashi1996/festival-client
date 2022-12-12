import React from 'react';
import { useNavigate } from 'react-router-dom'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './header.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header className='container-fluid d-flex justify-content-between align-items-center text-white'> 
      <div className='logo-container'>
        <img src='logo.jpg'  width="55px" className='logo'/>
        <div>
          <span>Festivals</span>
          <span className='usa-font'>U.S.A</span>
        </div>
      </div>
      {
        window.location.href.includes("add-or-edit") ? 
        <ArrowForwardIcon onClick={()=>navigate("/")} className='add-festivals-btn'/>
        :
         <AddCircleOutlineOutlinedIcon onClick={()=>navigate("/add-or-edit")} className='add-festivals-btn'/>
      }
    </header>
  );
}

export default Header;
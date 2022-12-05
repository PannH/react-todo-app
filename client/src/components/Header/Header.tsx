import React from 'react';
import './Header.css'

function Header() {

   return (
      <header>
         <div className='icon-box'>
            <i className='fa-solid fa-clipboard-check'></i>
         </div>
         <h1 className='title'>Todo Application</h1>
      </header>
   )

}

export default Header;
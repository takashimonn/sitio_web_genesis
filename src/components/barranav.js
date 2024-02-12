import React, { useState } from 'react';
import Menu  from './menu'; 
import logo from '../img/logo.jpg';
import './barranav.sass';
import cow_mon1 from '../img/cow_mon1.png';
import utd from '../img/utd.png';

const Barranav = () => {
  const [menuVisible, setMenuVisible] = useState(false); 

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
  };

  return (
    <div className='body'>
      <nav className='barranav'> 
        <button onClick={toggleMenu} className='btn_barranav'>
          <img src={logo} alt="Logo" width="" height="" style={{ marginRight: '' }} className='logo'/>
        </button>
        {menuVisible && <Menu closeMenu={() => setMenuVisible(false)} />} 
        <ul className='ul_barranav'>
          <li className='li_barranav'><h3 className='h3_barranav'>Nosotros </h3></li>
          <li className='li_barranav'><h3 className='h3_barranav'>Ver Producto</h3></li>
          <li className='li_barranav'><h3 className='h3_barranav'>Contactanos </h3></li>
          <li className='li_barranav'><h3 className='h3_barranav'>Descagar App </h3></li>
          <li className='li_barranav'><h3 className='h3_barranav'>Login App </h3></li>
          <li><img src={cow_mon1}alt="Logo" width="" height="" style={{ marginRight: '' }} className='cow_mon1'></img></li>
          <li><img src={utd} alt="Logo" width="" height="" style={{ marginRight: '' }} className='utd' ></img></li>
        </ul>
      </nav>
    </div>
  );
};

export { Barranav };
 

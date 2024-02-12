import React from 'react';
import './menu.sass';
import closeIcon from '../img/closeIcon.png'; 

const Menu = ({ closeMenu }) => {
  return (
    <div className='menu'>
      <img src={closeIcon} alt="Cerrar menú" className="close-icon" onClick={closeMenu} />
      <h1 className='titulo_menu'>Menu</h1>
      <ul className='ul_menu'>
        <li className='li_menu'>Nosotros</li>
        <li className='li_producto'>Ver Producto</li>
        <li className='li_download'>Descargar App</li>
        <li className='li_contactanos'>Contactanos</li>
        <li className='li_unete'>Unete a nuestro equipo</li>
      </ul>
    </div>
  );
};

export default Menu; 

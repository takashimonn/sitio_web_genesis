import React from 'react';
import './footer.sass';

const Footer = () => {
  return (
    <div className='cont_footer'>
      <ul className='ul_correo_footer'>
        <li className='li_correo_footer'>
          <h3>Correo</h3>
          <p>genesis_cowmon@gmail.com</p>
        </li>
      </ul>

      <ul className='ul_tel_footer'>
        <li className='li_tel_footer'>
          <h3>Teléfono</h3>
          <p>Tel 018005426354</p>
          
        </li>
      </ul>

      <ul className='ul_facebook_footer'>
        <li className='li_facebook_footer'>
          <h3>Facebook</h3>
          <p>Genesis CowMon</p>
        </li>
      </ul>

      <ul className='ul_insta_footer'>
        <li className='li_insta_footer'>
          <h3>Instagram</h3>
          <p>Genesis_CowMon</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

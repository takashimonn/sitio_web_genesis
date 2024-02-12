import React from 'react';
import principal from '../img/principal.jpg';
import './body.sass';
import otra_imagen from '../img/otra_imagen.jpg'
import cow_mon1 from '../img/cow_mon1.png';

export const Body = () => {
  return (
    <div>
        <img src={principal} alt="" width="" height="" style={{ marginRight: '' }} className='img_principal'/>
        <img src={otra_imagen} alt="" className='otra_imagen'/> {/* Agrega la otra imagen */}

            <container className='datos_empresa'>
              <h1 className='titulo'>Nuestra Empresa</h1>
              <h3 className='descripcion_empresa'>Nuestra empresa esta orientada al cuidado total del medio ambiente</h3>
              <h3 className='descripcion_empresa'>mediante la implementación de la tecnología. Gracias a esto</h3>
              <h3 className='descripcion_empresa'>pudimos comenzar con la implemtación de productos que nos ayuden a</h3>
              <h3 className='descripcion_empresa'>mejorar la calidad de la flora y fauna que habita en nuestro planeta.</h3>

              <h2 className='h2_mision'>
                Mision 
              </h2>
              <p className='p_mision'>
                Nuestra empresa esta orientada al cuidado total del medio ambiente
                mediante la implementación 
              </p>
              <p className='p_mision'>
              de la tecnología. Gracias a esto
                pudimos comenzar con la implemtación de productos que nos ayuden 
              </p>

              <p className='p_mision'>
              a
                mejorar la calidad de la flora y fauna que habita en nuestro planeta.
              </p>


              <h2 className='h2_vision'>
                Visión 
              </h2>
              <p className='p_vision'>
                Nuestra visión es ser reconocidos a nivel global como una empresa líder en el desarrollo
              </p>
              <p className='p_vision'>
                y la implementación de soluciones tecnológicas para la conservación del medio ambiente. 
              </p>
              <p className='p_vision'>
                Nos esforzamos por ser pioneros en la creación de productos sostenibles que promuevan 
              </p>
              <p className='p_vision'>
                un mundo más verde y saludable para las generaciones futuras.
              </p>

              <img src={cow_mon1}alt="Logo" width="" height="" style={{ marginRight: '' }} className='cow_mon2'></img>
              <button className='btn_download'>
                <p className='p_download'>Descargar App</p>
              </button>  
            </container>

    </div>
  )
}

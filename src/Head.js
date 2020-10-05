import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from './mobile/logo2.svg';
import ipoteca from './mobile/ipoteka.svg';
import Art from './mobile/Art.svg';


export function Head() {


  return (<section>
    <div className='header_body'>
      <a className='logo' href='https://cian.ru/'>
        <img src={logo2} />
      </a>
      <a className='logo_bonus' href='https://cian.ru/'>
        <img src={ipoteca} />
      </a>
      <h1 className='header_title'>Своя квартира еще ближе</h1>
      <h4 className='header_sub_title'>Узнай одобренную сумму и процентную ставку</h4>
      <Link to='/name'>
        <button className='header_button'>Подобрать</button>
      </Link>
      <h5 className='header_button_title'>Единая онлайн анкета в топовые банки</h5>
      <img className='picture' src={Art} />
    </div>
  </section>

  )
}

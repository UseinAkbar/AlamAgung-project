import React, {useState} from 'react';
import logo from '../images/logo-bold.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

const Heading = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked( prevValue => {
      return !prevValue;
    });
  }

  return (
    <div className='heading'>
      <nav className='heading__nav'>
        <div className='heading__nav-box'>
          <div className='heading__nav-box--logo'>
            <img src={logo} alt='Logo' className='heading__logo'></img>
            <span className='heading__logoName'>Alam Agung</span>
          </div>

          <ul className='heading__nav-box--menu'>
            <li className='heading__nav-item'><a href='#produk' className='heading__nav-link'>Produk</a></li>
            <li className='heading__nav-item'><a href='#layanan' className='heading__nav-link'>Layanan</a></li>
            <li className='heading__nav-item'><a href='#tentang' className='heading__nav-link'>Tentang</a></li>
          </ul>

          <div className='sidebar' onClick={handleClick}>
            <FontAwesomeIcon icon='bars' className='sidebar__btn' />
          </div>

          <div className={`dropdown ${clicked ? 'clicked' : ''}`}>
            <ul className='dropdown__nav'>
              <a className='dropdown__link' href='#produk' onClick={handleClick}><li className='dropdown__item'>Produk</li></a>
              <a className='dropdown__link' href='#layanan' onClick={handleClick}><li className='dropdown__item'>Layanan</li></a>
              <a className='dropdown__link' href='#tentang' onClick={handleClick}><li className='dropdown__item'>Tentang</li></a>
            </ul>
          </div>

        </div>
      </nav>

      <header className='heading__header'>
        <h1 className='heading__title heading__title-1'>Alam Agung Store</h1>
        <a href='#produk' className='cta heading__cta'>View Our Products</a>
      </header>
    </div>
  )
}

export default Heading

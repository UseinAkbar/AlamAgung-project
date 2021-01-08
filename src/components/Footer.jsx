import React, {useState} from 'react';
import bukalapak from '../images/bukalapak.png';
import tokopedia from '../images/tokopedia.png';
import olx from '../images/olx.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faEnvelope, faMapMarkerAlt, faCommentDots);

const Footer = () => {
  const [message, setMessage] = useState('');
  const logos = [
    {
      src: bukalapak,
      link: 'https://www.bukalapak.com/u/saidusman841'
    },
    {
      src: tokopedia,
      link: 'https://www.tokopedia.com/mgambar/meja-gambar-arsitek-alam-agung'
    },
    {
      src: olx,
      link: 'https://www.olx.co.id/profile/94989733'
    }
  ];

  const handleTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setMessage('Selamat Pagi');
    } else if (currentHour >= 12 && currentHour <= 14) {
      setMessage('Selamat Siang');
    } else if (currentHour <= 18) {
      setMessage('Selamat Sore');
    } else {
      setMessage('Selamat Malam');
    }
  }

  setInterval(handleTime, 1000);

  return (
    <footer className='footer'>
      <div className='footer__container footer__container--1'>
        <h3 className='footer__heading'>Kontak Kami</h3>
        <div className='footer__paraph-container'>
          <a className='footer__WA' href={`https://wa.me/+6285287187130/?text=${message}.. Saya ingin bertanya mengenai produk-produk meja gambar dari Toko Meja Gambar Alam Agung`}><p className='footer__paraph'><FontAwesomeIcon icon='comment-dots' className='footer__icon' />+6285287187130</p></a>
          <a className='footer__email' href='mailto:mejagambar75@gmail.com?subject=Meja Gambar Alam Agung'><p className='footer__paraph'><FontAwesomeIcon icon='envelope' className='footer__icon' />mejagambar75@gmail.com</p></a>
        </div>
      </div>

      <div className='footer__container footer__container--2'>
        <h3 className='footer__heading'>Alamat Kami</h3>
        <a className='footer__mapLink' href='https://www.google.com/maps/place/Meja+Gambar+Arsitek+Alam+Agung/@-6.3109769,106.8382114,19.35z/data=!4m12!1m6!3m5!1s0x2e69ed472f56e443:0x1560b8805430c543!2sMeja+Gambar+Arsitek+Alam+Agung!8m2!3d-6.3109725!4d106.8387594!3m4!1s0x2e69ed472f56e443:0x1560b8805430c543!8m2!3d-6.3109725!4d106.8387594!12b1?rapsrc=apiv3'
        target='_blank'
        >
          <p className='footer__paraph'><FontAwesomeIcon icon='map-marker-alt' className='footer__icon' />Jl. Tanjung Barat Raya No. 6, Jakarta Selatan</p>
        </a>
      </div>

      <div className='footer__container footer__container--3'>
        <div className='footer__logo-container'>
          {logos.map( (item, i) => {
            const {src, link} = item;
            return (
              <a className='footer__logoLink' href={link} key={i+1}>
                <img className={`footer__logo footer__logo--${i+1}`} src={src} alt='Olshop Logo'></img>
              </a>
            )
          })}
        </div>
      </div>

      <p className='footer__copyright'>© Copyright {new Date().getFullYear()} by <span>Alam Agung Store</span>. All rights reserved. Created by <a href='https://www.instagram.com/useinakbarr/' className='author'>useinakbar</a></p>
      <a href={`https://wa.me/+6285287187130/?text=${message}.. Saya ingin bertanya mengenai produk-produk meja gambar dari Toko Meja Gambar Alam Agung`} className='cta-waBox'><FontAwesomeIcon icon={['fab', 'whatsapp']} className='cta-waButton' /></a>
    </footer>
  )
}

export default Footer;

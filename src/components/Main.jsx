import React, {useState} from 'react';
import Product from './Product';
import SimpleSwiper from './Swiper';
import SwiperTablet from './SwiperTablet';
import SwiperMobile from './SwiperMobile';
import logo1 from '../images/binus.png';
import logo2 from '../images/ahmadDahlan.png';
import logo3 from '../images/univPekalongan.png';
import logo4 from '../images/polman.png';
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.jpg';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTags, faCheckCircle, faInfoCircle, faArrowCircleRight, faMapMarkerAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import data, {figures, services} from '../data.js';
library.add(faThumbsUp, faTags, faCheckCircle, faInfoCircle, faArrowCircleRight, faMapMarkerAlt, faMapMarkedAlt, faWhatsapp);

 const Main = () => {
   const [message, setMessage] = useState('');
   const images = [product1, product2, product3, product4, product5, product6, product7, product8, product9];

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
    <main className='section'>
      <section className='section__college'>
        <h2 className='section__college-heading'>Dipercaya Oleh</h2>
        <div className='section__college-logoBox'>
          <img className='section__college-logo logo-1' src={logo1} alt='logo' title='Binus University'></img>
          <img className='section__college-logo logo-2' src={logo2} alt='logo' title='Universitas Ahmad Dahlan'></img>
          <img className='section__college-logo logo-3' src={logo3} alt='logo' title='Universitas Pekalongan'></img>
          <img className='section__college-logo logo-4' src={logo4} alt='logo' title='Polman Bandung'></img>
        </div>
      </section>

      <section className='section__about' id='tentang'>
        <div className='section__about-container--1'>
          <h2 className='heading__subtitle section__about-heading'>Tentang Kami</h2>
        </div>
        <div className='section__about-container--2'>
          <p className='section__about-paraph'><span>Meja Gambar Alam Agung</span> merupakan penyedia beragam varian mesin dan meja gambar untuk memenuhi keperluan Anda dengan harga yang terjangkau dan kualitas produk yang terbaik. Berdiri sejak tahun 1990, kami telah melayani berbagai macam pemesanan dan pengiriman, baik dalam kota maupun luar kota. Membuat kami menjadi penyedia meja gambar arsitek yang terpercaya dan berkualitas.</p>
        </div>
      </section>


      <section className='section__figure'>
        {figures.map( (item, i) => {
          const {iconName, title, content, id} = item;
          return (
            <div className='section__figure-container' key={id}>
              <FontAwesomeIcon icon={iconName} className='section__figure-icon' />
              <h3 className='section__figure-heading'>{title}</h3>
              <p className='section__figure-text'>{content}</p>
            </div>
          )
        })}
      </section>

      <section className='section__service' id='layanan'>
        <div className='section__service-container--1'>
          <h2 className='heading__subtitle section__service-heading'>Layanan Kami</h2>
        </div>
        <div className='section__service-container--2'>
          {services.map( (item, i) => {
            return (
              <p className='section__service-text' key={i}>
                <FontAwesomeIcon icon='arrow-circle-right' className='section__service-icon' />{item}
              </p>
            )
          })}
        </div>
      </section>

      <section className='section__product' id='produk'>
        <h2 className='section__product-heading'>Produk Kami</h2>
        <div className='section__product-container'>
          {data.map( (item, i) => {
            const {nama, stand, board, mesin, lampu, kondisi, produksi, garansi, id} = item;
            return (
              <Product
                key={id}
                nama={nama}
                stand={stand}
                board={board}
                mesin={mesin}
                lampu={lampu}
                kondisi={kondisi}
                produksi={produksi}
                garansi={garansi}
                img={images[i]}
                title={nama}
              />
            )
          })}
        </div>
        <a href={`https://wa.me/+6285287187130/?text=${message}.. Saya ingin bertanya mengenai produk-produk meja gambar dari Toko Meja Gambar Alam Agung`} className='section__product-nav'>More Products &rarr;</a>
      </section>

      <section className='section__map'>
        <h2 className='heading__subtitle section__map-title'>Lokasi Kami</h2>
        <a href='https://www.google.com/maps/place/Meja+Gambar+Arsitek+Alam+Agung/@-6.3109769,106.8382114,19.35z/data=!4m12!1m6!3m5!1s0x2e69ed472f56e443:0x1560b8805430c543!2sMeja+Gambar+Arsitek+Alam+Agung!8m2!3d-6.3109725!4d106.8387594!3m4!1s0x2e69ed472f56e443:0x1560b8805430c543!8m2!3d-6.3109725!4d106.8387594!12b1?rapsrc=apiv3' className='section__map-cta' target='_blank'><FontAwesomeIcon icon='map-marked-alt' className='section__map-icon' />Google Maps</a>
      </section>

      <section className='section__gallery'>
        <h2 className='section__gallery-heading'>Gallery Kami</h2>
        <div className='section__gallery-carouselDesktop'>
          <SimpleSwiper />
        </div>
        <div className='section__gallery-carouselTablet'>
          <SwiperTablet />
        </div>
        <div className='section__gallery-carouselMobile'>
          <SwiperMobile />
        </div>
      </section>
    </main>
  )
}

export default Main;

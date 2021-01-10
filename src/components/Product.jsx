import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import whatsapp from '../images/whatsapp.png';
import tap from '../images/tap.svg';
library.add(faEye, faEllipsisV);


const Product = ({nama, stand, board, lampu='-', mesin='-', kondisi, produksi, garansi='-', img, title}) => {
  const [clicked, setClick] = useState('');
  const [message, setMessage] = useState('');
  const [displayed, setDisplay] = useState({translate: '', fadeInBtn: '', overlay: ''});
  const {translate, fadeInBtn, overlay} = displayed;

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

  const handleDisplay = () => {
    setDisplay(() => {
      return {
        translate: 'translate',
        fadeInBtn: 'fadeInBtn',
        overlay: 'overlayEffect'
      }
    });
    document.querySelector('.cta-waBox').style.visibility = 'hidden';
  }

  const handleUndisplay = () => {
    setDisplay(() => {
      return {
        translate: '',
        fadeInBtn: '',
        overlay: ''
      }
    });
    document.querySelector('.cta-waBox').style.visibility = 'visible';
  }

  const openImg = () => {
    setClick('fadeIn');
    document.querySelector('.cta-waBox').style.visibility = 'hidden';
  }

  const closeImg = () => {
    setClick('');
    document.querySelector('.cta-waBox').style.visibility = 'visible';
  }

  return (
    <div className='section__product-type'>
      <div className='section__product-boxImg' onClick={openImg}>
        <img className='section__product-img' src={img} alt='Meja Gambar Arsitek' title={title}></img>
        <div className='view' onClick={openImg}><FontAwesomeIcon icon='eye' className='viewIcon' /><span>View Image</span></div>

        <div className='cta-viewMenu'>
          <img src={tap} className='cta-viewMenu__icon'></img>
          <span>Lihat Foto</span>
        </div>
      </div>

      <div className={`viewBox ${clicked}`} onClick={closeImg}>
        <span onClick={closeImg} className='closeBtn'>&times;</span>
        <div className='viewImgContainer'><img src={img} className='viewImg' alt='Meja Gambar Arsitek'></img></div>
      </div>

      <ul className='section__product-list'>
        <li className='section__product-listItem'>{nama}</li>
        <li className='section__product-listItem'><span>Stand: </span>{stand}</li>
        <li className='section__product-listItem'><span>Board: </span>{board}</li>
        <li className='section__product-listItem'><span>Mesin: </span>{mesin}</li>
        <li className='section__product-listItem'><span>Lampu: </span>{lampu}</li>
        <li className='section__product-listItem'><span>Kondisi: </span>{kondisi}</li>
        <li className='section__product-listItem'><span>Produksi: </span>{produksi}</li>
        <li className='section__product-listItem'><span>Garansi: </span>{garansi}</li>
      </ul>
      <a className='section__product-cta section__product-cta--desktop' href={`https://wa.me/+6285287187130/?text=${message}.. Saya tertarik dan ingin bertanya mengenai ketersediaan ${nama} - stand: ${stand} - board: ${board} di toko`}><span>Contact Us</span></a>
      <button className='section__product-cta section__product-cta--mobile' onClick={handleDisplay}><span>Contact Us</span></button>

      <div className={`cta-mobileBox ${translate}`}>
        <span className={`cta-mobileBox__close ${fadeInBtn}`} onClick={handleUndisplay}>&times;</span>
        <span className='cta-mobileBox__span'></span>
        <div className='cta-mobileBox__nav'>
          <a className='cta-mobileBox__WA' href={`https://wa.me/+6285287187130/?text=${message}.. Saya tertarik dan ingin bertanya mengenai ketersediaan ${nama} - stand: ${stand} - board: ${board} di toko`}><img className='cta-mobileBox__icon' src={whatsapp} alt='whatsapp'></img>Chat Penjual</a>
        </div>
      </div>

      <div className={`cta-mobileBox__overlay ${overlay}`}></div>

    </div>
      )
      }

export default Product;

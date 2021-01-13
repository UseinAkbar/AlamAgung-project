import SwiperCore, {Navigation, Autoplay, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../images/slide-1.jpg';
import slide2 from '../images/slide-2.jpg';
import slide3 from '../images/slide-3.jpg';
import slide4 from '../images/slide-4.jpg';
import slide5 from '../images/slide-5.jpg';
import slide6 from '../images/slide-6.jpg';
import slide7 from '../images/slide-7.jpg';
import slide8 from '../images/slide-8.jpg';
import slide9 from '../images/slide-9.jpg';
import slide10 from '../images/slide-10.jpg';


// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
// install Swiper components
SwiperCore.use([Navigation, Autoplay, Pagination]);

const SimpleSwiper = () => {
  let images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay={{delay: 2400, disableOnInteraction: false}}
      navigation
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
    >
      {images.map( (item, i) => {
        return (
          <SwiperSlide key={i+1} id='swipeSlide'>
            <img className='section__gallery-img' src={item} title={`figure${i+1}`} alt={`Meja gambar slide ${i+1}`}></img>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default SimpleSwiper;

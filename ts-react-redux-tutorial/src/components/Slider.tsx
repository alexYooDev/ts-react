import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import './Slider.css';
import { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: true,
      keyboard: true,
      slidesPerView: 1,
    });
  }, []);
  const slides = [1, 2, 3];
  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        {slides.map((slide) => (
          <div
            className='swiper-slide'
            style={{ background: `hsl(${slide * 10}, 83%, 47%)` }}
            key={slide}
          >{`slide ${slide}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

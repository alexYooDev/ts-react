import React, { useState, useEffect } from 'react';

import bg1 from '../image/bg1.jpg';
import bg2 from '../image/bg2.jpg';
import 'swiper/css';
import './Slider.css';
import { url } from 'inspector';

const Showcase: React.FC = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const slides = [1, 2, 3];
  return (
    <div className='swiper-container'>
      <div
        className='bg1'
        style={{
          background:
            'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(12,121,9,1) 35%, rgba(0,212,255,1) 100%)',
          width: '100vw',
          height: '100vh',
          backgroundPositionY: position / 2,
        }}
      >
        <div>Welcome</div>
      </div>
      <div
        className='bg2'
        style={{
          background:
            'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          width: '100vw',
          height: '100vh',
          backgroundPositionY: position / -3,
        }}
      >
        <div>Happy New Year</div>
      </div>
      <p
        className='desc'
        style={{
          fontWeight: 'bold',
          fontSize: '40px',
          position: 'relative',
          left: '1800px',
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic,
        fuga, numquam obcaecati tempora quis voluptates repellat ipsa voluptatum
        blanditiis?
      </p>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '40px',
          position: 'relative',
          right: '1800px',
          transform: `translateX(${100 + position}px)`,
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde rerum,
        iusto id illum, officiis voluptate suscipit exercitationem, aspernatur
        amet incidunt excepturi minima nesciunt repudiandae assumenda dolores
        expedita enim dicta. Blanditiis?
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1300) / 70,
        }}
      >
        Unde rerum, iusto id illum.
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1380) / 70,
        }}
      >
        aspernatur amet incidunt excepturi.
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1460) / 70,
        }}
      >
        officiis voluptate suscipit exercitationem.
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1540) / 70,
        }}
      >
        Cupiditate hic, fuga, numquam obcaecati tempora .
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1620) / 70,
        }}
      >
        Cupiditate hic, fuga, numquam obcaecati tempora .
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1700) / 70,
        }}
      >
        Cupiditate hic, fuga, numquam obcaecati tempora .
      </p>
      <p
        className='desc3'
        style={{
          fontSize: '40px',
          opacity: (position - 1780) / 70,
        }}
      >
        Cupiditate hic, fuga, numquam obcaecati tempora .
      </p>
      {/* <div className='swiper-wrapper'>
        {slides.map((slide) => (
          <div
            className='swiper-slide'
            style={{ background: `hsl(${slide * 10}, 83%, 47%)` }}
            key={slide}
          >{`slide ${slide}`}</div>
        ))}
      </div> */}
    </div>
  );
};

export default Showcase;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Thony from './Thnoy.jpg'
import movie from './movie2.jpg'
import MK from './MK.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Projects = () => {
  return (
   <div className='mx-3 p-4 projects '  id='projects'>
    <h4 data-aos="fade-right" data-aos-duration='2000'>Projects.</h4>
    <p className='mb-5' data-aos="fade-right" data-aos-duration='2000'>Swipe to scroll</p>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        loop={true}
        autoHeight={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 6,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        data-aos="fade-up" data-aos-duration='1500'
      >
        <SwiperSlide>
          <img src="https://mk-roan.vercel.app/assets/Flix-r8zxgvMo.jpg" />
          <div className='px-2'>
            <div className='d-flex justify-content-between px-2 align-items-center'>
            <h4>Netflix Landing page</h4>
            <a href="https://flix-drab.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>HTML-CSS</h5>
            <p>A landing page for netflix. It show a responsive Neflix landing page with no functionality</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mk-roan.vercel.app/assets/movieSite-8gRLb8Sq.jpg" />
          <div className='px-2'>
           <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Movie Zone</h4>
              <a href="https://movie-site-steel-beta.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap</h5>
            <p>Movie Zone is a non responsive single page movie site meant to show progress in Front End Web Development at the begining of my venture into React.js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie} />
          <div className='px-2'>
            <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>IMDB</h4>
              <a href="https://other-movie.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap-React Router-Tmdb movie Api</h5>
            <p>IMDB is a movie website meant to display movie posters, titles and rating as gotten for TMBD </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mk-roan.vercel.app/assets/jumia-qITGmiiy.jpg" />
          <div className='px-2'>
            <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Jumia Store</h4>
              <a href="https://group-2-project.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap-Swiper.js-React Router</h5>
            <p>This is a clone of the jumia e-commerce website that allows users to browse through items, see their details and add these items to cart and tally their total</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mk-roan.vercel.app/assets/Capture-2AeqPlrM.jpg" />
            <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Portfolio 1</h4>
              <a href="https://mk-roan.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap-Swiper.js-React Router</h5>
            <p>This is a portfolio site that give information about me and the projects i have worked on</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MK} />
            <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Portfolio 2</h4>
              <a href="https://komolafe.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap-Swiper.js-React Router-Data AOS-Email.js</h5>
            <p>This is a single page portfolio site that give information about me and the projects i have worked on using intriguing animations. It also uses Email.js to handle form submissions</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Thony} />
           <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Portfolio 3</h4>
              <a href="https://thony-x.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Bootstrap-Email.js</h5>
            <p>This is a Web 3 portfolio site that give information about <a href="https://x.com/the_realthonyx">Thony-X</a> and the projects he has worked on. It uses Email.js to handle form submissions</p>
        </SwiperSlide>
      </Swiper>
   </div>
  );
};

export default Projects;

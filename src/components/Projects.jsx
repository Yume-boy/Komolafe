import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Thony from './Thnoy.jpg'
import movie from './movie2.jpg'
import MK from './MK.jpg'
import IMS from './MK.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Projects = () => {


  return (
   <div className='mx-3 p-4 projects '  id='projects'>
    <h4 data-aos="fade-right" data-aos-duration='2000'>Projects.</h4>
    <h5 data-aos="fade-right" data-aos-duration='2000'>Personal</h5>
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
        <SwiperSlide>
          <img src={'github-finder.PNG'} />
           <div className='d-flex justify-content-between px-2 align-items-center'>
              <h4>Github finder</h4>
              <a href="https://github-finder-djpo.vercel.app/" className='text-reset'><FaExternalLinkAlt /></a>
            </div>
            <h5>React.js-Redux-Github API</h5>
            <p>This is project that finds github account based on input and displays relevant information related to that account</p>
        </SwiperSlide>
      </Swiper>

      <h5 className=" my-5" data-aos="fade-right" data-aos-duration='2000'>Professional</h5>
      <Container className="proof-of-work-section my-5  " data-aos="fade-right" data-aos-duration='2000'>
            <Carousel
            interval={3000}  // Adjust interval (in milliseconds) as needed
            indicators={false}  // Hide the slide indicators if not needed
            controls={false}    // Hide the control arrows if not needed
            fade={false}        // Set to true for fade effect between slides
            pause={true}       // Set to true to pause on hover
            wrap={true}         // Set to false to disable looping
            slide={true}        // Set to false for a fade effect
            >
            <Carousel.Item>
                <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src={'Skilltop-ims.PNG'} />
                    <Card.Body>
                        <Card.Title>Skilltop IMS</Card.Title>
                        <Card.Text>
                        <p>A full-featured web application designed to streamline inventory and store operations. This app empowers business owners and staff to efficiently manage products, sales, and store locations in real-time.</p>
                        <h6>Key Features:</h6>
                        <ul>
                          <li>Product Management: Add, edit, and delete products with details like quantity, category, pricing, and image uploads.</li>
                          <li>Store Tracking: Handle multiple store locations and track stock levels per store.</li>
                          <li>Sales Monitoring: Record, view, and update sales records seamlessly.</li>
                          <li className='mb-4'>User Roles: Role-based access control to separate admin and staff functionality.</li>
                        </ul>
                        </Card.Text>
                        <a href="https://skilltopims.com/" className='text-reset'><FaExternalLinkAlt /></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src={'Skilltop-ehs.PNG'} />
                    <Card.Body>
                        <Card.Title>Skilltop EHS</Card.Title>
                        <Card.Text>
                        <p>A full-featured web application designed to streamline hospital operations, enhance patient care, and improve overall staff efficiency.</p>
                        <h6>Key Features:</h6>
                        <ul>
                          <li>Patient Management – Register, update, and track patient details with ease.</li>
                          <li>Staff Management – Add, edit, and manage doctors, nurses, and administrative personnel.</li>
                          <li>Appointment Scheduling – Schedule and manage appointments between patients and doctors.</li>
                          <li className='mb-5'>Role-Based Access Control – Secure login with tailored views for Admin, Doctor, Nurse, and Receptionist roles.</li>
                        </ul>
                        </Card.Text>
                        <a href="https://skilltopehs.com.ng/" className='text-reset'><FaExternalLinkAlt /></a>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Carousel.Item>
            </Carousel>
        </Container>
        
    
   </div>
  );
};

export default Projects;

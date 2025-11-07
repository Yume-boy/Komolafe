import React from 'react';
import { useEffect, useState } from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
// import resume from './komolafe CV.pdf'/

const Header = (props) => {

  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onButtonClick = () => {
      const pdfUrl = "Komolafe marvellous regular portfolio (5).pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Komolafe CV .pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };


  return (
    <nav className={`d-flex justify-content-between px-4 sticky-top nav py-3 align-items-center  ${isSticky ? 'sticky' : ''}`}  >
      <div>
        <span className='logo '>MK</span>
      </div>
      <div className='d-none d-md-block'>
        <ul className='d-flex list-unstyled gap-5 align-items-center'>
          <li><a href="#hero" className='text-decoration-none text-reset'>Home</a></li>
          <li><a href="#about" className='text-decoration-none text-reset'>About</a></li>
          <li><a href="#projects" className='text-decoration-none text-reset'>Project</a></li>
          <li><a href="#skills" className='text-decoration-none text-reset'>Skills</a></li>
          <li><a href="#contact" className='text-decoration-none text-reset'>Contact</a></li>
        </ul>
      </div>
      <div className='d-flex align-items-center'>
          <div className='me-3'>
            <span onClick={onButtonClick} style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}} className='px-3 rounded-pill d-flex align-items-center download py-2'>
              Resume
            </span> 
          </div>
          <div onClick={props.colorChange}>
            {  <MdOutlineLightMode/> }
          </div>
      </div>
    </nav>
  );
};

export default Header;

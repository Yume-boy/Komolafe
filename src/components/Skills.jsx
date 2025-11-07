import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiMedusa } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaLinux, FaAws } from "react-icons/fa";
import { SiElastic, SiSiemens } from "react-icons/si";

const Skills = (props) => {
  return (
    <div className='d-flex flex-column align-items-center skills px-4 my-5' id='skills'>
      <h2 className='mt-5' data-aos="fade-right" data-aos-duration='1000'>
        Skills
      </h2>
      <div className='mom' data-aos="fade-left" data-aos-duration='1000'>
        <span className='underline'></span>
      </div>
      <h4 className='mt-3' data-aos="fade-right" data-aos-duration='1000'>
        With experience as a Frontend Developer and a growing passion for Cybersecurity, 
        I specialize in crafting exceptional web experiences while ensuring secure and scalable implementations. 
        Utilizing React.js, Tailwind CSS, Bootstrap, and Bubble.io, I’ve built dynamic and responsive applications.  
        On the security side, I work with <strong>Linux environments</strong>, <strong>SIEM tools</strong>, 
        <strong>Elastic Stack (ELK)</strong>, and <strong>AWS security configurations</strong>, 
        including <strong>integrating AWS with Elastic</strong> for enhanced monitoring and log analysis.
      </h4>
      <p className='mt-4' data-aos="fade-left" data-aos-duration='1000'>
        Visit my <a href="https://www.linkedin.com/in/marvellous-komolafe-8292821a9" target="_blank" rel="noopener noreferrer" className='text-reset'>
          LinkedIn <CiLink />
        </a> for more information.
      </p>
      <div className='stack gap-4 flex-wrap justify-content-center' data-aos="fade-right" data-aos-duration='1000'>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaReact />
        <FaBootstrap />
        <RiTailwindCssFill />
        <SiMedusa />
        <FaWordpress />
        <FaLinux />
        <SiElastic />
        <FaAws />
      </div>
    </div>
  )
}

export default Skills

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

const Skills = (props) => {
  return (
    <div className='d-flex flex-column align-items-center skills px-4 my-5'>
        <h2 className='mt-5'>
            Skills
        </h2>
        <div className='mom'>
             <span className='underline'></span>
        </div>
        <h4 className='mt-3'>
        With experience as a Frontend Developer, I specialize in crafting exceptional web experiences. Utilizing React.js, Material.ui, and Bubble.io, I've built dynamic websites and engaging applications, showcasing my proficiency in front-end development.
        </h4>
        <p className='mt-4'>Visit my <a href="www.linkedin.com/in/marvellous-komolafe-8292821a9" className='text-reset'>linkedIn  <CiLink /></a> for more information</p>
        <div className='stack gap-4'>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <FaBootstrap />
            <RiTailwindCssFill />
            <SiMedusa />
            <FaWordpress />
        </div>
        <span className='seperator mt-5'  style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}></span>    
    </div>
  )
}

export default Skills

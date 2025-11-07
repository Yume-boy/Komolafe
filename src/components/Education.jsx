import React from 'react'

const Education = (props) => {
  return (
    <div className='education row px-4 my-5' id='education'>
      <div className='col-12 col-md-8'>
        <h2 data-aos="fade-right" data-aos-duration='1000'>Education & Certifications</h2>
        <p data-aos="fade-right" data-aos-duration='1000'>
          My educational journey reflects my growth from science to technology — blending analytical thinking with creative problem-solving.  
        </p>

        <div className='mt-4'>
          <h5 data-aos="fade-right" data-aos-duration='1000'>
             <strong>B.Sc. in Biochemistry</strong>
          </h5>
          <p data-aos="fade-right" data-aos-duration='1000'>
            <strong>Mountain Top University, Ogun State, Nigeria</strong><br />
            Built a strong foundation in research, data analysis, and scientific problem-solving — skills that now complement my logical approach to software development.
          </p>
        </div>

        <div className='mt-4'>
          <h5 data-aos="fade-right" data-aos-duration='1000'>
             <strong>Frontend Development Certification</strong>
          </h5>
          <p data-aos="fade-right" data-aos-duration='1000'>
            <strong>New Horizons, Ikeja</strong><br />
            Gained hands-on experience building responsive websites and modern web interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.
          </p>
        </div>

        <div className='mt-4'>
          <h5 data-aos="fade-right" data-aos-duration='1000'>
             <strong>Cybersecurity Certification</strong>
          </h5>
          <p data-aos="fade-right" data-aos-duration='1000'>
            <strong>AltSchool Africa</strong><br />
            Studied core cybersecurity principles, including threat analysis, network defense, and ethical hacking — laying the groundwork for my transition into the cybersecurity space.
          </p>
        </div>

        <div className='mt-4'>
          <h5 data-aos="fade-right" data-aos-duration='1000'>
            <strong>ISC2 Certified in Cybersecurity (CC)</strong>
          </h5>
          <p data-aos="fade-right" data-aos-duration='1000'>
            <strong>International Information System Security Certification Consortium (ISC)²</strong><br />
            Earned global recognition for foundational cybersecurity knowledge covering security principles, risk management, network security, and incident response.
          </p>
        </div>
      </div>

      <div className='col-12 col-md-4 d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-duration='1000'>
        <div className='barrier text-center p-4' style={{ border: `2px solid ${props.border}`, borderRadius: '12px' }}>
          <h4 className='fw-bold mb-3'>Quick Highlights</h4>
          <ul className='list-unstyled text-start'>
            <li>B.Sc. Biochemistry</li>
            <li>Frontend Development (React, Tailwind, Bootstrap)</li>
            <li>Cybersecurity (AltSchool Africa)</li>
            <li>ISC2 Certified in Cybersecurity (CC)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education

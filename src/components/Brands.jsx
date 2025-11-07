import React from 'react'

const Brands = (props) => {
  return (
    <div className='brands row px-4 my-5' id='brands'>
      <div className='col-12 text-center'>
        <h2 data-aos="fade-right" data-aos-duration='1000'>
          Brands I’ve Worked With
        </h2>
        <div className='mom my-2 d-flex flex-column align-items-center' data-aos="fade-left" data-aos-duration='1000'>
          <span className='underline'></span>
        </div>
        <p className='mt-3' data-aos="fade-right" data-aos-duration='1000'>
          Over the years, I’ve had the privilege of collaborating with a range of brands and organizations, 
          helping them bring their ideas to life through creative and functional web solutions.
        </p>
      </div>

      <div className='col-12 d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4' data-aos="fade-up" data-aos-duration='1000'>
        <div className='brand-card text-center p-3 shadow-sm rounded-3' style={{ border: `2px solid ${props.border}`, minWidth: '220px' }}>
          <h5 className='fw-bold mb-1'>CarePoint Healthcare</h5>
          <p className='mb-0 small'>Healthcare Technology Solutions</p>
        </div>

        <div className='brand-card text-center p-3 shadow-sm rounded-3' style={{ border: `2px solid ${props.border}`, minWidth: '220px' }}>
          <h5 className='fw-bold mb-1'>Optimum Logistics</h5>
          <p className='mb-0 small'>Transport & Logistics Management</p>
        </div>

        <div className='brand-card text-center p-3 shadow-sm rounded-3' style={{ border: `2px solid ${props.border}`, minWidth: '220px' }}>
          <h5 className='fw-bold mb-1'>Skilltop Empire</h5>
          <p className='mb-0 small'>Tech Solutions & Training</p>
        </div>

        <div className='brand-card text-center p-3 shadow-sm rounded-3' style={{ border: `2px solid ${props.border}`, minWidth: '220px' }}>
          <h5 className='fw-bold mb-1'>Filitech Autos</h5>
          <p className='mb-0 small'>Automotive Sales & Web Solutions</p>
        </div>
      </div>
    </div>
  )
}

export default Brands

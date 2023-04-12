import React from 'react';

export default function Landing() {
  return (
    <>
      <section id="landing" className='vh-100'>
        <div className="d-flex justify-content-center align-items-center flex-column h-100 gap-3">
          <div className="caption text-center">
            <h1>A modern publishing platform</h1>
            <p className='my-3'>Grow your audience and build your online brand</p>
            <div className="btns d-flex align-items-center flex-column flex-sm-column flex-md-row flex-lg-row gap-3 justify-content-center">
              <a href="#" className='btn btnMain rounded-pill px-3 p-3 mx-2'>Start For Free</a>
              <a href="#" className='btn btnSec rounded-pill px-3 p-3 mx-2'>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import React from 'react';
import phonePic from "../../assets/images/illustration-phones.svg";

export default function About() {
  return (
    <>
      <section id="about" className='py-5 position-relative'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="img">
                <img src={phonePic} alt=""  className=''/>
              </div>
            </div>
            <div className="col-md-5">
              <div className="content">
                <h3 className='my-3'>State of the Art Infrastructure</h3>
                <p>
                  With reliability and speed in mind, orldwide data centers provide the
                  backbone for ultra-fast connectivity. This ensures your site will load
                  instantly, no matter where your readers are, keeping your site
                  competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
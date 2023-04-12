import React from 'react';
import laptopPic from "../../assets/images/illustration-laptop-desktop.svg";

export default function Product() {
  return (
    <>
      <section id="product" className='py-5'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="img">
                <img src={laptopPic} alt="" className="position-relative" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="content">
                <div className="txtOne">
                  <h3 className='my-3'>Free, open, simple</h3>
                  <p>
                    Blogr is free and open source application backed by large
                    community of helpful developers. It supports features such as code
                    syntax highlighting, RSS feeds, social media integration, third-party
                    commenting tools, and workd seamlessly with Google Analytics. The 
                    architecture is clean and is relatively easy to learn.
                  </p>
                </div>
                <div className="txtOne">
                  <h3 className='my-3'>Powerful tooling</h3>
                  <p>
                    Betteries included. We built a simple and straightforward CLI tool that
                    makes customization and deployment a breeze, but capable of 
                    producing even the most complicated sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

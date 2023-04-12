import React from 'react';
import Logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src={Logo} alt="footer-pic" className="w-50" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product">
                <h3 className='mb-4'>Product</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Marketplace</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Integrations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="company">
                <h3 className='mb-4'>Company</h3>
                <ul className='list-unstyled'>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="connect">
                <h3 className='mb-4'>Connect</h3>
                <ul className='list-unstyled'>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

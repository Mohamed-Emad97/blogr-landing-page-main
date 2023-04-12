import React from 'react';
import futurePic from "../../assets/images/illustration-editor-desktop.svg";

export default function Feature() {
  return (
    <>
      <section id='feature' className="py-5 overflow-hidden">
        <div className="container">
          <div className="title text-center mb-5">
            <h2>
              Designed for the future
            </h2>
          </div>
          <div className="row reverse align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="content p-2">
                <div className="txtOne mb-5">
                  <h3 className='mb-3'>Introducation an extensible editor</h3>
                  <p>
                    Blogr features an exceedingly intuitive interface which lets you focus
                    on one thing: creating content. The editor supports management of 
                    multiple blogs and allows easy manipulation of embeds such as images,
                    videos, and Markdown. Extensiblility with plugins and themes provide
                    easy ways to add functionality or change the looks of blog.
                  </p>
                </div>
                <div className="txtTwo">
                  <h3 className='mb-3'>Robust content management</h3>
                  <p>
                    Flexible content management enables users to easily mave through
                    posts. Increase the usability of your blog by adding customized
                    cateories, sections, format, or flow. With this functionality, you're in
                    full control.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <img src={futurePic} alt="" className="position-relative" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

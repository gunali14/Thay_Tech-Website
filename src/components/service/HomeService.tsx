import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

import './HomeService.css';

const HomeService: React.FC = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4">Offering the Best Consulting & Investa Services</h1>
        </div>
        <div className="row g-4 justify-content-center text-center">
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faDonate} size="2x" className="me-2" />
                    Software training 
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faDonate} size="2x" className="me-2" />
                    Consultancy & Advice
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faDonate} size="2x" className="me-2" />
                    Investments Planning
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faDonate} size="2x" className="me-2" />
                    Investments Planning
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faDonate} size="2x" className="me-2" />
                    Private Client Investment
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
            
            
          </div>
          
          <div className="col-12">
            <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">Services More</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HomeService;

import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Herosection from '../components/Herosection';
import ProductSlider from '../components/ProductSlider';
import Category from '../components/Category';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import Search from '../components/Search';


const Home = () => {


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
  });



  return (
    <>
      <Herosection />
      <Category />
      <Search />
      <ProductSlider />
      <div className="parallax" style={{ backgroundImage: "url('./images/asset 17.jpeg')", minHeight: "450px" }}>
        <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
          <span>Buy Now</span>
          <h2>Interested in Buying?</h2>
          <p className='mt-0'>Don't hesitate and send us a message.</p>
          <div className="mt-3 d-flex justify-content-center align-items-center flex-wrap">
            <a href="" className='button me-3 transform mb-2'><i class="fa-brands fa-whatsapp me-1"></i> WhatsApp</a>
            <a href="" className='button btn1 transform  mb-2'>Inquiry Now <i class="fa-light fa-arrow-up-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

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


const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Luxury');

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };



  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)




  });



  return (
    <>
      <Herosection />
      <Category />
      <div className="container-fluid padd-x my-5">
        <div className="heading">
          <div>
            <span>Our Products</span>
            <h2>An extraordinary model range</h2>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <button className='button me-2'>Latest</button>
            <button className='button' style={{background: "#111"}}>Featured</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <ProductItem />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ProductItem />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <ProductItem />
          </div>
        </div>
        <div className="text-center my-5">
          <Link className='button'>View More</Link>
        </div>
      </div>

      <Testimonial />
    </>
  )
}

export default Home;

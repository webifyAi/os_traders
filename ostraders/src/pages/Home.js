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
      <Search />
      <ProductSlider />
      <Testimonial />
    </>
  )
}

export default Home;

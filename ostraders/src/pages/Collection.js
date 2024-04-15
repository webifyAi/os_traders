import React, { useEffect, useState } from 'react'
import styles from '../styles/collection.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


  })

  return (
    <>
      <div className={styles.collection}>
        <div className="heading2">
          <h1>The Collection</h1>
        </div>

        <div className="mt-5 d-flex justify-content-between align-items-center w-100">
          <div className={styles.filter}>
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor='filter'>Filter By</label>
              <i className=' fa-regular fa-plus'></i>
            </div>
            <div className={styles.filter_dropdown}>
            </div>
          </div>
          <div className='d-flex justify-content-end align-items-center'>
            <div className={styles.brand_card}>
              <img src="./images/sedan-red.svg" className='img-fluid' alt="" />
              <h5>Sedan</h5>
            </div>
            <div className={styles.brand_card}>
              <img src="./images/crossover-red.svg" className='img-fluid' alt="" />
              <h5>Crossover</h5>
            </div>
            <div className={styles.brand_card}>
              <img src="./images/suv-red.svg" className='img-fluid' alt="" />
              <h5>SUV</h5>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <ProductItem />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <ProductItem />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <ProductItem />
          </div>
        </div>
      </div>

    </>
  )
}

export default Collection

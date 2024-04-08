import React, { useEffect, useState } from 'react'
import styles from '../styles/collection.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';

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
        <div className={styles.filter}>

        </div>
        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.item}>
              <h4>Lamborgini</h4>
              <span>Premium</span>
              <img src="./images/product-1.png" className='img-fluid' alt="" />
              <Link><p>Details</p> <i class="fa-regular fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.item}>
              <h4>Lamborgini</h4>
              <span>Premium</span>
              <img src="./images/product-1.png" className='img-fluid' alt="" />
              <Link><p>Details</p> <i class="fa-regular fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.item}>
              <h4>Lamborgini</h4>
              <span>Premium</span>
              <img src="./images/product-1.png" className='img-fluid' alt="" />
              <Link><p>Details</p> <i class="fa-regular fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Collection

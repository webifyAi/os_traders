import React, { useEffect, useState } from 'react'
import styles from '../styles/collection.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import PageHeader from '../components/PageHeader';

const Collection = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


  })

  return (
    <>
      <PageHeader subTitle="select your car" title="Our Luxury" spanTitle="Car Collection" bgImage="./images/headerBg.jpeg" />
      <div className={styles.collection}>
        <div className="container mt-5">
          <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-12 mb-100">
              <ProductItem />
            </div>
            <div className="col-lg-6 col-md-12 col-12 mb-100">
              <ProductItem />
            </div>
            <div className="col-lg-6 col-md-12 col-12 mb-100">
              <ProductItem />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Collection

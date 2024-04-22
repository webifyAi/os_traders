import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/detail.module.css'
import product from '../styles/product.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Detail = () => {


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
  });


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  const [accord, setAccord] = useState(Array(3).fill(false));


  const handleAccord = (index) => {
    const updatedArray = [...accord];
    updatedArray[index] = !updatedArray[index];
    setAccord(updatedArray);
  }


  return (
    <>
      <div className={styles.page}>
        <div className={styles.slider}>
          <div className={styles.title}>
            <span>Luxury cars</span>
            <h1>Lamborghini Urus</h1>
          </div>
          <Swiper
            loop={true}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset15.jpeg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset 16.jpeg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset 17.jpeg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset 12.jpeg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset 13.jpeg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src="./images/asset 14.jpeg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={`container ${styles.details}`}>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className={styles.info}>
                <div className={styles.head}>
                  <span>Luxury cars</span>
                  <h1>Lamborghini Urus</h1>
                </div>
                <h4>General Information</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium praesentium aut quam expedita nostrum illum blanditiis esse aperiam vitae pariatur, dolorum magnam explicabo iste sequi laboriosam et. Voluptatum, necessitatibus excepturi.</p>
                <ul>
                  <li><i className='fa-solid fa-check'></i>24/7 Customer Assistance</li>
                  <li><i className='fa-solid fa-check'></i>24/7 Customer Assistance</li>
                  <li><i className='fa-solid fa-check'></i>24/7 Customer Assistance</li>
                </ul>
                <h4 className='mt-5'>Image Gallery</h4>
                <div className={styles.gallery}>
                  <Gallery>
                    <Item
                      original="./images/asset 1.jpeg"
                      thumbnail="./images/asset 1.jpeg"
                      width="768"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="./images/asset 1.jpeg" className='img-fluid' />
                      )}
                    </Item>
                    <Item
                      original="./images/asset 2.jpeg"
                      thumbnail="./images/asset 2.jpeg"
                      width="768"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="./images/asset 2.jpeg" className='img-fluid' />
                      )}
                    </Item>
                    <Item
                      original="./images/asset 3.jpeg"
                      thumbnail="./images/asset 3.jpeg"
                      width="768"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="./images/asset 3.jpeg" className='img-fluid' />
                      )}
                    </Item>
                  </Gallery>
                </div>

                <div className={styles.accord}>
                  <h4>Conditions</h4>
                  <div className={`${styles.accord_item} ${accord[0] ? styles.active : ''}`} onClick={() => handleAccord(0)}>
                    <div className={styles.accord_head}>
                      <h5><span>1.</span> Contract and Annexes</h5>
                      <i className='fa-solid fa-angle-right'></i>
                    </div>
                    <div className={styles.accord_content}>
                      <div className={styles.text}>In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                    </div>
                  </div>

                  <div className={`${styles.accord_item} ${accord[1] ? styles.active : ''}`} onClick={() => handleAccord(1)}>
                    <div className={styles.accord_head}>
                      <h5><span>1.</span> Contract and Annexes</h5>
                      <i className='fa-solid fa-angle-right'></i>
                    </div>
                    <div className={styles.accord_content}>
                      <div className={styles.text}>In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.price}>
                <div className={styles.price_head}>
                  <h3>$10,000/-</h3>
                </div>
                <div className={styles.price_info}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="./images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>4 Seats</span>
                    </div>
                    <div>
                      <p>4</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="./images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>4 Seats</span>
                    </div>
                    <div>
                      <p>4</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="./images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>4 Seats</span>
                    </div>
                    <div>
                      <p>4</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className={product.icon}>
                        <img src="./images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                      </div>
                      <span>4 Seats</span>
                    </div>
                    <div>
                      <p>4</p>
                    </div>
                  </div>

                  <div className={styles.btns}>
                    <button className={styles.btn}>Inquiry Now</button>
                    <span>&</span>
                    <Link className={styles.btn}><i className=' fa-brands fa-whatsapp me-1'></i> WhatsApp</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail

import React, { useState } from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom'

const ProductItem = () => {

    return (
        <>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src="./images/product.jpeg" className='img-fluid' alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <a href=""><h4>Lamborghini Urus</h4></a>
                        <div className="mt-1 d-flex justify-content-start align-items-center flex-wrap" style={{ gap: "5px" }}>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="./images/car-door-svgrepo-com.svg" className='img-fluid' alt="" />
                                </div>
                                <span>4 Seats</span>
                            </div>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="./images/transmission.svg" className='img-fluid' alt="" />
                                </div>
                                <span>Auto</span>
                            </div>
                            <div className='d-flex align-items-center' style={{ gap: "5px" }}>
                                <div className={styles.icon}>
                                    <img src="./images/dashboard.svg" className='img-fluid' alt="" />
                                </div>
                                <span>4 bags</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="/detail" className='button' style={{ padding: "15px 20px", fontSize: ".8rem" }}>Details</a>
                        <p className={styles.price}>$10,000</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductItem

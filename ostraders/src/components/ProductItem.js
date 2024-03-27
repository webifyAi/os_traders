import React, { useState } from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom'

const ProductItem = () => {

    const [image, setImage] = useState(Array(3).fill(false));
    const images = [
        "./images/asset 10.webp",
        "./images/asset 11.webp",
        "./images/asset 12.webp",
        "./images/asset 13.webp"
    ];

    const [index, setIndex] = useState(0);
    
    const changeImage = (index) => {
        const updatedArray = [...image];
        updatedArray[index] = !updatedArray[index];
        setImage(updatedArray);
        setIndex(index);
    }

    return (
        <>

            <div className={styles.item}>
                <Link className={styles.item_img} onMouseLeave={() => setIndex(0)}>
                    <img src={images[index]} alt="" className='img-fluid' />
                    <div className={styles.nav}>
                        <div  onMouseEnter={() => changeImage(0)} onMouseLeave={() => changeImage(0)}>
                            <span></span>
                        </div>
                        <div  onMouseEnter={() => changeImage(1)} onMouseLeave={() => changeImage(1)}>
                            <span></span>
                        </div>
                        <div  onMouseEnter={() => changeImage(2)} onMouseLeave={() => changeImage(2)}>
                            <span></span>
                        </div>
                    </div>
                </Link>
                <span className={styles.tag}>2023</span>
                <div className={styles.item_content}>
                    <span>Sedan</span>
                    <div className="d-flex justify-content-between align-items-start flex-column">
                        <Link><h4>Mercedes-Benz C-Class</h4></Link>
                        <span className={styles.price}>$20,000</span>
                    </div>
                    <div className={styles.details}>
                        <div className="d-flex align-items-center">
                            <img src="./images/fuel.svg" alt="" /> Hybrid
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="./images/dashboard.svg" alt="" /> 15000km
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="./images/transmission.svg" alt="" /> Auto
                        </div>
                    </div>
                    <div className={styles.action}>
                        <Link href="" className=''>View Details <i class="fa-solid fa-arrow-right"></i></Link>
                        <button className={styles.btn}><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem

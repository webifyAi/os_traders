import React from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom'

const ProductItem = () => {
    return (
        <>

            <div className={styles.item}>
                <img src="./images/asset 10.webp" className='img-fluid' alt="" />
                <div className={styles.tag}>2023</div>
                <div className={styles.item_content}>
                    <span>Sedan</span>
                    <div className="d-flex justify-content-between align-items-start flex-column">
                        <Link><h4>Mercedes-Benz C-Class</h4></Link>
                        <span className={styles.price}>$20,000</span>
                    </div>
                    <div className={styles.details}>
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-engine ms-0"></i> 5600 CC
                        </div>
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-engine ms-0"></i> 5600 CC
                        </div>
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-engine ms-0"></i> 5600 CC
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

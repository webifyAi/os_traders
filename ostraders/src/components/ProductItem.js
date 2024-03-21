import React from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom'

const ProductItem = () => {
    return (
        <>  
            

            <div className={styles.item}>
                <Link><img src="./images/car1.jpg" className='img-fluid' alt="" /></Link>
                <div className={styles.item_content}>
                    <div className="d-flex justify-content-between align-items-center mt-2 mb-1">
                        <Link><h4>Car Name</h4></Link>
                        <span className={styles.price}>$20,000</span>
                    </div>
                    <p>Build Year: 2000</p>
                    <div className={styles.details}>
                        <i class="fa-solid fa-engine ms-0"></i> 5600 CC
                        <i class="fa-solid fa-engine"></i> 5600 CC
                        <i class="fa-solid fa-engine"></i> 5600 CC
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem

import React, { useState } from 'react'
import ProductItem from '../components/ProductItem'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom';


const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Luxury');

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };


  return (
    <>

      <div className="container-fluid padd-x my-5">

        <div className="heading text-center">
          <h2>Our car collection</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam placeat excepturi omnis similique perferendis</p>
        </div>

        <div className={styles.product_nav}>
          <ul>
            <li className={selectedItem === 'Luxury' ? styles.current : ''} onClick={() => handleClick('Luxury')}>Luxury</li>
            <li className={selectedItem === 'Premium' ? styles.current : ''} onClick={() => handleClick('Premium')}>Premium</li>
            <li className={selectedItem === 'Electric' ? styles.current : ''} onClick={() => handleClick('Electric')}>Electric</li>
            <li className={selectedItem === 'Sports' ? styles.current : ''} onClick={() => handleClick('Sports')}>Sports</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <ProductItem />
          </div>
          <div className="col-lg-3">
            <ProductItem />
          </div>
          <div className="col-lg-3">
            <ProductItem />
          </div>
          <div className="col-lg-3">
            <ProductItem />
          </div>
        </div>

        <div className="text-center my-5">
          <Link class="btn-12"><span>View More</span></Link>
        </div>
      </div>
    </>
  )
}

export default Home

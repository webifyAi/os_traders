import React, { useState } from 'react'
import ProductItem from '../components/ProductItem'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom';
import data from "../assets/logos.json"

const Home = () => {

  const [selectedItem, setSelectedItem] = useState('Luxury');

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };


  return (
    <>

      {/*herosection startsss heererere */}

      <div className="container-fluid herosection">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 hero-content">
              <span>Export Auto Service _____</span>
              <h2>Mercediz Benz - 2.0</h2>
              <p>Distinctively optimize web-enabled materials with functional markets. intellectual capital with applications. </p>
              <ul>
                <li><i className='fa-regular fa-circle-check'></i>Leather Seats</li>
                <li><i className='fa-regular fa-circle-check'></i>Leather Seats</li>
                <li><i className='fa-regular fa-circle-check'></i>Leather Seats</li>
              </ul>
              <div className="mt-1">
                  <a href="" className='btn'>Explore Now</a>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="hero-img">
                <img src="./images/hero-car-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*herosection ends heererere */}

      <div className="container padd-x mt-5">
        <div className="heading text-center my-5">
          <h3 className=''>Brands we have</h3>
          <h2>Browse By makes</h2>
        </div>
        <div className="company">
          {data.slice(0, 10).map((item, index) => {
            return <div className='brand-card'>
              <img src={item.image.source} alt="" />
              <i class="fa-light fa-arrow-up-right arrow"></i>
            </div>
          })}
        </div>
      </div>

      {/*Category section starts heererere */}


      {/*Category section endss heererere */}


      <div className="container-fluid my-5 products">

        <div className="container">
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
            <div className="col-lg-4 col-md-6 col-sm-6">
              <ProductItem />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <ProductItem />
            </div>
          </div>
          <div className="text-center my-5">
            <Link class="btn-12"><span>View More</span></Link>
          </div>
        </div>

      </div>






    </>
  )
}

export default Home;

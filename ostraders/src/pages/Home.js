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

      {/*herosection startsss heererere */}

      <div className="container-fluid herosection p-0">
        <div className="pt-5 mt-5 row align-items-start ">
          <div className="col-lg-5 col-12 hero-left">
            <h2>Choice for</h2>
            <h3>The best</h3>
            <h1>Car</h1>
            <h2 style={{color: "#aaa", fontSize: '2.5rem', margin: '0'}}>Buy a</h2>
          <p>Enhance your <br /> Driving Experience</p>
          <div className="my-2">
            <Link class="btn-12"><span>Explore</span></Link>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center align-items-center">
          <img src="./images/BMW.png" className='img-fluid' alt="" />
        </div>
      </div>
    </div >


      {/*herosection ends heererere */ }

  {/*Category section starts heererere */ }





  {/*Category section endss heererere */ }


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
          <div className="col-lg-3 col-md-6 col-sm-6">
            <ProductItem />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <ProductItem />
          </div>
        </div>

        <div className="text-center my-5">
          <Link class="btn-12"><span>View More</span></Link>
        </div>
      </div>





      <div className="container-fluid">
        <div className="heading">
          <h2>Brands we have</h2>

        </div>
      </div>
    </>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import styles from '../styles/collection.module.css';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const Collection = () => {


  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: 'red',
    height: 3,
    padding: '1px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: 'red',
      // border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));

  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span style={{ color: "white" }}>os</span>
      </SliderThumb>
    );
  }

  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };

  const [drop, setDrop] = useState(Array(10).fill(false));

  const handleDrop = (index) => {
    const updatedArray = [...drop];
    updatedArray[index] = !updatedArray[index]
    setDrop(updatedArray)
  }

  return (
    <>
      <div className={`container my-5 ${styles.collection}`}>

        <div className="row">
          <div className="col-lg-3 col-13 ">
            <div className={styles.filter}>
              <div className={styles.titleFilter}>
                <h2>Find Car</h2>

              </div>
              <div className={`${styles.lines}`} >
                <div onClick={() => handleDrop(0)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Make</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[0] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(0)}>Make</li>
                  <li onClick={() => handleDrop(0)}>Acura</li>
                  <li onClick={() => handleDrop(0)}>Audi</li>
                  <li onClick={() => handleDrop(0)}>Bentley</li>
                  <li onClick={() => handleDrop(0)}>BMV</li>
                  <li onClick={() => handleDrop(0)}>Chevrolet</li>
                  <li onClick={() => handleDrop(0)}>Ferrari</li>
                  <li onClick={() => handleDrop(0)}>Ford</li>
                  <li onClick={() => handleDrop(0)}>Lexus</li>
                  <li onClick={() => handleDrop(0)}>Porsche</li>
                  <li onClick={() => handleDrop(0)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines} >
                <div onClick={() => handleDrop(1)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Body</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[1] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(1)}>Make</li>
                  <li onClick={() => handleDrop(1)}>Acura</li>
                  <li onClick={() => handleDrop(1)}>Audi</li>
                  <li onClick={() => handleDrop(1)}>Bentley</li>
                  <li onClick={() => handleDrop(1)}>BMV</li>
                  <li onClick={() => handleDrop(1)}>Chevrolet</li>
                  <li onClick={() => handleDrop(1)}>Ferrari</li>
                  <li onClick={() => handleDrop(1)}>Ford</li>
                  <li onClick={() => handleDrop(1)}>Lexus</li>
                  <li onClick={() => handleDrop(1)}>Porsche</li>
                  <li onClick={() => handleDrop(1)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(2)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Fuel Type</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[2] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(2)}>Make</li>
                  <li onClick={() => handleDrop(2)}>Acura</li>
                  <li onClick={() => handleDrop(2)}>Audi</li>
                  <li onClick={() => handleDrop(2)}>Bentley</li>
                  <li onClick={() => handleDrop(2)}>BMV</li>

                </ul>
              </div>


              <div className={styles.range}>
                <div className={styles.Price}><h4>Price</h4></div>
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[20, 40]}
                />
                <div className={styles.FromAmount}><h4>$0</h4><h4>$20000</h4> </div>

              </div>



              <div className={styles.lines}>
                <div onClick={() => handleDrop(3)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Car Model</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[3] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(3)}>Make</li>
                  <li onClick={() => handleDrop(3)}>Acura</li>
                  <li onClick={() => handleDrop(3)}>Audi</li>
                  <li onClick={() => handleDrop(3)}>Bentley</li>
                  <li onClick={() => handleDrop(3)}>BMV</li>
                  <li onClick={() => handleDrop(3)}>Chevrolet</li>
                  <li onClick={() => handleDrop(3)}>Ferrari</li>
                  <li onClick={() => handleDrop(3)}>Ford</li>
                  <li onClick={() => handleDrop(3)}>Lexus</li>
                  <li onClick={() => handleDrop(3)}>Porsche</li>
                  <li onClick={() => handleDrop(3)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(4)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Build Year</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[4] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(4)}>Make</li>
                  <li onClick={() => handleDrop(4)}>Acura</li>
                  <li onClick={() => handleDrop(4)}>Audi</li>
                  <li onClick={() => handleDrop(4)}>Bentley</li>
                  <li onClick={() => handleDrop(4)}>BMV</li>
                  <li onClick={() => handleDrop(4)}>Chevrolet</li>
                  <li onClick={() => handleDrop(4)}>Ferrari</li>
                  <li onClick={() => handleDrop(4)}>Ford</li>
                  <li onClick={() => handleDrop(4)}>Lexus</li>
                  <li onClick={() => handleDrop(4)}>Porsche</li>
                  <li onClick={() => handleDrop(4)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(5)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Transmission</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[5] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(5)}>Make</li>
                  <li onClick={() => handleDrop(5)}>Acura</li>
                  <li onClick={() => handleDrop(5)}>Audi</li>
                  <li onClick={() => handleDrop(5)}>Bentley</li>
                  <li onClick={() => handleDrop(5)}>BMV</li>
                  <li onClick={() => handleDrop(5)}>Chevrolet</li>
                  <li onClick={() => handleDrop(5)}>Ferrari</li>
                  <li onClick={() => handleDrop(5)}>Ford</li>
                  <li onClick={() => handleDrop(5)}>Lexus</li>
                  <li onClick={() => handleDrop(5)}>Porsche</li>
                  <li onClick={() => handleDrop(5)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(6)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Driver Type</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[6] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(6)}>Make</li>
                  <li onClick={() => handleDrop(6)}>Acura</li>
                  <li onClick={() => handleDrop(6)}>Audi</li>
                  <li onClick={() => handleDrop(6)}>Bentley</li>
                  <li onClick={() => handleDrop(6)}>BMV</li>
                  <li onClick={() => handleDrop(6)}>Chevrolet</li>
                  <li onClick={() => handleDrop(6)}>Ferrari</li>
                  <li onClick={() => handleDrop(6)}>Ford</li>
                  <li onClick={() => handleDrop(6)}>Lexus</li>
                  <li onClick={() => handleDrop(6)}>Porsche</li>
                  <li onClick={() => handleDrop(6)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(7)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Door</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[7] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(7)}>Make</li>
                  <li onClick={() => handleDrop(7)}>Acura</li>
                  <li onClick={() => handleDrop(7)}>Audi</li>
                  <li onClick={() => handleDrop(7)}>Bentley</li>
                  <li onClick={() => handleDrop(7)}>BMV</li>
                  <li onClick={() => handleDrop(7)}>Chevrolet</li>
                  <li onClick={() => handleDrop(7)}>Ferrari</li>
                  <li onClick={() => handleDrop(7)}>Ford</li>
                  <li onClick={() => handleDrop(7)}>Lexus</li>
                  <li onClick={() => handleDrop(7)}>Porsche</li>
                  <li onClick={() => handleDrop(7)}>Mercedes</li>
                </ul>
              </div>
              <div className={styles.lines}>
                <div onClick={() => handleDrop(8)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Color</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[8] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(8)}>Make</li>
                  <li onClick={() => handleDrop(8)}>Acura</li>
                  <li onClick={() => handleDrop(8)}>Audi</li>
                  <li onClick={() => handleDrop(8)}>Bentley</li>
                  <li onClick={() => handleDrop(8)}>BMV</li>
                  <li onClick={() => handleDrop(8)}>Chevrolet</li>
                  <li onClick={() => handleDrop(8)}>Ferrari</li>
                  <li onClick={() => handleDrop(8)}>Ford</li>
                  <li onClick={() => handleDrop(8)}>Lexus</li>
                  <li onClick={() => handleDrop(8)}>Porsche</li>
                  <li onClick={() => handleDrop(8)}>Mercedes</li>
                </ul>
              </div>


              <div className={styles.range}>
                <div className={styles.Price}><h4>Price</h4></div>
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[20, 40]}
                />
                <div className={styles.FromAmount}><h4>$0</h4><h4>$20000</h4> </div>

              </div>

              <div className={styles.range}>
                <div className={styles.Price}><h4>Price</h4></div>
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[20, 40]}
                />
                <div className={styles.FromAmount}><h4>$0</h4><h4>$20000</h4> </div>

              </div>


              <div className={`${styles.lines} ${styles.check}`} >
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Featured</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Anti Lock Breaking</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Brake Assist</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Child Safety Locks</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Power Door Front</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; Rain Sensia Wiber</h3>
                <h3> <input type="checkbox" name="" id="" /> &nbsp;&nbsp;&nbsp; TAchometer</h3>
              </div>

            </div>


          </div>
          <div className="col-lg-9 col-12 mt-lg-0 mt-5">
            <div className="mb-2 d-flex justify-content-between align-items-center">
              <div className={styles.titleC}><h2>Our Collections</h2></div>

              <div className={styles.lines} style={{width: "200px" }}>
                <div onClick={() => handleDrop(9)} className='d-flex justify-content-between w-100 align-items-center'>
                  <h3>Color</h3> <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul className={`${styles.drop} ${drop[9] ? styles.active : ''}`}>
                  <li onClick={() => handleDrop(9)}>Make</li>
                  <li onClick={() => handleDrop(9)}>Acura</li>
                  <li onClick={() => handleDrop(9)}>Audi</li>
                  <li onClick={() => handleDrop(9)}>Bentley</li>
                  <li onClick={() => handleDrop(9)}>BMV</li>
                  <li onClick={() => handleDrop(9)}>Chevrolet</li>
                  <li onClick={() => handleDrop(9)}>Ferrari</li>
                  <li onClick={() => handleDrop(9)}>Ford</li>
                  <li onClick={() => handleDrop(9)}>Lexus</li>
                  <li onClick={() => handleDrop(9)}>Porsche</li>
                  <li onClick={() => handleDrop(9)}>Mercedes</li>
                </ul>
              </div>

            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
                <ProductItem />
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
                <ProductItem />
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection

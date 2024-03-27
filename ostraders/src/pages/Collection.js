import React from 'react'
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







  return (
    <>
      <div className={`container-fluid padd-2 my-5 ${styles.collection}`}>

        <div className="row">
          <div className="col-lg-3 col-13 ">
            <div className={styles.filter}>
              <div className={styles.titleFilter}>
                <h2>Find Car</h2>
              </div>
              <div className={styles.lines}>
                <h3>Make</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Body</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Fuel Type</h3> <i class="fa-solid fa-chevron-down"></i>
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
                <h3>Car model</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Build year</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Transmission</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Driver type</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Door</h3> <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles.lines}>
                <h3>Color</h3> <i class="fa-solid fa-chevron-down"></i>
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
              

            </div>


          </div>
          <div className="col-lg-9 col-12">
            <div className="mb-2 d-flex justify-content-end align-items-center">
              <select name="" id="">
                <option value="">Sort By</option>
                <option value="">Price range</option>
                <option value="">Price range</option>
                <option value="">Price range</option>
              </select>
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

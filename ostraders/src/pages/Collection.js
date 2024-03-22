import React from 'react'
import ProductItem from '../components/ProductItem'
import styles from '../styles/collection.module.css';

const Collection = () => {
  return (
    <>
      <div className={`container-fluid padd-x marg-y ${styles.collection}`}>
        <div className="row">
          <div className="col-lg-3 col-12">

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
              <div className="col-md-4 col-sm-6 col-12">
                <ProductItem />
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <ProductItem />
              </div>
              <div className="col-md-4 col-sm-6 col-12">
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

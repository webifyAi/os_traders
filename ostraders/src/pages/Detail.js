import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/detail.module.css'


const Detail = () => {
  return (
    <>
      <div className={styles.page}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src="./images/asset 23.webp" className='img-fluid' alt="" />
          </div>
          <div className={`col-lg-6 col-12 ${styles.content}`}>
            <h1>BMW</h1>
            <h4 className='mb-4 mt-2'>$ 3.54L</h4>
            <div>
              <Link className='button'>Inquiry now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail

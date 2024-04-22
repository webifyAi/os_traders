import React from 'react'
import styles from '../styles/book.module.css'

const Inquiry = () => {
    return (
        <>
            <div className={styles.model}>
                <div className={styles.model_head}>
                    <h3>Booking Form</h3>
                    <i className='fa-regular fa-xmark'></i>
                </div>
                <div className={styles.model_content}>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="input-field">
                                    <input type="text" placeholder='Full Name*' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12"></div>
                            <div className="col-lg-6 col-12"></div>
                            <div className="col-lg-6 col-12"></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Inquiry

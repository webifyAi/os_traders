import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Footer = () => {


    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.contacts}>
                    <div className={styles.contact_item}>
                        <i class="fa-light fa-phone"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Call us</span>
                            <a className='m-0'>+91 98-333-4444</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i class="fa-light fa-envelope"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Call us</span>
                            <a className='m-0'>+91 98-333-4444</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i class="fa-light fa-location-dot"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Call us</span>
                            <a className='m-0'>+91 98-333-4444</a>
                        </div>
                    </div>
                </div>

                <div className={`row ${styles.footer_section}`}>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <img src="./images/OS TRADERS.png" className='img-fluid' alt="" />
                        <p>Purchasing a used car provides the opportunity to own a vehicle while avoiding the burden of wear and tear.</p>
                        <div className="d-flex align-items-center justify-content-start">
                            <i className={`fa-brands fa-whatsapp ${styles.icon}`}></i>
                            <i className={`fa-brands fa-facebook-f ${styles.icon}`}></i>
                            <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-md-center align-items-md-center flex-column">
                        <div className=''>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="">About</Link></li>
                                <li><Link to="">Cars</Link></li>
                                <li><Link to="">Car Types</Link></li>
                                <li><Link to="">Team</Link></li>
                                <li><Link to="">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4>Subscribe</h4>
                        <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                        <form action="" className={styles.newsLetter}>
                            <input type="text" placeholder='Email Address'/>
                            <button><i className={`fa-light fa-arrow-up-long ${styles.icon}`}></i></button>
                        </form>
                    </div>
                </div>
                <div className={styles.foot}>
                    <p>©2024 <a href="">webify.ai</a> All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer

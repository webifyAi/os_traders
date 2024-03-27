import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>

                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div>

                            <img src='./images/'></img>
                            <h4>Dealership Has Multiple Locations throughout the city selling new and used cars.</h4>
                            <a href="#"><i class="fa-solid fa-location-dot"></i> Ahmedabad james 007 mono Complex</a>
                            <a href="#"><i class="fa-solid fa-circle-info"></i> help@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6  d-flex align-items-start justify-content-center flex-column mt-5 mt-md-0 ">
                        <h2 >Quick Links</h2>
                        <h3>
                            <li> <i class="fa-solid fa-arrow-right"></i> Service Locator </li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Dealer Locator</li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Pre-owned</li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Accessori Original</li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Spare Parts</li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Services</li>
                        </h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6  d-flex align-items-start justify-content-center flex-column  mt-5 mt-md-0">
                        <h2>Research</h2>
                        <h3>
                            <li><i class="fa-solid fa-arrow-right"></i>Build & Price A vihcle</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Compare Models</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Warrenty</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Download a Broucher</li>
                            <li><i class="fa-solid fa-arrow-right"></i>Sign up for updates </li>
                            <li><i class="fa-solid fa-arrow-right"></i>Mail Me a Broucher</li>
                        </h3>
                    </div>

                    <div className='col-lg-4  col-md-4 col-sm-6   d-flex align-items-start justify-content-start  flex-column mt-5 mt-lg-0'>
                        <h2>Newslatter</h2>
                       <div className={styles.letter}> <input type="name" placeholder='Enter Email Adress'/><i class="fa-light fa-paper-plane"></i></div>
                    </div>
                </div>




                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        <h2>Copyright &copy; 2024, Designed & Devloped by <br /> <span>Webify.ai</span></h2>
                    </div>
                    <div className={styles.icons}>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-square-whatsapp"></i>
                    </div>
                    <div className={styles.warning}>
                        <h4>Privacy & Policy</h4>
                        <h4>Licensing</h4>
                        <h4>Instructions</h4>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Footer

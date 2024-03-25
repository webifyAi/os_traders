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
                            <p>Ahmedabad james 007 mono Complex</p>
                            <h3>needhelp@gmail.com</h3>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div>
                            <h1>Quick Links</h1>
                            <h2>
                                <li>Dealer Locator</li>
                                <li>Service Locator </li>
                                <li>Pre-owned</li>
                                <li>Accessori Original</li>
                                <li>Spare Parts</li>
                                <li>Services</li>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div>
                            <h1>Research</h1>
                            <h2>
                                <li>Build & Price A vihcle</li>
                                <li>Compare Models</li>
                                <li>Warrenty</li>
                                <li>Download a Broucher</li>
                                <li>Sign up for updates </li>
                                <li>Mail Me a Broucher</li>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div>
                            <h1>Newslatter</h1>

                            <input type="Text" placeholder='Enter Email Adress' className={styles.me} />
                            <br />
                            <div className={styles.re}>
                                <div className={styles.circle}></div>i agree to all your terms and policies
                            </div>
                        </div>

                    </div>
                </div>




                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        <h2>Copyright &copy; 2024, Designed & Devloped by <br />Themesflat</h2>
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

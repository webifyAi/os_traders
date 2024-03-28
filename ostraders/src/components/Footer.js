import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.con1}>
                    <div className={styles.info}>
                        <img src="./images/OS TRADERS.png" alt="" />
                        <h3>Dealership has multiple locations throughout the city selling new and used cars.</h3>
                        <h4> <i class="fa-solid fa-location-dot"></i> 14 New South Head Rd,Triple Bay 3148London, UK</h4>
                        <h4> <i class="fa-regular fa-envelope"></i> needhelp@company.com</h4>
                    </div>
                    <div className={styles.links}>
                        <h2>Quick Links</h2>
                        <ul>

                            <li> <i class="fa-solid fa-arrow-right"></i>  Service Locator</li>
                            <li> <i class="fa-solid fa-arrow-right"></i>  Pre Owned</li>
                            <li> <i class="fa-solid fa-arrow-right"></i>  Accessories Originali</li>
                            <li> <i class="fa-solid fa-arrow-right"></i>  Spare Parts</li>
                            <li> <i class="fa-solid fa-arrow-right"></i>  Services</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.con1}>
                    <div className={styles.links}>
                        <h2>Quick Links</h2>
                        <ul>
                            <li> <i class="fa-solid fa-arrow-right"></i> Build & Price A Vhicle </li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Compare Models </li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Warrenty </li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Download a Broucher</li>
                            <li> <i class="fa-solid fa-arrow-right"></i> Mail Me a Broucher</li>
                        </ul>
                    </div>
                    <div className={styles.newslater}>
                    <div className={styles.links}>
                        <h2>Newsletter</h2>

                        <input type="email" name="EMAIL" placeholder="Enter Email Adress" required=""></input>
                        <button type="submit"> <i class="fa-solid fa-paper-plane"></i> </button>    

                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer

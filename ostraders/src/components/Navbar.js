import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    
    const menuOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="./images/OS TRADERS.png" alt="OS Traders" />
                </div>
                <div className='d-flex align-items-center'>
                    <ul className={`${styles.nav_main_menu} ${open ? styles.active : ""}`}>
                        <button className={styles.close_toggle} onClick={menuOpen}><i className="fa-light fa-xmark"></i></button>
                        <li><a href="#" className={styles.nav_link}>Home</a></li>
                        <li className={styles.dropdown}>
                            <a href="#" className={styles.nav_link}><span>Collections</span> <i className="fa-regular fa-chevron-down"></i></a>
                            <ul className={styles.dropdown_content}>
                                <li><a href="#">Car Parts</a></li>
                                <li className={styles.sub_dropdown}>
                                    <a href="#" className={styles.dropdown_link}><span>Cars</span> <i className="fa-regular fa-chevron-right"></i></a>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><a href="#">Luxury Cars</a></li>
                                        <li><a href="#">Premium Cars</a></li>
                                        <li><a href="#">Electric Cars</a></li>
                                        <li><a href="#">Sports Cars</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Trucks</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className={styles.nav_link}>About</a></li>
                        <li><a href="#" className={styles.nav_link}>Contact</a></li>
                    </ul>
                    <button className={styles.btn}><i class="fa-regular fa-magnifying-glass"></i></button>
                    <button className={styles.menu_toggle} onClick={menuOpen}><i className="fa-light fa-bars"></i></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar

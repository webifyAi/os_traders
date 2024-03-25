import React, { useState } from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {

    const location = useLocation();
    const [open, setOpen] = useState(false);

    const menuOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="container-fluid" style={{background: "var(--text-color)"}}>
                <nav className={`${styles.nav} container`}>
                    <Link to="/" className={styles.logo}>
                        <img src="./images/OS TRADERS.png" alt="OS Traders" />
                    </Link>
                    <ul className={`${styles.nav_main_menu} ${open ? styles.active : ""}`}>
                        <button className={styles.close_toggle} onClick={menuOpen}><i className="fa-light fa-xmark"></i></button>
                        <li><a href="/" className={styles.nav_link}>Home</a></li>
                        <li className={styles.dropdown}>
                            <a href="/collection" className={styles.nav_link}><span>Collections</span> <i className="fa-regular fa-chevron-down"></i></a>
                            <ul className={styles.dropdown_content}>
                                <li><a href="/collection/parts">Car Parts</a></li>
                                <li className={styles.sub_dropdown}>
                                    <a href="/collection/cars" className={styles.dropdown_link}><span>Cars</span> <i className="fa-regular fa-chevron-right"></i></a>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><a href="/collection/cars/luxury">Luxury Cars</a></li>
                                        <li><a href="/collection/cars/premium">Premium Cars</a></li>
                                        <li><a href="/collection/cars/electric">Electric Cars</a></li>
                                        <li><a href="/collection/cars/sports">Sports Cars</a></li>
                                    </ul>
                                </li>
                                <li><a href="/collection/trucks">Trucks</a></li>
                            </ul>
                        </li>
                        <li><a href="/about" className={styles.nav_link}>About</a></li>
                        <li><a href="/contact" className={styles.nav_link}>Contact</a></li>
                    </ul>
                    <div className='d-flex align-items-center'>
                        <button className={styles.btn}><i class="fa-regular fa-magnifying-glass"></i></button>
                        <button className={styles.menu_toggle} onClick={menuOpen}><i className="fa-light fa-bars"></i></button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar

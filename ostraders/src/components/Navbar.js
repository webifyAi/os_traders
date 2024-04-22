import React, { useRef, useState } from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Navbar = () => {

    const location = useLocation();
    const [open, setOpen] = useState(false);
    const menu = useRef([])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // let mm = gsap.matchMedia();

        // mm.add("(max-width:999px)", () => {
        //     const tl = gsap.timeline({
        //         // paused: true,
        //     })

        //     tl.paused();

        //     menu.current.forEach((item) => {
        //         tl.from(item, {
        //             y: 50,
        //             opacity: 0,
        //             duration: .8,
        //             stagger: .3
        //         })
        //     })

        //     if (open) {
        //         tl.play();
        //     } else {
        //         tl.reverse();
        //     }
        // })
    }, [open])


    const menuOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className={`${styles.nav} `}>
                <a href="/" className={styles.logo}>
                    <img src="./images/OS TRADERS.png" alt="OS Traders" />
                </a>
                <div className='d-flex justify-content-center align-items-center'>
                    <ul className={`${styles.nav_main_menu} ${open ? styles.active : ""}`}>
                        <button className={styles.close_toggle} onClick={menuOpen}><i className="fa-light fa-xmark"></i></button>
                        <li ref={(ref) => menu.current.push(ref)}><a href="/" className={styles.nav_link}>Home</a></li>
                        <li ref={(ref) => menu.current.push(ref)} className={styles.dropdown}>
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
                        <li ref={(ref) => menu.current.push(ref)}><a href="/MG" className={styles.nav_link}><img src="./images/MG.png" style={{ width: "30px", height: "30px" }} alt="" /> Exclusive</a></li>
                        <li ref={(ref) => menu.current.push(ref)}><a href="/about" className={styles.nav_link}>About</a></li>
                        <li ref={(ref) => menu.current.push(ref)}><a href="/contact" className={styles.nav_link}>Contact</a></li>
                    </ul>
                    <div className='d-flex align-items-center'>
                        <button className={styles.menu_toggle} onClick={menuOpen}><i className="fa-light fa-bars"></i></button>
                        <div className={styles.call}>
                            <i class="fa-light fa-phone"></i>
                            <div className='d-flex justify-content-start align-items-start flex-column'>
                                <span>Need Help ?</span>
                                <a href="">855 100 4444</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

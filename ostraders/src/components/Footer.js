import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Footer = () => {


    useGSAP(() => {

        // gsap.registerPlugin(ScrollTrigger)


        // gsap.set('section.footer-container', { yPercent: -50 })

        // const uncover = gsap.timeline({ paused: true })

        // uncover
        //     .to('section.footer-container', { yPercent: 0, ease: 'none' })
        //     ;

        // ScrollTrigger.create({
        //     trigger: 'section.conclusion',
        //     start: 'bottom bottom',
        //     end: '+=75%',
        //     animation: uncover,
        //     scrub: true,
        //     markers: true,
        //     scroller: ".smoothContainer",
        // })
    })


    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.footer_container}>
                    <div className="">
                        <div className={styles.brands}>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        </div>

                        <div className="d-flex justify-content-center align-items-center my-3">
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>

                        <div className="d-flex justify-content-center align-items-center my-3">
                            OSTRADERS Copyright © 2024 Webify.ai - All rights reserved
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer

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
                    <div className="container px-lg-0 px-5">
                        <div className="row">
                            <div className="col-lg-5 col-md-8 col-12">
                                <h2>Ready To buy <br />Your New Car</h2>
                                <div className="mt-3">
                                    <Link className='button'>Buy Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 m-lg-0 my-5">
                                <ul>
                                    <li><Link>Home</Link></li>
                                    <li><Link>Collections</Link></li>
                                    <li><Link>About</Link></li>
                                    <li><Link>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6 m-lg-0 my-5">
                                <ul>
                                    <li><Link>Home</Link></li>
                                    <li><Link>Collections</Link></li>
                                    <li><Link>About</Link></li>
                                    <li><Link>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className={styles.social}>
                                    <h3>Get in touch</h3>
                                    <Link>ostraders@yahoo.com</Link>
                                    <Link>(+91) 98989 98989</Link>

                                    <div className={styles.brands}>
                                        <Link><i className='fa-brands fa-instagram'></i> ostradersOffical</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.foot}>
                        OSTRADERS Copyright © 2024 Webify.ai - All rights reserved
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer

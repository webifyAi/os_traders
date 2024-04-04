import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';


const Category = () => {




    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".categories",
                start: "top top",
                end: "+=100%",
                scroller: ".smoothContainer",
                pin: true,
                scrub: true
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".categories",
                start: "top top",
                bottom: "+=100%",
                scroller: ".smoothContainer",
                scrub: true,
            }
        })

        t2.to(".cat-1",
            {
                y: -100,
                opacity: 0,
                duration: 2,
                delay: 1
            },
        )
        t2.from(".cat-2",
            {
                y: 100,
                opacity: 0,
                duration: 1,
            },
        )
        t2.to(".cat-2",
            {
                y: -100,
                opacity: 0,
                duration: 2,
                delay: 1
            },
        )
        t2.from(".cat-3",
            {
                y: 100,
                opacity: 0,
                duration: 1,
            },
        )
        t2.to(".cat-3",
            {
                y: -100,
                opacity: 0,
                duration: 2,
                delay: 1
            },
        )
        t2.from(".cat-4",
            {
                y: 100,
                opacity: 0,
                duration: 1,
            },
        )
        // })

    });


    return (
        <>
            <div className="contianer-fluid categories padd-x my-5">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cat-head">
                            <h2>Our <br /> categories</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod saepe modi aut maxime placeat voluptatibus eligendi sit exercitationem explicabo.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 cat-list">
                        <div className="cat-item cat-1">
                            <div className="cat-image">
                                <img src="./images/cat-1.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Cars</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Nisi nesciunt vel laboriosam corrupti assumenda quas laudantium numquam magnam doloribus, eos pariatur quis</p>
                                <div className="mt-4">
                                    <Link className="btn">View All</Link>
                                </div>
                            </div>
                        </div>

                        <div className="cat-item cat-2">
                            <div className="cat-image">
                                <img src="./images/cat-2.webp" className='' alt="" />
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Trucks</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Nisi nesciunt vel laboriosam corrupti assumenda quas laudantium numquam magnam doloribus, eos pariatur quis</p>
                                <div className="mt-4">
                                    <Link className="btn">View All</Link>
                                </div>
                            </div>
                        </div>

                        <div className="cat-item cat-3">
                            <div className="cat-image">
                                <img src="./images/cat-3.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Spare Parts</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Nisi nesciunt vel laboriosam corrupti assumenda quas laudantium numquam magnam doloribus, eos pariatur quis</p>
                                <div className="mt-4">
                                    <Link className="btn">View All</Link>
                                </div>
                            </div>
                        </div>

                        <div className="cat-item cat-4">
                            <div className="cat-image">
                                <img src="./images/cat-4.jpg" className='' alt="" />
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Oils</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo! Nisi nesciunt vel laboriosam corrupti assumenda quas laudantium numquam magnam doloribus, eos pariatur quis</p>
                                <div className="mt-4">
                                    <Link className="btn">View All</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Category

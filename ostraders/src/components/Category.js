import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';


const Category = () => {




    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)


        let mm = gsap.matchMedia();


        // mm.add("(min-width:999px)", () => {

        // })



        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".categories",
                start: "top top",
                bottom: "+=100%",
                scroller: ".smoothContainer",
                pin: true,
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
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="cat-head">
                            <h2>Our <br /> categories</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod saepe modi aut maxime placeat voluptatibus eligendi sit exercitationem explicabo.</p>
                        </div>
                    </div>
                    <div className="col-lg-5  pt-lg-0 pt-lg-3 pt-md-3">
                        <div className="cat-list">
                            <div className="cat-item cat-1">
                                <div className="cat-image">
                                    <img src="./images/cars.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Luxury Cars</h4>
                                    </div>
                                    <div className="curvbtn">
                                        <Link><i className=' fa-regular fa-arrow-up-right'></i></Link>
                                        <div class="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div class="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="cat-item cat-2">
                                <div className="cat-image">
                                    <img src="./images/trucks.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Trucks</h4>
                                    </div>
                                    <div className="curvbtn">
                                        <Link><i className=' fa-regular fa-arrow-up-right'></i></Link>
                                        <div class="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div class="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-item cat-3">
                                <div className="cat-image">
                                    <img src="./images/spare parts.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Spare Parts</h4>
                                    </div>
                                    <div className="curvbtn">
                                        <Link><i className=' fa-regular fa-arrow-up-right'></i></Link>
                                        <div class="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div class="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-item cat-4">
                                <div className="cat-image">
                                    <img src="./images/car oils.jpg" className='img-fluid' alt="" />
                                    <div className="title">
                                        <h4>Car Oils</h4>
                                    </div>
                                    <div className="curvbtn">
                                        <Link><i className=' fa-regular fa-arrow-up-right'></i></Link>
                                        <div class="br-left-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                        <div class="br-right-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#000"></path>
                                            </svg>
                                        </div>
                                    </div>
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

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import { Link } from 'react-router-dom';
// import logos from '../assets/logos.json';


const Herosection = () => {


    return (
        <>
            <div className="herosection">
                <div className="video-section">
                    <video muted="none" loop="none" playsInline="none" autoplay="none" preload="none"
                        data-stop="true">
                        <source src="./images/video.webm" type="video/webm" />
                    </video>
                    <div className="hero-content">
                        <span>*Premium</span>
                        <h1>Second Hand Car</h1>
                        <p>Bugatti Mistral W16 <span>$80,000</span>/-</p>
                        <div className="mt-3 d-flex justify-content-center align-items-center flex-wrap">
                            <a href="/detail" className='button me-3 transform mb-2'>View Details <i class="fa-light fa-arrow-up-right ms-1"></i></a>
                            <a href="" className='button btn1 transform  mb-2'>Inquiry Now <i class="fa-light fa-arrow-up-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Herosection

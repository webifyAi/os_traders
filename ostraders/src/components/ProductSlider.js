import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} nextBtn`} onClick={onClick}>
            <i className="fa-regular fa-angle-right"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} prevBtn`} onClick={onClick}>
            <i className="fa-regular fa-angle-left"></i>
        </div>
    );
}

const ProductSlider = () => {
    const videoRefs = useRef([]);
    const mainSliderRef = useRef();
    const thumbnailSliderRef = useRef();


    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);


    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".products",
    //             start: "top 80%",
    //             end: "top 20%",
    //             scroller: ".smoothContainer",
    //             markers: true,
    //             scrub: true,
    //             once: true, // Only play the animation once
    //             onEnter: () => {
    //                 mainSliderRef.current.slickGoTo(0)
    //             }
    //         }
    //     });

    // })


    const settingsMain = {
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (currentSlide, nextSlide) => {
            videoRefs.current.forEach((videoRef) => {
                videoRef.play();
            });

            thumbnailSliderRef.current.slickGoTo(nextSlide);
            // Play all videos
        },

        afterChange: (currentSlide) => {
            videoRefs.current.forEach((videoRef) => {
                videoRef.play();
            });
        }
    };

    const settingsThumbnail = {
        className: "center",
        centerMode: true,
        centerPadding: "30px",
        speed: 3000,
        focusOnSelect: true,
        slidesToShow: 1,
        arrows: false,
        beforeChange: (currentSlide, nextSlide) => {
            mainSliderRef.current.slickGoTo(nextSlide);
        },
    };

    return (
        <div className="products">
            <div className="heading">
                <span>Our Products</span>
                <h2>An extraordinary model range</h2>
            </div>
            <div className="slide-container">
                <Slider {...settingsThumbnail} ref={thumbnailSliderRef}>
                    <div className="text-center">
                        <h3>MC20</h3>
                    </div>
                    <div className="text-center">
                        <h3>MC20</h3>
                    </div>
                    <div className="text-center">
                        <h3>MC20</h3>
                    </div>
                    <div className="text-center">
                        <h3>MC20</h3>
                    </div>
                    <div className="text-center">
                        <h3>MC20</h3>
                    </div>
                </Slider>
            </div>
            <div className="slider-container">
                <Slider {...settingsMain} ref={mainSliderRef}>
                    <div className="slider-content">
                        <h3>MC20</h3>
                        <video ref={(ref) => videoRefs.current.push(ref)}>
                            <source src="./images/product1.webm" />
                        </video>
                    </div>
                    <div className="slider-content">
                        <h3>MC20</h3>
                        <video ref={(ref) => videoRefs.current.push(ref)}>
                            <source src="./images/product1.webm" />
                        </video>
                    </div>
                    <div className="slider-content">
                        <h3>MC20</h3>
                        <video ref={(ref) => videoRefs.current.push(ref)}>
                            <source src="./images/product1.webm" />
                        </video>
                    </div>
                    <div className="slider-content">
                        <h3>MC20</h3>
                        <video ref={(ref) => videoRefs.current.push(ref)}>
                            <source src="./images/product1.webm" />
                        </video>
                    </div>
                    <div className="slider-content">
                        <h3>MC20</h3>
                        <video ref={(ref) => videoRefs.current.push(ref)}>
                            <source src="./images/product1.webm" />
                        </video>
                    </div>
                </Slider>
            </div>
            <div className="mt-2 text-center">
                <Link className="button">Discover MC20</Link>
            </div>
        </div>
    );
};

export default ProductSlider;

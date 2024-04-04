import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settingsMain = {
        dots: true,
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
        </div>
    );
};

export default ProductSlider;

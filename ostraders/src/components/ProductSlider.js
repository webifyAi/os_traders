import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} nextBtn`}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prevBtn`}
            onClick={onClick}
        />
    );
}



const ProductSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <>
            <div className="products">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="slider-content">
                            <video playsInline="true">
                                <source src="./images/product1.webm" />
                            </video>
                        </div>
                        <div className="slider-content">
                            <video>
                                <source src="./images/product1.webm" />
                            </video>
                        </div>
                        <div className="slider-content">
                            <video>
                                <source src="./images/product1.webm" />
                            </video>
                        </div>
                        <div className="slider-content">
                            <video>
                                <source src="./images/product1.webm" />
                            </video>
                        </div>
                        <div className="slider-content">
                            <video>
                                <source src="./images/product1.webm" />
                            </video>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ProductSlider

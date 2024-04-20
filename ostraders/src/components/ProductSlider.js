import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from "./ProductItem";

const ProductSlider = () => {
    let prependNumber = 1;

    const [swiperRef, setSwiperRef] = useState(null);

    const prepend = () => {
        setSwiperRef(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };


    return (
        <>
            <div className="header mt-5">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <span>select your car</span>
                    <h1>Our Luxury <span>Car Collections</span></h1>
                </div>
            </div>
            <div className="container-fluid p-0 my-5 position-relative productSlider">
                <Swiper
                    onSwiper={(swiper) => { // Add onSwiper prop to call prepend function
                        prepend(swiper);
                    }}
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={false}
                    loop={true}
                    navigation={{ // Add navigation prop with custom navigation buttons
                        nextEl: '.custom-next', // Selector for custom next button
                        prevEl: '.custom-prev', // Selector for custom previous button
                    }}
                    modules={[Navigation]}
                    breakpoints={{ // Use breakpoints object in the correct format
                        768: {
                           
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                            centeredSlides: true,
                        },
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                </Swiper>
                <div className="customBtn custom-prev"><i className="fa-light fa-angle-left"></i></div>
                <div className="customBtn custom-next"><i className="fa-light fa-angle-right"></i></div>
            </div>
        </>
    );
};

export default ProductSlider;

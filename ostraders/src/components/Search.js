import React, { useEffect, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import logos from '../assets/logos.json'



const Search = () => {

    useGSAP(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.to(".search", {
        //     backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".search", // Use the container as the trigger
        //         start: "top center", // Start animation when the top of the container reaches the top of the viewport
        //         end: "bottom bottom", // End animation when the bottom of the container reaches the bottom of the viewport
        //         scrub: true, // Enable scrubbing for smoother animation
        //     }
        // });
    })

    const [dropDown, setDropDown] = useState(false);
    const [filter, setFilter] = useState("Brands");
    const [filterData, setFilterData] = useState({
        Brands: "",
        PriceRange: "",
        BodyType: "",
        Fuel: "",
        Year: "",
    });


    const DropDown = () => {
        setDropDown(!dropDown)
    };

    const Filter = (name) => {
        setFilter(name)
        if (dropDown == true) {
            setDropDown(dropDown)
        } else if (filter === name) {
            DropDown();
        } else {
            DropDown();
        }

    };

    const handleFilter = (input) => {
        setFilterData({
            Brands: input,
        })
    }

    const ClearFilter = () => {
        setFilterData({
            Brands: "",
            Price: "",
            Fuel: "",
            Year: "",
        })
    }


    return (
        <>
            <div className="parallax" style={{backgroundImage: "url('./images/background.jpeg')"}}>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
                    <span>Buy Now</span>
                    <h2>Search Your Dream Car</h2>
                    <form className="search-bar">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={DropDown}>
                                    <p>Filters</p>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => { Filter("Brands") }}>
                                    <p>{filterData.Brands ? filterData.Brands : 'Brands'}</p>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => { Filter("Price Range") }}>
                                    <p>Price Range</p>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => { Filter("Body Type") }}>
                                    <p>Body Type</p>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 col-12 px-0 mb-lg-0 mb-md-3 mb-sm-2 mb-1">
                                <div className="search-field" onClick={() => { Filter("Year") }}>
                                    <p>Year</p>
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <button className='button'>Search</button>
                            </div>
                        </div>
                        <div className={`dropdown ${dropDown ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-lg-2  col-md-3 col-12 pe-lg-0 pe-md-0 left">
                                    <ul>
                                        <li className={filter === 'Brands' ? 'active' : ''} onClick={() => Filter("Brands")}>Brand</li>
                                        <li className={filter === 'Price Range' ? 'active' : ''} onClick={() => Filter("Price Range")}>Price Range</li>
                                        <li className={filter === 'Body Type' ? 'active' : ''} onClick={() => Filter("Body Type")}>Body Type</li>
                                        <li className={filter === 'Fuel' ? 'active' : ''} onClick={() => Filter("Fuel")}>Fuel</li>
                                        <li className={filter === 'Year' ? 'active' : ''} onClick={() => Filter("Year")}>Year</li>
                                    </ul>
                                </div>
                                <div className="col-lg-10 col-md-9 col-12 px-5 py-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h3>All Brands</h3>
                                        <h3 style={{ cursor: "pointer" }} onClick={() => ClearFilter()}>Clear All</h3>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center flex-wrap">
                                        {logos.map((item, index) => {
                                            return <div key={index} className='item-img' onClick={() => handleFilter(item.name)}>
                                                <img src={item.url} alt={item.name} className='img-fluid' />
                                            </div>
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search

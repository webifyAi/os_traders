import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/testimonial.css";
import { slideLeft, slideRight } from "./animation";
import { testimonials } from "../assets/testimonial";

// icons
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";


const Testimonial = () => {
    let imageList = useRef(null);
    let tesimonialsList = useRef(null);
    const [state, setState] = useState({ fist: true, sec: false, third: false });
    const [pointer, setPointer] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        gsap.to(tesimonialsList.children[0], { duration: 0, opacity: 1 });
    }, []);

    return (
        <div className="testimonils-section container-fluid padd-x">
            <div className="testimonial-container container">

                <div className="inner">
                    <div className="t-image">
                        <ul ref={(el) => (imageList = el)}>
                            {testimonials.map((testimonial) => {
                                return (
                                    <li className="imageItem">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="t-content">
                        <h2>Customer Feedback</h2>
                        <i class="fa-solid fa-quote-left quotes"></i>
                        <ul ref={(el) => (tesimonialsList = el)}>
                            {testimonials.map((testimonial) => {
                                return (
                                    <li>
                                        <div className="content-inner">
                                            <q className="quote">{testimonial.quote}</q>
                                            <h3 className="name">{testimonial.name}</h3>
                                            <h4 className="title">{testimonial.title}</h4>
                                        </div>
                                    </li>
                                );
                            })}

                            <div className="arrow left">
                                <button
                                    disabled={disable}
                                    onClick={() =>
                                        slideLeft(
                                            state,
                                            setState,
                                            pointer,
                                            setPointer,
                                            setDisable,
                                            imageList,
                                            tesimonialsList
                                        )
                                    }
                                    className="icon"
                                >
                                    <LeftArrow />
                                </button>

                                <button
                                    disabled={disable}
                                    onClick={() =>
                                        slideRight(
                                            state,
                                            setState,
                                            pointer,
                                            setPointer,
                                            setDisable,
                                            imageList,
                                            tesimonialsList
                                        )
                                    }
                                    className="icon"
                                >
                                    <RightArrow />
                                </button>
                            </div>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonial

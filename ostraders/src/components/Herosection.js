import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';



const Herosection = () => {


    const canvasRef = useRef(null);
    // const textRef = useRef(null);

    // useEffect(() => {
    //     const words = textRef.current.innerText.split(/\s+/);
    //     textRef.current.innerHTML = "";

    //     words.forEach(word => {
    //         const wordElement = document.createElement("span");
    //         wordElement.className = "word";
    //         wordElement.innerHTML = word + " ";
    //         textRef.current.appendChild(wordElement);
    //     });
    // }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)


        // const tl = gsap.timeline({});

        // tl.from("nav", {
        //     y: -100,
        //     duration: .6,
        //     opacity: 0,
        // })
        // tl.from(".herosection h1 div", {
        //     y: 50,
        //     duration: .8,
        //     opacity: 0,
        //     stagger: .3
        // })
        // tl.from(".herosection .social", {
        //     x: 50,
        //     duration: .8,
        //     opacity: 0,
        // })
        // tl.from(".scrollAnime img", {
        //     opacity: 0,
        //     duration: .5,
        // })


        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });

        function files(index) {
            var data = `
    ./images/OSFrames/ezgif-frame-001.png
    ./images/OSFrames/ezgif-frame-002.png
    ./images/OSFrames/ezgif-frame-003.png
    ./images/OSFrames/ezgif-frame-004.png
    ./images/OSFrames/ezgif-frame-005.png
    ./images/OSFrames/ezgif-frame-006.png
    ./images/OSFrames/ezgif-frame-007.png
    ./images/OSFrames/ezgif-frame-008.png
    ./images/OSFrames/ezgif-frame-009.png
    ./images/OSFrames/ezgif-frame-010.png
    ./images/OSFrames/ezgif-frame-011.png
    ./images/OSFrames/ezgif-frame-012.png
    ./images/OSFrames/ezgif-frame-013.png
    ./images/OSFrames/ezgif-frame-014.png
    ./images/OSFrames/ezgif-frame-015.png
    ./images/OSFrames/ezgif-frame-016.png
    ./images/OSFrames/ezgif-frame-017.png
    ./images/OSFrames/ezgif-frame-018.png
    ./images/OSFrames/ezgif-frame-019.png
    ./images/OSFrames/ezgif-frame-020.png
    ./images/OSFrames/ezgif-frame-021.png
    ./images/OSFrames/ezgif-frame-022.png
    ./images/OSFrames/ezgif-frame-023.png
    ./images/OSFrames/ezgif-frame-024.png
    ./images/OSFrames/ezgif-frame-025.png
    ./images/OSFrames/ezgif-frame-026.png
    ./images/OSFrames/ezgif-frame-027.png
    ./images/OSFrames/ezgif-frame-028.png
    ./images/OSFrames/ezgif-frame-029.png
    ./images/OSFrames/ezgif-frame-030.png
    ./images/OSFrames/ezgif-frame-031.png
    ./images/OSFrames/ezgif-frame-032.png
    ./images/OSFrames/ezgif-frame-033.png
    ./images/OSFrames/ezgif-frame-034.png
    ./images/OSFrames/ezgif-frame-035.png
    ./images/OSFrames/ezgif-frame-036.png
    ./images/OSFrames/ezgif-frame-037.png
    ./images/OSFrames/ezgif-frame-038.png
    ./images/OSFrames/ezgif-frame-039.png
    ./images/OSFrames/ezgif-frame-040.png
    ./images/OSFrames/ezgif-frame-041.png
    ./images/OSFrames/ezgif-frame-042.png
    ./images/OSFrames/ezgif-frame-043.png
    ./images/OSFrames/ezgif-frame-044.png
    ./images/OSFrames/ezgif-frame-045.png
    ./images/OSFrames/ezgif-frame-046.png
    ./images/OSFrames/ezgif-frame-047.png
    ./images/OSFrames/ezgif-frame-048.png
    ./images/OSFrames/ezgif-frame-049.png
    ./images/OSFrames/ezgif-frame-050.png
    ./images/OSFrames/ezgif-frame-051.png
    ./images/OSFrames/ezgif-frame-052.png
    ./images/OSFrames/ezgif-frame-053.png
    ./images/OSFrames/ezgif-frame-054.png
    ./images/OSFrames/ezgif-frame-055.png
    ./images/OSFrames/ezgif-frame-056.png
    ./images/OSFrames/ezgif-frame-057.png
    ./images/OSFrames/ezgif-frame-058.png
    ./images/OSFrames/ezgif-frame-059.png
    ./images/OSFrames/ezgif-frame-060.png
    ./images/OSFrames/ezgif-frame-061.png
    ./images/OSFrames/ezgif-frame-062.png
    ./images/OSFrames/ezgif-frame-063.png
    ./images/OSFrames/ezgif-frame-064.png
    ./images/OSFrames/ezgif-frame-065.png
    ./images/OSFrames/ezgif-frame-066.png
    ./images/OSFrames/ezgif-frame-067.png
    ./images/OSFrames/ezgif-frame-068.png
    ./images/OSFrames/ezgif-frame-069.png
    ./images/OSFrames/ezgif-frame-070.png
    ./images/OSFrames/ezgif-frame-071.png
    ./images/OSFrames/ezgif-frame-072.png
    ./images/OSFrames/ezgif-frame-073.png
    ./images/OSFrames/ezgif-frame-074.png
    ./images/OSFrames/ezgif-frame-075.png
    ./images/OSFrames/ezgif-frame-076.png
    ./images/OSFrames/ezgif-frame-077.png
    ./images/OSFrames/ezgif-frame-078.png
    ./images/OSFrames/ezgif-frame-079.png
    ./images/OSFrames/ezgif-frame-080.png
    ./images/OSFrames/ezgif-frame-081.png
    ./images/OSFrames/ezgif-frame-082.png
    ./images/OSFrames/ezgif-frame-083.png
    ./images/OSFrames/ezgif-frame-084.png
    ./images/OSFrames/ezgif-frame-085.png
    ./images/OSFrames/ezgif-frame-086.png
    ./images/OSFrames/ezgif-frame-087.png
    ./images/OSFrames/ezgif-frame-088.png
    ./images/OSFrames/ezgif-frame-089.png
    ./images/OSFrames/ezgif-frame-090.png
    ./images/OSFrames/ezgif-frame-091.png
    ./images/OSFrames/ezgif-frame-092.png
    ./images/OSFrames/ezgif-frame-093.png
    ./images/OSFrames/ezgif-frame-094.png
    ./images/OSFrames/ezgif-frame-095.png
    ./images/OSFrames/ezgif-frame-096.png
    ./images/OSFrames/ezgif-frame-097.png
    ./images/OSFrames/ezgif-frame-098.png
    ./images/OSFrames/ezgif-frame-099.png
    ./images/OSFrames/ezgif-frame-100.png
    ./images/OSFrames1/ezgif-frame-001.png
    ./images/OSFrames1/ezgif-frame-002.png
    ./images/OSFrames1/ezgif-frame-003.png
    ./images/OSFrames1/ezgif-frame-004.png
    ./images/OSFrames1/ezgif-frame-005.png
    ./images/OSFrames1/ezgif-frame-006.png
    ./images/OSFrames1/ezgif-frame-007.png
    ./images/OSFrames1/ezgif-frame-008.png
    ./images/OSFrames1/ezgif-frame-009.png
    ./images/OSFrames1/ezgif-frame-010.png
    ./images/OSFrames1/ezgif-frame-011.png
    ./images/OSFrames1/ezgif-frame-012.png
    ./images/OSFrames1/ezgif-frame-013.png
    ./images/OSFrames1/ezgif-frame-014.png
    ./images/OSFrames1/ezgif-frame-015.png
    ./images/OSFrames1/ezgif-frame-016.png
    ./images/OSFrames1/ezgif-frame-017.png
    ./images/OSFrames1/ezgif-frame-018.png
    ./images/OSFrames1/ezgif-frame-019.png
    ./images/OSFrames1/ezgif-frame-020.png
    ./images/OSFrames1/ezgif-frame-021.png
    ./images/OSFrames1/ezgif-frame-022.png
    ./images/OSFrames1/ezgif-frame-023.png
    ./images/OSFrames1/ezgif-frame-024.png
    ./images/OSFrames1/ezgif-frame-025.png
    ./images/OSFrames1/ezgif-frame-026.png
    ./images/OSFrames1/ezgif-frame-027.png
    ./images/OSFrames1/ezgif-frame-028.png
    ./images/OSFrames1/ezgif-frame-029.png
    ./images/OSFrames1/ezgif-frame-030.png
    ./images/OSFrames1/ezgif-frame-031.png
    ./images/OSFrames1/ezgif-frame-032.png
    ./images/OSFrames1/ezgif-frame-033.png
    ./images/OSFrames1/ezgif-frame-034.png
    ./images/OSFrames1/ezgif-frame-035.png
    ./images/OSFrames1/ezgif-frame-036.png
    ./images/OSFrames1/ezgif-frame-037.png
    ./images/OSFrames1/ezgif-frame-038.png
    ./images/OSFrames1/ezgif-frame-039.png
    ./images/OSFrames1/ezgif-frame-040.png
    ./images/OSFrames1/ezgif-frame-041.png
    ./images/OSFrames1/ezgif-frame-042.png
    ./images/OSFrames1/ezgif-frame-043.png
    ./images/OSFrames1/ezgif-frame-044.png
    ./images/OSFrames1/ezgif-frame-045.png
    ./images/OSFrames1/ezgif-frame-046.png
    ./images/OSFrames1/ezgif-frame-047.png
    ./images/OSFrames1/ezgif-frame-048.png
    ./images/OSFrames1/ezgif-frame-049.png
    ./images/OSFrames1/ezgif-frame-050.png
    ./images/OSFrames1/ezgif-frame-051.png
    ./images/OSFrames1/ezgif-frame-052.png
    ./images/OSFrames1/ezgif-frame-053.png
    ./images/OSFrames1/ezgif-frame-054.png
    ./images/OSFrames1/ezgif-frame-055.png
    ./images/OSFrames1/ezgif-frame-056.png
    ./images/OSFrames1/ezgif-frame-057.png
    ./images/OSFrames1/ezgif-frame-058.png
    ./images/OSFrames1/ezgif-frame-059.png
    ./images/OSFrames1/ezgif-frame-060.png
    ./images/OSFrames1/ezgif-frame-061.png
    ./images/OSFrames1/ezgif-frame-062.png
    ./images/OSFrames1/ezgif-frame-063.png
    ./images/OSFrames1/ezgif-frame-064.png
    ./images/OSFrames1/ezgif-frame-065.png
    ./images/OSFrames1/ezgif-frame-066.png
    ./images/OSFrames1/ezgif-frame-067.png
    ./images/OSFrames1/ezgif-frame-068.png
    ./images/OSFrames1/ezgif-frame-069.png
    ./images/OSFrames1/ezgif-frame-070.png
    ./images/OSFrames1/ezgif-frame-071.png
    ./images/OSFrames1/ezgif-frame-072.png
    ./images/OSFrames1/ezgif-frame-073.png
    ./images/OSFrames1/ezgif-frame-074.png
    ./images/OSFrames1/ezgif-frame-075.png
    ./images/OSFrames1/ezgif-frame-076.png
    ./images/OSFrames1/ezgif-frame-077.png
    ./images/OSFrames1/ezgif-frame-078.png
    ./images/OSFrames1/ezgif-frame-079.png
    ./images/OSFrames1/ezgif-frame-080.png
    ./images/OSFrames1/ezgif-frame-081.png
    ./images/OSFrames1/ezgif-frame-082.png
    ./images/OSFrames1/ezgif-frame-083.png
    ./images/OSFrames1/ezgif-frame-084.png
    ./images/OSFrames1/ezgif-frame-085.png
    ./images/OSFrames1/ezgif-frame-086.png
    ./images/OSFrames1/ezgif-frame-087.png
    ./images/OSFrames1/ezgif-frame-088.png
    ./images/OSFrames1/ezgif-frame-089.png
    ./images/OSFrames1/ezgif-frame-090.png
    ./images/OSFrames1/ezgif-frame-091.png
    ./images/OSFrames1/ezgif-frame-092.png
    ./images/OSFrames1/ezgif-frame-093.png
    ./images/OSFrames1/ezgif-frame-094.png
    ./images/OSFrames1/ezgif-frame-095.png
    ./images/OSFrames1/ezgif-frame-096.png
    ./images/OSFrames1/ezgif-frame-097.png
    ./images/OSFrames1/ezgif-frame-098.png
    ./images/OSFrames1/ezgif-frame-099.png
    ./images/OSFrames1/ezgif-frame-100.png
    `;
            return data.split("\n")[index];
        }

        const frameCount = 50;
        const frameCount1 = 200;

        const images = [];
        const imageSeq = {
            frame: 0
        };

        const imageSeq1 = {
            frame: 51
        };

        for (let i = 0; i < frameCount1; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            duration: 5,
            onUpdate: render
        })
        gsap.from(".word", {
            opacity: 0,
            y: 50,
            stagger: .8,
            delay: 1,
            duration: 1.5,
        })


        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".scrollAnime",
                scroller: ".smoothContainer",
                start: "top top",
                end: `+=200%`, // Adjust as needed
                pin: true,
                scrub: 1,
            },
        })
        t2.to(imageSeq1, {
            frame: frameCount1 - 1,
            snap: "frame",
            ease: "none",
            duration: 4,
            onUpdate: render1
        })
        t2.to(".scrollAnime img", {
            display: "none",
            duration: .2,
        }, '-=1')


        images[0].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context);
        }
        function render1() {
            scaleImage(images[imageSeq1.frame], context);
        }
        function scaleImage(img, ctx) {
            const canvas = document.querySelector("#Home>canvas");
            var canvasWidth = canvas.width;
            let canvasHeight;

            if (window.innerWidth <= 768 && window.innerWidth >= 499) {
                canvasHeight = canvas.height / 1;
            } else if (window.innerWidth <= 499) {
                canvasHeight = canvas.height / 1.2;
            } else {
                canvasHeight = canvas.height / .85;
            }

            var scalingFactorX = canvasWidth / img.width;
            var scalingFactorY = canvasHeight / img.height;

            // Determine the aspect ratio of the image
            var aspectRatio = img.width / img.height;

            // Adjust the scaling factor to make the image slightly larger
            var scalingFactor = Math.max(scalingFactorX, scalingFactorY);

            // Calculate the scaled dimensions
            var scaledWidth = img.width / scalingFactor;
            var scaledHeight = img.height / scalingFactor;

            // Adjust the dimensions if the scaled height exceeds the canvas height
            if (scaledHeight > canvasHeight) {
                scaledHeight = canvasHeight * scalingFactor;
                scaledWidth = canvasHeight * aspectRatio * scalingFactor;
            }

            // Calculate the center shift
            var centerShift_x = (canvasWidth - scaledWidth) / 2;
            var centerShift_y = (canvasHeight - scaledHeight) / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, centerShift_x, centerShift_y, scaledWidth, scaledHeight);

        }

        // gsap
        //     scrollTrigger:{
        //         scrub:.1,
        //         trigger:"#home",
        //         start:"bottom 100%",
        //         scroller: ".smoothContainer",
        //         markers: true,
        //         // markers:true,
        //     },
        //   })
        //   ScrollTrigger.create({
        //     trigger:"#home",
        //     pin:true,
        //     start:"bottom 100%",
        //   })


    });


    return (
        <>

            <div className="container-fluid scrollAnime p-0" id="Home">
                <img src="./images/OSFrames/ezgif-frame-015.png" alt="" />
                <canvas ref={canvasRef}></canvas>
                <h2>
                    <div className='animateTxt'><span className='word'>Rev</span> <span className='word'>up</span> <span className='word'> your</span> <span className='word'>automotive</span> </div>
                    <div><span className='word'>adventure</span></div>
                </h2>
            </div>
        </>
    )
}

export default Herosection

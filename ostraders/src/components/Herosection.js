import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';



const Herosection = () => {


    const canvasRef = useRef(null);

    useGSAP(() => {

        



        gsap.registerPlugin(ScrollTrigger)

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
    ./images/OSFrames/ezgif-frame-101.png
    ./images/OSFrames/ezgif-frame-102.png
    ./images/OSFrames/ezgif-frame-103.png
    ./images/OSFrames/ezgif-frame-104.png
    ./images/OSFrames/ezgif-frame-105.png
    ./images/OSFrames/ezgif-frame-106.png
    ./images/OSFrames/ezgif-frame-107.png
    ./images/OSFrames/ezgif-frame-108.png
    `;
            return data.split("\n")[index];
        }

        const frameCount = 108;

        const images = [];
        const imageSeq = {
            frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }

        gsap.timeline({
            scrollTrigger: {
                trigger: ".scrollAnime",
                scroller: ".smoothContainer",
                start: "top top",
                end: `+=1000%`, // Adjust as needed
                pin: true,
                scrub: 1,
            },
        })
            .to(imageSeq, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                duration: 200,
                onUpdate: render
            });

        images[0].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context);
        }

        function scaleImage(img, ctx) {
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }




    });


    return (
        <>
            <div className="container-fluid p-0 herosection">
                <h1 className='d-flex justify-content-center align-items-center flex-column'>
                    <div>Unleash Your Driving Passion</div>
                    <div>Explore Our Latest Models Today</div>
                </h1>
            </div>
            <div class="container-fluid scrollAnime p-0" id="Home">
                <img src="./images/OSFrames/ezgif-frame-001.png" alt="" />
                <canvas ref={canvasRef}></canvas>
            </div>
        </>
    )
}

export default Herosection

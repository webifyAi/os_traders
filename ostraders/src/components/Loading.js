import Lottie from 'react-lottie';
import * as animationData from '../assets/car Loading.json'
import { useEffect, useState } from "react";


const Loading = () => {

    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hide, setHide] = useState(false);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        // Set a timeout to stop the animation after 5 seconds
        const timeoutId = setTimeout(() => {
            setIsStopped(true);
        }, 2700);

        const timeoutContent = setTimeout(() => {
            setHide(!hide);
        }, 2000);

        // Clear the timeout when the component unmounts or when the animation stops
        return () => {
            clearTimeout(timeoutId, timeoutContent);
        };
    }, []); // Empty dependency array ensures that the effect runs only once



    return (
        <>
            <div className={`loading ${isStopped ? 'stop' : ''}`} >
                <div className={`overflow-hidden ${hide ? 'hide' : ''}`}>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                        isStopped={isStopped}
                        isPaused={isPaused}
                    />
                </div>
            </div>
        </>
    )
}

export default Loading

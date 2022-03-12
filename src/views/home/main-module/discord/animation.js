import anime       from "animejs";
import {useEffect} from "react";

export default function useAnimation(imgNodes, centerPos) {

    useEffect(() => {
        if (!imgNodes.length) return;
        // imgNodes[0].style.top = '1rem';
        // imgNodes[0].style.left = '4rem';
        // imgNodes[1].style.top = '2rem';
        // imgNodes[1].style.left = '3.6rem';
        for (let img of imgNodes) {
            // anime({
            //     targets  : img,
            //     keyframes: [
            //         {
            //             translateX: centerPos.x - img.style.left,
            //             translateY: centerPos.y - img.style.top
            //         },
            //         {scale: 0},
            //     ],
            //     easing   : 'linear',
            //     loop     : true,
            //     direction: 'normal',
            //     duration : 4500,
            // })
        }
    }, [imgNodes, centerPos]);
}
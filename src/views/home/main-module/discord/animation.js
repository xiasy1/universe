import anime       from "animejs";
import {useEffect} from "react";

export default function useAnimation(discordIconsNodes) {

    useEffect(() => {
        anime({
            targets  : discordIconsNodes,
            keyframes: [
                {
                    translateX: 0,

                },
                {translateX: '-100%'},
                {scale: 0},
            ],
            easing   : 'linear',
            loop     : true,
            direction: 'normal',
            duration : 4500,
        })
    }, [discordIconsNodes]);
}
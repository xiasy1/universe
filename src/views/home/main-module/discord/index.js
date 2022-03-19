import "./style/index.css";
import getAWSCDN                     from "../../../../assets/utils/getAWSCDN.js";
import {useEffect, useRef, useState} from "react";
import ellipseText                   from "./ellipseText";
import getUniqueKey                  from "../../../../assets/utils/getUniqueKey";

export default function Discord(props) {
    let discordIconsNodes = useRef(null);
    let background_icons = useRef(null);
    let [isActive, setActive] = useState(false);
    let [topTextX, setTopTextX] = useState(50);
    const links = {
        twitter: 'https://twitter.com/catddlenft'
    }
    useEffect(() => {
        !props.isLoading && setActive(true);
        background_icons.current.onload = function () {
            setActive(true);
        }
        if (background_icons.current.complete) {
            setActive(true);
        }
        setInterval(() => {
            setTopTextX(pre => {
                return pre <= -480 ? 0 : pre -= .2
            });
        }, 100)
    }, [props.isLoading]);
    return (
        <div id="discord" className="discord-module">
            <img className="discord-background01" src={getAWSCDN("discord-icons", 'background', 'png')} alt="" />
            <img className="discord-background02" src={getAWSCDN("discord-icons", 'background02', 'png')} alt="" />
            <img className="discord-cat" src={getAWSCDN("discord-icons", "cat", "png")} alt="" />
            <div className="mobile-background">
                <img className="background" src={getAWSCDN("discord-icons/mobile", "background", "png")} alt="" />
                <img className="background-black" src={getAWSCDN("discord-icons/mobile", "background-black", "png")} alt="" />
            </div>
            <section className="discord-text">
                <img src={getAWSCDN("discord-icons", "content", 'png')} alt="" />
                <a href={links.twitter}>
                    <img src={getAWSCDN("discord-icons", "twitter-circle", 'png')} alt="" />
                </a>
                <div className="mobile-content">
                    <img src={getAWSCDN("discord-icons/mobile", "content ", 'png')} alt="" />
                </div>
            </section>
            <div className="ellipse">
                <svg viewBox="0 0 200 50">
                    <path d="M 0,63.5 a 120,67 0 1,1 0,1 z" id="circle" />
                    <text x={topTextX} style={{'fill': '#fff'}}>
                        <textPath xlinkHref="#circle" fontSize={4} fontFamily={'DINCondensed'}>
                            {ellipseText.map(text => <a key={getUniqueKey(10)}>
                                {text}
                                <tspan>&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;</tspan>
                            </a>)}
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className={`discord-icons ${isActive ? 'active' : ''}`} ref={discordIconsNodes}>
                <img ref={background_icons} src={getAWSCDN("discord-icons", "background-icons", "png")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "png")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "png")} alt="" />
            </div>
        </div>
    )
}
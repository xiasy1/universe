import "./style/index.css";
import getAWSCDN                     from "../../../../assets/utils/getAWSCDN.js";
import {useEffect, useRef, useState} from "react";
import ellipseText                   from "./ellipseText";
import getUniqueKey                  from "../../../../assets/utils/getUniqueKey";

export default function Discord() {
    let discordIconsNodes = useRef(null);
    let background_icons = useRef(null);
    let [isActive, setActive] = useState(false);
    let [topTextX, setTopTextX] = useState(50);
    const links = {
        twitter: 'https://twitter.com/catddlenft?s=21'
    }
    useEffect(() => {
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
    }, []);
    return (
        <div id="discord" className="discord-module">
            <img className="discord-background01" src={getAWSCDN("discord-icons", 'background01', 'jpg')} alt="" />
            <img className="discord-background02" src={getAWSCDN("discord-icons", 'background02', 'png')} alt="" />
            <img className="discord-cat" src={getAWSCDN("discord-icons", "cat", "png")} alt="" />
            <section className="discord-text">
                {/*<img src={getAWSCDN("discord-icons", "title", 'jpg')} alt="" />*/}
                <img src={getAWSCDN("discord-icons", "content", 'png')} alt="" />
                <a href={links.twitter}>
                    <img src={getAWSCDN("discord-icons", "twitter", 'png')} alt="" />
                </a>
                <img src={getAWSCDN("discord-icons", "twitter-circle", 'png')} alt="" />
            </section>
            <div className="ellipse">
                <svg viewBox="0 0 200 50">
                    <path d="M 0,63.5 a 120,67 0 1,1 0,1 z" id="circle" />
                    <text x={topTextX} style={{'fill': '#fff'}}>
                        <textPath xlinkHref="#circle" fontSize={4} fontFamily={'AlNile AlNileChrome'}>
                            {ellipseText.map(text => <a key={getUniqueKey(10)}>
                                {text}
                                <tspan>&nbsp;I&nbsp;</tspan>
                            </a>)}
                        </textPath>
                    </text>
                    {/*<text x="347" style={{'fill': '#fff'}}>*/}
                    {/*    <textPath xlinkHref="#circle" fontSize={2.4} fontFamily={'AlNile'}>*/}
                    {/*        I'm 99.9% sure that my soulmate is a cat.&nbsp;I&nbsp;*/}
                    {/*        I love my cat more than anything!&nbsp;I&nbsp;*/}
                    {/*        My cat is not a pet, he’s family.&nbsp;I&nbsp;*/}
                    {/*        I don't care about anything, as long as my cat loves me*/}
                    {/*    </textPath>*/}
                    {/*</text>*/}
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
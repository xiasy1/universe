import "./style/index.css";
import getAWSCDN                     from "../../../../assets/utils/getAWSCDN.js";
import {useEffect, useRef, useState} from "react";
import ellipseText                   from "./ellipseText";
import getUniqueKey                  from "../../../../assets/utils/getUniqueKey";
import twitterIcon                   from "../../../../assets/icons/twitter.svg"

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
                <img src={getAWSCDN("discord-icons", "title", 'jpg')} alt="" />
                <img src={getAWSCDN("discord-icons", "content", 'jpg')} alt="" />
                {/*Me-WOW! Didn't expect the world of the Catddle-verse to be discovered by you! Unusual cats are hidden*/}
                {/*here. These lovely cats cuddle what they love and often hide in their litter boxes. <br />*/}
                {/*You will never know what kind of personality it has until you open.<br />*/}
                {/*Some of them come from corners of cities, some are born from myths, some with special secrets, and some*/}
                {/*can even mutate into monsters... Each of them is unique and has their own story. Would you like to adopt*/}
                {/*one? Come try your luck!*/}
                {/*<a href={links.twitter} target="_blank" rel="noopener noreferrer external">*/}
                {/*    <img className="twitter-link" src={twitterIcon} alt="" />*/}
                {/*</a>*/}
            </section>
            <div className="ellipse">
                <svg viewBox="0 0 200 50">
                    <path d="M 0,63.5 a 120,67 0 1,1 0,1 z" id="circle" />
                    <text x={topTextX} style={{'fill': '#fff'}}>
                        <textPath xlinkHref="#circle" fontSize={4} fontFamily={'AlNile'}>
                            {ellipseText.map(text => <a key={getUniqueKey(10)}>
                                {text}
                                <tspan>&nbsp;I&nbsp;</tspan>
                            </a>)}
                            {/*Cats save the world! Cats drive all the unhappy things away! &nbsp;I&nbsp;*/}
                            {/*Fuck the world! I only love my cat!&nbsp;I&nbsp;*/}
                            {/*Catddle embraces everything! Everything loves cats!&nbsp;I&nbsp;*/}
                            {/*Purring.. (the cat is sleeping)&nbsp;I&nbsp;*/}
                            {/*Loads of happiness from cats!&nbsp;I&nbsp;*/}
                            {/*I love my cat more than anything!&nbsp;I&nbsp;*/}
                            {/*My girlfriend is my cat!&nbsp;I&nbsp;*/}
                            {/*My cat is not a pet, he’s family.&nbsp;I&nbsp;*/}
                            {/*I don't care about anything, as long as my cat loves me&nbsp;I&nbsp;*/}
                            {/*I'm 99.9% sure that my soulmate is a cat.&nbsp;I&nbsp;*/}
                            {/*Cats save the world! Cats drive all the unhappy things away!&nbsp;I&nbsp;*/}
                            {/*Fuck the world! I only love my cat!&nbsp;I&nbsp;*/}
                            {/*Catddle embraces everything! Everything loves cats!&nbsp;I&nbsp;*/}
                            {/*Purring.. (the cat is sleeping)&nbsp;I&nbsp;*/}
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
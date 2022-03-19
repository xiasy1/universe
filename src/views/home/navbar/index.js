import "./index.css";
import getAWSCDN             from "../../../assets/utils/getAWSCDN";
// import getUniqueKey          from "../../../assets/utils/getUniqueKey";
// import {useEffect, useState} from "react";

export default function Navbar() {
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    };
    const boatImage = getAWSCDN('navbar','boat','png');
    const twitterImage = getAWSCDN('navbar','twitter','png');
    const connectImage = getAWSCDN('navbar','connect ','png');
    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <a href="/">CATTDLE VERSE</a>
                <div className="nav-right">
                    <a href="/">
                        <img src={boatImage} alt="" />
                    </a>
                    <a href="https://twitter.com/catddlenft" title="twitter">
                        <img src={twitterImage} alt="" />
                    </a>
                    <a href="/">
                        <img src={connectImage} alt="" />
                    </a>
                </div>
                {/*<span onClick={() => scrollToAnchor("discord")}>DISCORD</span>*/}
                {/*<a href="https://twitter.com/catddlenft?s=21">TWITTER</a>*/}
                {/*<span onClick={() => scrollToAnchor("opensea-module")}>OPENSEA</span>*/}
                {/*<span onClick={() => scrollToAnchor("looks-rare")}>LOOKSRARE</span>*/}
                {/*<span onClick={() => scrollToAnchor("medium-module")}>MEDIUM</span>*/}
            </div>
            <img className="logo active" src={getAWSCDN('navbar', `logo`, 'jpg')} alt="" />
        </div>
    )
}

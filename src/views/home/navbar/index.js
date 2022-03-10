import "./index.css";
import getAWSCDN           from "../../../assets/utils/getAWSCDN";
import {useEffect, useRef} from "react";

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
    let logo_CDNs = [];
    for (let i = 0; i < 10; i++) {
        logo_CDNs.push(getAWSCDN('logos', `logo${i + 1}`, 'webp'));
    }
    const logo = useRef(null);
    useEffect(() => {
        const logoElement = logo.current
        if (logo.current) {
            for (let i = 0; i < logo_CDNs.length; i++) {
                logoElement.dataset[`cdn${i + 1}`] = logo_CDNs[i];
            }
        }
        setInterval(() => {
            logoElement.src = logoElement.dataset[`cdn${Math.floor(Math.random() * 10 + 1)}`]
        }, 1000)
    })

    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <span onClick={() => scrollToAnchor("discord")}>DISCORD</span>
                <span onClick={() => scrollToAnchor("twitter-module")}>TWITTER</span>
                <span onClick={() => scrollToAnchor("opensea-module")}>OPENSEA</span>
                <span onClick={() => scrollToAnchor("looks-rare")}>LOOKSRARE</span>
                <span onClick={() => scrollToAnchor("medium-module")}>MEDIUM</span>
            </div>
            <img ref={logo} className="logo" src={logo_CDNs[0]} alt="" data-cdn={logo_CDNs[1]} />
        </div>
    )
}

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
    // let logo_CDNs = [];
    // for (let i = 0; i < 10; i++) {
    //     logo_CDNs.push(getAWSCDN('logos/jpg', `logo${i + 1}`, 'jpg'));
    // }
    // const [activeImageNum, setActiveImageNum] = useState(0);
    // useEffect(() => {
    //     let i = 0;
    //     setInterval(() => {
    //         if (i > 9) i = 0;
    //         setActiveImageNum(i);
    //         i++
    //     }, 300);
    // }, []);

    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <span onClick={() => scrollToAnchor("discord")}>DISCORD</span>
                <span onClick={() => scrollToAnchor("twitter-module")}>TWITTER</span>
                <span onClick={() => scrollToAnchor("opensea-module")}>OPENSEA</span>
                <span onClick={() => scrollToAnchor("looks-rare")}>LOOKSRARE</span>
                <span onClick={() => scrollToAnchor("medium-module")}>MEDIUM</span>
            </div>
            <img className="logo active" src={getAWSCDN('logos/jpg', `logo10`, 'jpg')} alt="" />
            {/*{*/}
            {/*    logo_CDNs.map((item, index) => {*/}
            {/*        return (*/}
            {/*            <img className={`logo ${activeImageNum === index ? 'active' : ''}`}*/}
            {/*                 key={getUniqueKey()} src={item} alt="" />*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}

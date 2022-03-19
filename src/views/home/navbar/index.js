import "./index.css";
import getAWSCDN  from "../../../assets/utils/getAWSCDN";
import {useState} from "react";
// import getUniqueKey          from "../../../assets/utils/getUniqueKey";
// import {useEffect, useState} from "react";

export default function Navbar() {
    // const scrollToAnchor = (anchorName) => {
    //     if (anchorName) {
    //         let anchorElement = document.getElementById(anchorName);
    //         if (anchorElement) {
    //             anchorElement.scrollIntoView({
    //                 behavior: "smooth"
    //             });
    //         }
    //     }
    // };
    const boatImage = getAWSCDN('navbar','boat','png');
    const twitterImage = getAWSCDN('navbar','twitter','png');
    const connectImage = getAWSCDN('navbar','connect ','png');
    const menuImage = getAWSCDN('navbar','menu','png');
    const [isMenuShow, showSideMenu] = useState(false)
    const openSideMenu = e => {
        e.preventDefault();
        showSideMenu(true);
    }
    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <section className="nav-left">
                    <a href="/">CATTDLE VERSE</a>
                </section>
                <section className="nav-right">
                    <a className="nav-boat" href="/">
                        <img src={boatImage} alt="" />
                    </a>
                    <a className="nav-twitter" title="twitter"
                       href="https://twitter.com/catddlenft">
                        <img src={twitterImage} alt="" />
                    </a>
                    <a className="nav-connect" href="/">
                        <img src={connectImage} alt="" />
                    </a>
                    <a className="nav-menu" onClick={openSideMenu}>
                        <img src={menuImage} alt="" />
                    </a>
                </section>
                {/*<section className={`nav-side-menu ${isMenuShow ? 'side-menu-active' :''}`}>*/}
                {/*    <h3 onClick={()=> showSideMenu(false)}>X</h3>*/}
                {/*    <h3>ROADMAP</h3>*/}
                {/*    <h3>F&Q</h3>*/}
                {/*</section>*/}
            </div>
            <img className="logo active" src={getAWSCDN('navbar', `logo`, 'jpg')} alt="" />
        </div>
    )
}

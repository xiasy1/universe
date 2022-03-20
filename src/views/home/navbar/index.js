import "./index.css";
import getAWSCDN  from "../../../assets/utils/getAWSCDN";
import {useEffect, useState} from "react";
import getUniqueKey          from "../../../assets/utils/getUniqueKey";

export default function Navbar() {
    const boatImage = getAWSCDN('navbar','boat','png');
    const twitterImage = getAWSCDN('navbar','twitter','png');
    const connectImage = getAWSCDN('navbar','connect ','png');
    const menuImage = getAWSCDN('navbar','menu','png');
    const [isMenuShow, showSideMenu] = useState(false);
    const clientWidth = document.documentElement.clientWidth;
    const openSideMenu = e => {
        e.preventDefault();
        showSideMenu(true);
    }
    let logo_CDNs = [];
    for (let i = 0; i < 10; i++) {
        logo_CDNs.push(getAWSCDN('navbar/logos', `logo${i + 1}`, 'jpg'));
    }
    const [activeImageNum, setActiveImageNum] = useState(0);
    useEffect(() => {
        let i = 0;
        setInterval(() => {
            if (i > 9) i = 0;
            setActiveImageNum(i);
            i++
        }, 300);
    }, []);
    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <section className="nav-left">
                    <a href="/">CATDDLE VERSE</a>
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
            <div className="navbar-logos">
                {clientWidth <= 800 && <img className="logo active" src={getAWSCDN('navbar', `logo`, 'jpg')} alt="" />}
                {
                    clientWidth >=800 && logo_CDNs.map((item, index) => {
                        return (
                            <img className={`logo ${activeImageNum === index ? 'active' : ''}`}
                                 key={getUniqueKey()} src={item} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

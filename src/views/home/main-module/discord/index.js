import "./style/index.css";
import getAWSCDN    from "../../../../assets/utils/getAWSCDN.js";
import {useRef}     from "react";

export default function Discord() {
    let discordIconsNodes = useRef(null);
    return (
        <div id="discord" className="discord-module">
            <img className="discord-background01" src={getAWSCDN("discord-icons", 'background01', 'webp')} alt="" />
            <img className="discord-background02" src={getAWSCDN("discord-icons", 'background02', 'webp')} alt="" />
            <img className="discord-cat" src={getAWSCDN("discord-icons", "cat", "webp")} alt="" />
            <section className="discord-text">
                Me-WOW! Didn't expect the world of the Catddle-verse to be discovered by you! Unusual cats are hidden
                here. These lovely cats cuddle what they love and often hide in their litter boxes. <br />
                You will never know what kind of personality it has until you open.<br />
                Some of them come from corners of cities, some are born from myths, some with special secrets, and some
                can even mutate into monsters... Each of them is unique and has their own story. Would you like to adopt
                one? Come try your luck!
            </section>
            <div className="ellipse">
                <svg viewBox="0 0 200 50">
                    <path d="M 0,63.5 a 120,67 0 1,1 0,1 z" id="circle" />
                    <text x="47" style={{'fill': '#fff','textTransform':'uppercase'}}>
                        <textPath xlinkHref="#circle" fontSize={2.2} fontFamily={'Tarfia'}>
                            Cats save the world! Cats drive all the unhappy things away! &nbsp;&nbsp;
                            Fuck the world! I only love my cat!&nbsp;&nbsp;
                            Catddle embraces everything! Everything loves cats!
                            Happiness is a cat!
                        </textPath>
                    </text>
                    <text x="347" style={{'fill': '#fff','textTransform':'uppercase'}}>
                        <textPath xlinkHref="#circle" fontSize={2.2} fontFamily={'Tarfia'}>
                            Cats save the world! Cats drive all the unhappy things away!&nbsp;&nbsp;
                            Fuck the world! I only love my cat!&nbsp;&nbsp;
                            Catddle embraces everything! Everything loves cats!
                            Happiness is a cat!
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="discord-icons" ref={discordIconsNodes}>
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
            </div>
        </div>
    )
}
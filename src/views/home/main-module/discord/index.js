import "./style/index.css";
import getAWSCDN    from "../../../../assets/utils/getAWSCDN.js";
import useAnimation from "./animation";
import imageNames   from "./imageNames";
import {
    useCallback,
    useEffect,
    useRef,
    useState
}                   from "react";

const icons = imageNames.map(item => getAWSCDN("discord-icons", item));

export default function Discord() {
    let [imgNodes, setImgNodes] = useState([]);
    let centerNodes = useRef(null);
    let [centerPos, setCenterPos] = useState({x: 0, y: 0});
    let nodes = []
    const measuredRef = useCallback(node => {
        nodes.push(node)
        if (node !== null) {
            setImgNodes(nodes);
        }
    }, []);

    useEffect(() => {
        setCenterPos({
            x: centerNodes.current.offsetLeft,
            y: centerNodes.current.offsetTop
        })
    }, []);
    useAnimation(imgNodes, centerPos);
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
            <div className="center-position" ref={centerNodes}> </div>
            <div className="discord-icons">
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
                <img src={getAWSCDN("discord-icons", "background-icons", "webp")} alt="" />
                {/*<div className="left-icons">*/}
                {/*    {*/}
                {/*        imageNames.map((item, i) => <img key={i} ref={measuredRef}*/}
                {/*                                         className={`img${i}`}*/}
                {/*                                         src={icons[i]} alt="" />)*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
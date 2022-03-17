import getAWSCDN                     from "../../assets/utils/getAWSCDN";
import "./index.css"
import {useEffect, useRef, useState} from "react";

export default function Launch(props) {
    const catImage = getAWSCDN('launch', 'launch_cat', 'png');
    const verseImage = getAWSCDN('launch', 'verse', 'png');
    const startImage = getAWSCDN('launch', 'star', 'png');
    const verse = useRef(null);
    const [launchStart, setLaunchStart] = useState(false);
    useEffect(() => {
        verse.current.complete && setLaunchStart(true);
        verse.current.onload = () => {
            setLaunchStart(true);
        }
    }, []);
    return (
        <div className={`launch-module`}>
            <img className='launch-cat' src={catImage} alt="" />
            <div className={`launch-verse ${launchStart ? 'animate' : ''}`}>
                <img ref={verse} src={verseImage} alt="" />
                <img className="star1" src={startImage} alt="" />
                <img className="star2" src={startImage} alt="" />
            </div>
        </div>
    )
}
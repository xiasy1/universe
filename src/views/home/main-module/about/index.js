import "./index.css";
import animated_green from "../../../../assets/images/animated_ green.png"

export default function About() {
    return (
        <div className="about-module-container">
            <div className="about-module-main-about">
                <div className="about-module-main-story">
                    <p className="about-module-header">SPESH'S STORY</p>
                    <p className="about-module--main-about-subtext--2PeMC">Spesh is looking for his best friend
                        throughout Coolman's Universe. To travel through this universe, Spesh uses a surfboard and a
                        compass. This compass is no ordinary compass, however. Not only does it point Spesh in the right
                        direction to find his mysterious friend, but it also tracks the path that Spesh's friend has
                        already taken...finding clues along the way. As Spesh surfs throughout space, he finds himself
                        exploring worlds that he's never experienced...and meeting creatures he would’ve never thought
                        possible.
                    </p>
                </div>
                <img className="about-module-spesh"
                     src={animated_green} alt="" />
            </div>
        </div>
    )
}

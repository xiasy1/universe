import "./index.css";
import roadmapPng from "../../../../assets/images/roadmap.png";
import unicorn    from "../../../../assets/images/unicornspesh.png";
import sweater    from "../../../../assets/images/sweaterspesh.png";

export default function Roadmap() {
    return (
        <div className="roadmap-module-container">
            <img className="roadmap-module-roadmap" src={roadmapPng} alt="" />
            <img className="roadmap-module-left" src={unicorn} alt="" />
            <img className="roadmap-module-right" src={sweater} alt="" />
        </div>
    )
}

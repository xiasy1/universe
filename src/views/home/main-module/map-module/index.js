import sky             from "../../../../assets/images/sky.png";
import donut           from "../../../../assets/images/donutgif.gif";
import dinoWorld1      from "../../../../assets/images/dinoworld1.gif";
import wallstreet1     from "../../../../assets/images/wallstreet1.gif";
import donutspesh      from "../../../../assets/images/donutspesh.png";
import dinospesh       from "../../../../assets/images/dinospesh.png";
import wallstreetspesh from "../../../../assets/images/wallstreetspesh.png";
import noworld         from "../../../../assets/images/noworld.png";
import "./index.css";

export default function MapModule() {
    return (
        <div className="map-module-container">
            <img className="map-module-map-style" src={sky} alt="" />

            <button className="map-module-world-button donut-button">DONUT WORLD</button>
            <img className="map-module-donut-world" src={donut} alt="" />

            <button className="map-module-world-button dino-button">DINO WORLD</button>
            <img className="map-module-dino-world" src={dinoWorld1} alt="" />

            <button className="map-module-world-button wall-street-button">WALLSTREET WASTELAND</button>
            <img className="map-module-wall-street" src={wallstreet1} alt="" />

            <div className="map-module-donut-spesh-group">
                <img src={donutspesh} alt="" />
            </div>
            <div className="map-module-dino-spesh-group">
                <img src={dinospesh} alt="" />
            </div>
            <div className="map-module-wall-street-spesh-group">
                <img src={wallstreetspesh} alt="" />
            </div>
            <div className="map-module-noworld-spesh-group">
                <img src={noworld} alt="" />
            </div>
        </div>
    )
}

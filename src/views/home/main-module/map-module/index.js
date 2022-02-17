import sky         from "../../../../assets/images/sky.png";
import donut       from "../../../../assets/images/donutgif.gif"
import dinoWorld1  from "../../../../assets/images/dinoworld1.gif"
import wallstreet1 from "../../../../assets/images/wallstreet1.gif"
import "./index.css";

export default function MapModule() {
    return (
        <div className="map-module-container">
            <img className="map-module-map-style" src={sky} alt="" />

            <img className="map-module-donut-world" src={donut} alt="" />
            <button className="map-module-world-button donut-button">DONUT WORLD</button>

            <img className="map-module-dino-world" src={dinoWorld1} alt="" />
            <button className="map-module-world-button dino-button">DINO WORLD</button>

            <img className="map-module-wall-street" src={wallstreet1} alt="" />
            <button className="map-module-world-button wall-street-button">WALLSTREET WASTELAND</button>
        </div>
    )
}

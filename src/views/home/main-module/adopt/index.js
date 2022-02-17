import rocket from "../../../../assets/images/rocket.png";
import island from "../../../../assets/images/islandspesh.png";
import "./index.css";

export default function Adopt() {
    return (
        <div className="adopt-module">
            <img src={rocket} className="adopt-module-left" alt="" />
            <img src={island} className="adopt-module-right" alt="" />
            <div className="adopt-module-innerContainer">
                <p className="adopt-module--main-text">WELCOME TO THE SPESHIVERSE</p>
                <p className="adopt-module--sub-text">10,000 Speshies surfing through the Universe</p>
                <button className="adopt-module--opensea-button">VIEW ON OPENSEA</button>
            </div>
        </div>
    )
}

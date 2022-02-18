import "./index.css";
import kiss from "../../../../assets/images/kiss.png";

export default function ColLabs() {
    return (
        <div>
            <div className="collabs-module-container">
                <div className="collabs-module-header">PARTNERSHIPS &amp; COLLABS</div>
                <p className="collabs-module--mainText">Have an idea? We’d love to hear it.</p>
                <button className="collabs-module--collab-button">REACH OUT TO US</button>
                <img src={kiss} className="collabs-module--right-spesh" alt="" />
            </div>
            <footer className="footer-module-footer">
                <hr />
                <div className="footer-module-socials">

                </div>
                <p>Terms and Conditions</p>
            </footer>
        </div>
    )
}

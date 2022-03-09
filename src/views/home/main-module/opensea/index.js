import "./index.css";
import titleIcon1   from "../../../../assets/images/opensea/title-icon1.PNG";
import titleIcon2   from "../../../../assets/images/opensea/title-icon2.PNG";
import contentIcon1 from "../../../../assets/images/opensea/content-icon1.PNG";
import contentIcon2 from "../../../../assets/images/opensea/content-icon2.PNG";
import contentIcon3 from "../../../../assets/images/opensea/content-icon3.PNG";
import contentIcon4 from "../../../../assets/images/opensea/content-icon4.PNG";

export default function Opensea() {
    return (
        <div id="opensea-module">
            <div className="text-container">
                <section className="title-container">
                    <img className="title-icon1" src={titleIcon1} alt="" />
                    <img className="title-icon2" src={titleIcon2} alt="" />
                </section>
                <section className="content-container">
                    <img className="content-icon1" src={contentIcon1} alt="" />
                    <img className="content-icon2" src={contentIcon2} alt="" />
                    <img className="content-icon3" src={contentIcon3} alt="" />
                    <img className="content-icon4" src={contentIcon4} alt="" />
                </section>
            </div>
        </div>
    )
}
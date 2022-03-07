import "./index.css";
import titleIcon1   from "../../../../assets/images/twitter/title-icon1.PNG";
import titleIcon2   from "../../../../assets/images/twitter/title-icon2.PNG";
import contentIcon1 from "../../../../assets/images/twitter/content-icon1.PNG";
import contentIcon2 from "../../../../assets/images/twitter/content-icon2.PNG";

export default function Twitter() {
    return (
        <div id="twitter-module">
            <div className="text-container">
                <section className="title-container">
                    <img className="title-icon1" src={titleIcon1} alt="" />
                    <img className="title-icon2" src={titleIcon2} alt="" />
                </section>
                <section className="content-container">
                    <img className="content-icon1" src={contentIcon1} alt="" />
                    <img className="content-icon2" src={contentIcon2} alt="" />
                </section>
            </div>
        </div>
    )
}
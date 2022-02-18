import "./index.css";
import {useState} from "react";
import faqText    from "./faqText";
import musicspesh from "../../../../assets/images/musicspesh.png";

export default function Faq() {
    const [text] = useState(faqText);
    return (
        <div className="faq-module-container">
            <h2>FAQ</h2>
            <img className="faq-module-right-spesh" src={musicspesh} alt="" />
            <div className="faq-module-accordion">
                <div className="faq-module-sub-container">
                    {
                        text.map((item, index) => (
                            <div className="faq-module-block" key={index}>
                                <label>{item.title}</label>
                                <div>
                                    {item.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

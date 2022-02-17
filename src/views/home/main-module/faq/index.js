import "./index.css"
import {useState} from "react";
import faqText    from "./faqText";

export default function Faq() {
    const [text] = useState(faqText);
    return (
        <div className="faq-module-container">
            <h2>FAQ</h2>
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

import "./index.css";
import laserspesh from "../../../../assets/images/laserspesh.png";
import coolman    from "../../../../assets/images/coolman.png";
import {useState} from "react";

export default function Team() {
    const [count] = useState([0,1,2,3,4,5,7,8,9,10,11,12,13,15])
    return (
        <div className="team-module-container">
            <img className="team-module-left-img" src={laserspesh} alt="" />
            <div className="team-module-header">
                <p>Team</p>
            </div>
            <div className="team-module-sub-container">
                {
                    count.map((item,i) => {
                        return (
                            <div className="team-module-teams" key={i+10}>
                                <img src={coolman} alt="" />
                                <div className="team-module-names">
                                    <div className="team-module--coolmanLink">Shinex</div>
                                    <div className="team-module--role">Creator</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

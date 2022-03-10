import "./style/index.css";
import discordImage from "../../../../assets/images/discord.jpg";
import getAWSCDN    from "../../../../assets/utils/getAWSCDN.js";

const imgArr = [
    "IMG_0889",
    "IMG_0890",
    "IMG_0891",
    "IMG_0892",
    "IMG_0893",
];
const icons = imgArr.map(item => getAWSCDN("discord-icons", item));

export default function Discord() {
    return (
        <div className="discord-module">
            <img id="discord" src={getAWSCDN("discord-icons", 'background','webp')} alt="" />
            <section className="discord-text">
                Me-WOW! Didn't expect the world of the Catddle-verse to be discovered by you! Unusual cats are hidden
                here. These lovely cats cuddle what they love and often hide in their litter boxes. You will never know
                what kind of personality it has until you open.
                Some of them come from corners of cities, some are born from myths, some with special secrets, and some
                can even mutate into monsters... Each of them is unique and has their own story. Would you like to adopt
                one? Come try your luck!
            </section>
            <div className="discord-icons">
                {/*<div className="left-icons">*/}
                    {
                        imgArr.map((item, i) => <img key={i} className={item} src={icons[i]} alt="" />)
                    }
                {/*</div>*/}
            </div>
        </div>
    )
}
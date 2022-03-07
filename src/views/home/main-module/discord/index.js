import "./index.css";
import discordImage from "../../../../assets/images/discord.jpg";

export default function Discord() {
    return (
        <div className="discord-module">
            <img id="discord" src={discordImage} alt="" />
            <section className="discord-text">
                Me-wow！没想到catddle verse的世界被你发现了！这里落据一群并不普通的猫猫哦～这里是元字宙的猫猫！他们有的来自太空，有的来自路边，有的变异成怪物，有的有着特殊的秘密． <br/>
                他们藏在猫窝里，抱着他们喜欢的东西，如果你不打开它，你就永远不知道它是什么脾气。想要领养一只嘛？来测一测你的手气吧！
            </section>
        </div>
    )
}
import "./index.css"

export default function Navbar() {
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }
    return (
        <div className="navbar-nav">
            <div className="navbar-nav-items">
                <span onClick={() => scrollToAnchor("discord")}>DISCORD</span>
                <span onClick={() => scrollToAnchor("twitter-module")}>TWITTER</span>
                <span onClick={() => scrollToAnchor("opensea-module")}>OPENSEA</span>
                <span onClick={() => scrollToAnchor("discord")}>LOOKSRARE</span>
                <span onClick={() => scrollToAnchor("discord")}>MEDIUM</span>
            </div>
        </div>
    )
}

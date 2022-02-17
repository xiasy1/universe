import "./index.css"

export default function Navbar() {
    return (
        <div className="navbar-nav">
            <div className="navbar-logo">
                <a href="#javascript">
                    <img src="https://d33wubrfki0l68.cloudfront.net/31d3cd7723a516e06a68a8cab6e0f5629545c656/ae1b4/static/brand-719b89c76c76f1f25dceb40f08c3039c.svg" alt="" />
                </a>
            </div>
            <div className="navbar-nav-items">
                <a href="#javascript">ROADMAP</a>
                <a href="#javascript">FAQ</a>
                <a href="#javascript">TEAM</a>
                <a href="#javascript">COOLMAN</a>
                <a href="#javascript" className="navbar-module--portal--_AraN">PORTAL</a>
            </div>
        </div>
    )
}

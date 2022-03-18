import Navbar     from "./navbar";
import MainModule from "./main-module";

export default function Home(props) {
    return (
        <div className={`home ${props.isLoading ? '' : 'home-active'}`}>
            <Navbar />
            <MainModule isLoading={props.isLoading}/>
        </div>
    );
}

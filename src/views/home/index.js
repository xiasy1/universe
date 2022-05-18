import Navbar     from "./navbar";
import MainModule from "./main-module";
import testVideo from "./test.mp4"

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <MainModule />
            <video width="300px" height="300px" src={testVideo}
                   playsInline={true}
                   webkit-playsinline={''}
                   x5-playsinline={''}
                   x-webkit-airplay={''}
                   autoPlay={true}
                   loop={true}
                   muted={true} ></video>
        </div>
    );
}

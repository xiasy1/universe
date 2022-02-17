import Adopt     from "./adopt";
import MapModule from "./map-module";
import About     from "./about";
import Roadmap   from "./roadmap";
import Faq       from "./faq";
import Team      from "./team";
import ColLabs   from "./collabs";

export default function MainModule() {
    return (
        <main>
            <Adopt />
            <MapModule />
            <About />
            <Roadmap />
            <Faq />
            <Team />
            <ColLabs />
        </main>
    )
}

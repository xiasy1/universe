import Home                  from "./views/home";
import Launch                from "./views/launch";
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [isLaunchShow, showLaunch] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        setTimeout(() => {
            showLaunch(false);
        }, 5000)
    }, []);
    return (
        <div className="app">
            {isLaunchShow && <Launch isLoading={loading} />}
            <Home isLoading={loading} />
        </div>
    );
}

export default App;

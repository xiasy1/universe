import Home                  from "./views/home";
import Launch                from "./views/launch";
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let imgNum = 0;
        const images = document.querySelectorAll("div.home img");
        images.forEach((img,i) => {
            img.onload = function() {
                imgNum++;
                if(imgNum === images.length){
                    setTimeout(()=>{
                        setLoading(false);
                    },3000);
                }
            };
            if(img.complete) {
                imgNum++;
                if(imgNum === images.length){
                    setTimeout(() => {
                        setLoading(false);
                    },3000);
                }
            }
        })
    }, [loading]);
    return (
        <div className="app">
            { loading && <Launch/> }
            <Home isLoading={loading} />
        </div>
    );
}

export default App;

import { useState, useEffect } from "react";

function LiveClock () {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=> {
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (
        <div>
            it's currently {currentTime.toLocaleTimeString()}
        </div>
    );
}

export default LiveClock;
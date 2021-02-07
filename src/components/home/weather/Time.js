import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div>{time.getHours().toString().padStart(2, '0') + 'h' + time.getMinutes().toString().padStart(2, '0')}</div>
    )
}

export default Time;
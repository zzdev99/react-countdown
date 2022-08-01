import { useState, useEffect } from 'react';

function Countdown(props) {
    const [counter, setCounter] = useState(0);
    const datetime = Date.parse(props.datetime);
    let diff = datetime - Date.parse(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
            diff = datetime - Date.parse(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    if (diff > 0) {
        return (
            <>
                <h1>{formatTime(diff)}</h1>
                <h3>until</h3>
                <h2>{props.datetime}</h2>
            </>
        );
    }
    return (
        <h1>Timer Expired</h1>
    );
}

let formatTime = (time) => {
    let days = parseInt(time / 86400000);
    let hrs = parseInt(time / 3600000) - days * 24;
    let mins = parseInt(time / 60000) - days * 24 * 60 - hrs * 60;
    let secs = time / 1000 - days * 24 * 60 * 60 - hrs * 60 * 60;

    return [days, "d", hrs, "hr", mins, "min", (secs - mins * 60), "s"].join(' ');
}

export default Countdown;
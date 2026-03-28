import React, { useState } from 'react';

const Button = () => {
    const [clicks, setClicks] = useState(0);

    const handleIncrement = () => { setClicks(clicks + 1); };
    const handleDecrement = () => {
        if (clicks > 0) {
            setClicks(clicks - 1);
        }
    };

    return (
        <div className='container'>
            <div className='button-box'>
                <p>Number of Clicks: {clicks}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Button;
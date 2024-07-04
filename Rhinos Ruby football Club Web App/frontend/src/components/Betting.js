import React, { useEffect, useState } from 'react';

const Betting = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('/api/betting')
            .then(response => response.json())
            .then(data => setOptions(data));
    }, []);

    return (
        <div>
            <h1>Betting Options</h1>
            {options.map(option => (
                <div key={option.match_id}>
                    <h2>Match {option.match_id}</h2>
                    {option.options.map((opt, index) => (
                        <p key={index}>{opt}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Betting;

import React, { useEffect, useState } from 'react';

const Predictions = () => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        fetch('/api/predictions')
            .then(response => response.json())
            .then(data => setPredictions(data));
    }, []);

    return (
        <div>
            <h1>Match Predictions</h1>
            {predictions.map(prediction => (
                <div key={prediction.match_id}>
                    <h2>Match {prediction.match_id}</h2>
                    <p>{prediction.prediction}</p>
                </div>
            ))}
        </div>
    );
};

export default Predictions;

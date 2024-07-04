import React, { useEffect, useState } from 'react';

const MatchAnalysis = () => {
    const [analysis, setAnalysis] = useState([]);

    useEffect(() => {
        fetch('/api/match-analysis')
            .then(response => response.json())
            .then(data => setAnalysis(data));
    }, []);

    return (
        <div>
            <h1>Match Analysis</h1>
            {analysis.map(item => (
                <div key={item.match_id}>
                    <h2>Match {item.match_id}</h2>
                    <p>{item.commentary}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchAnalysis;

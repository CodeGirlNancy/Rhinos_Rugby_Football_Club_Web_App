import React, { useEffect, useState } from 'react';

const GameResults = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('/api/results')
            .then(response => response.json())
            .then(data => setResults(data));
    }, []);

    return (
        <div>
            <h1>Game Results</h1>
            {results.map(result => (
                <div key={result.game_id}>
                    <h2>{result.team_a} vs {result.team_b}</h2>
                    <p>Score: {result.score}</p>
                </div>
            ))}
        </div>
    );
};

export default GameResults;

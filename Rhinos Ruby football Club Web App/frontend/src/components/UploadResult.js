import React, { useState } from 'react';

const UploadResult = () => {
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/upload-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ teamA, teamB, score })
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h1>Upload Game Result</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Team A"
                    value={teamA}
                    onChange={(e) => setTeamA(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Team B"
                    value={teamB}
                    onChange={(e) => setTeamB(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    required
                />
                <button type="submit">Upload Result</button>
            </form>
        </div>
    );
};

export default UploadResult;

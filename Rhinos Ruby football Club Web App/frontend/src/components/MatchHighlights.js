import React, { useEffect, useState } from 'react';

const MatchHighlights = () => {
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        fetch('/api/match-highlights')
            .then(response => response.json())
            .then(data => setHighlights(data));
    }, []);

    return (
        <div>
            <h1>Match Highlights</h1>
            {highlights.map(highlight => (
                <div key={highlight.id}>
                    <h2>{highlight.title}</h2>
                    <video src={highlight.video_url} controls></video>
                </div>
            ))}
        </div>
    );
};

export default MatchHighlights;

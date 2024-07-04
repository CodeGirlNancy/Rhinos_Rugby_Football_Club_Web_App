import React, { useEffect, useState } from 'react';

const HistoricalArchives = () => {
    const [archives, setArchives] = useState([]);

    useEffect(() => {
        fetch('/api/historical-archives')
            .then(response => response.json())
            .then(data => setArchives(data));
    }, []);

    return (
        <div>
            <h1>Historical Archives</h1>
            {archives.map(archive => (
                <div key={archive.id}>
                    <h2>{archive.title}</h2>
                    <p>{archive.content}</p>
                </div>
            ))}
        </div>
    );
};

export default HistoricalArchives;

import React, { useEffect, useState } from 'react';

const TrainingResources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('/api/training-resources')
            .then(response => response.json())
            .then(data => setResources(data));
    }, []);

    return (
        <div>
            <h1>Training Resources</h1>
            {resources.map(resource => (
                <div key={resource.id}>
                    <h2>{resource.title}</h2>
                    <video src={resource.video_url} controls></video>
                </div>
            ))}
        </div>
    );
};

export default TrainingResources;

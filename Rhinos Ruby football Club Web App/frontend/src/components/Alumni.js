import React, { useEffect, useState } from 'react';

const Alumni = () => {
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        fetch('/api/alumni')
            .then(response => response.json())
            .then(data => setAlumni(data));
    }, []);

    return (
        <div>
            <h1>Alumni Network</h1>
            {alumni.map(person => (
                <div key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.details}</p>
                </div>
            ))}
        </div>
    );
};

export default Alumni;

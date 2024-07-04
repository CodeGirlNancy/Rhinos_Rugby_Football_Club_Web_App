import React, { useEffect, useState } from 'react';

const CommunityPrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('/api/community-programs')
            .then(response => response.json())
            .then(data => setPrograms(data));
    }, []);

    return (
        <div>
            <h1>Community Programs</h1>
            {programs.map(program => (
                <div key={program.id}>
                    <h2>{program.title}</h2>
                    <p>{program.details}</p>
                </div>
            ))}
        </div>
    );
};

export default CommunityPrograms;

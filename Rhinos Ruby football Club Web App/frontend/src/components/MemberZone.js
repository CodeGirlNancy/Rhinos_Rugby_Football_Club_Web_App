import React, { useEffect, useState } from 'react';

const MemberZone = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('/api/member-zone')
            .then(response => response.json())
            .then(data => setContent(data));
    }, []);

    return (
        <div>
            <h1>Member Zone</h1>
            {content.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MemberZone;

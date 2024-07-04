import React, { useEffect, useState } from 'react';

const RecruitmentInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('/api/recruitment-info')
            .then(response => response.json())
            .then(data => setInfo(data));
    }, []);

    return (
        <div>
            <h1>Recruitment Information</h1>
            {info.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.details}</p>
                </div>
            ))}
        </div>
    );
};

export default RecruitmentInfo;

import React, { useEffect, useState } from 'react';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        fetch('/api/sponsors')
            .then(response => response.json())
            .then(data => setSponsors(data));
    }, []);

    return (
        <div>
            <h1>Sponsors and Partnership Opportunities</h1>
            {sponsors.map(sponsor => (
                <div key={sponsor.id}>
                    <h2>{sponsor.name}</h2>
                    <p>{sponsor.details}</p>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;

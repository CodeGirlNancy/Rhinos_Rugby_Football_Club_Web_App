import React, { useEffect, useState } from 'react';

const Map = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/api/map')
            .then(response => response.json())
            .then(data => setLocations(data));
    }, []);

    return (
        <div>
            <h1>Map and Locations</h1>
            {locations.map(location => (
                <div key={location.id}>
                    <h2>{location.name}</h2>
                    <p>Coordinates: {location.coordinates}</p>
                </div>
            ))}
        </div>
    );
};

export default Map;

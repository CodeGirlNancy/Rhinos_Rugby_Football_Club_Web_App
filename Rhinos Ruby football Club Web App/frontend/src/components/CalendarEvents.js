import React, { useEffect, useState } from 'react';

const CalendarEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/calendar-events')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div>
            <h1>Calendar Events</h1>
            {events.map(event => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <p>{event.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CalendarEvents;

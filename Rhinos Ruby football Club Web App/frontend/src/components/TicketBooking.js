import React, { useState } from 'react';

const TicketBooking = () => {
    const [formData, setFormData] = useState({ name: '', email: '', match_id: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/ticket-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Book Your Tickets</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="match_id"
                    placeholder="Match ID"
                    value={formData.match_id}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Book Ticket</button>
            </form>
        </div>
    );
};

export default TicketBooking;

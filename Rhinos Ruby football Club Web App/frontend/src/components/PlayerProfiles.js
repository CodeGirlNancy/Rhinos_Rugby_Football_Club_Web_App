import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PlayerProfiles.css';  // Import the CSS file

const PlayerProfiles = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  return (
    <Container>
      <h1 className="my-4 text-center">Player Profiles</h1>
      <Row>
        {players.map(player => (
          <Col md={4} key={player.id} className="mb-4">
            <Card className="player-card">
              <Card.Img variant="top" src={player.profile_image} />
              <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                  <strong>Position:</strong> {player.position}<br />
                  <strong>Matches:</strong> {player.matches}<br />
                  <strong>Tries:</strong> {player.tries}<br />
                  <strong>Tackles:</strong> {player.tackles}
                    <strong>Statistics:</strong> {player.stats}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerProfiles;

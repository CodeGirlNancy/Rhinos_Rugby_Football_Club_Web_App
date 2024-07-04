import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';  // Import the CSS file

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">Rugby Club</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/player-profiles">Player Profiles</Nav.Link>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/player-profiles">Player Profiles</Link></li>
                <li><Link to="/match-highlights">Match Highlights</Link></li>
                <li><Link to="/member-zone">Member Zone</Link></li>
                <li><Link to="/training-resources">Training Resources</Link></li>
                <li><Link to="/merchandise-store">Merchandise Store</Link></li>
                <li><Link to="/events">Event Calendar</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/community-programs">Community Programs</Link></li>
                <li><Link to="/historical-archives">Historical Archives</Link></li>
                <li><Link to="/recruitment">Recruitment</Link></li>
                <li><Link to="/alumni">Alumni</Link></li>
                <li><Link to="/betting">Betting</Link></li>
                <li><Link to="/predictions">Predictions</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link to="/upload-result">Upload Result</Link></li>
                <li><Link to="/game-results">Game Results</Link></li>
            </ul>
        </nav>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;

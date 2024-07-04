import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="home-background">
      <Container>
        <Jumbotron className="text-center home-jumbotron">
          <h1>Welcome to Our Inclusive Rugby Club</h1>
          <p>Catch all the latest updates and exclusive content here!</p>
          <Button variant="primary" href="/player-profiles">View Player Profiles</Button>
            <div className="live-stream">
                <h2>Live Match Streaming</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID" // Replace with actual live stream URL
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="social-media-feed">
                <h2>Follow Us on Social Media</h2>
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYourPage&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340"
                    height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div className="newsletter-subscription">
                <h2>Subscribe to Our Newsletter</h2>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="payment-methods">
                <h2>Payment Methods</h2>
                <p>Integrate with your preferred payment gateway here.</p>
                {/* Example buttons */}
                <button>Pay with Mobile Money</button>
                <button>Pay with PayPal</button>
                <button>Pay with Credit Card</button>
            </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Home;

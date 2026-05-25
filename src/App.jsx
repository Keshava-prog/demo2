import React, { useEffect } from 'react';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">AeroLux</div>
        <div className="nav-links">
          <a href="#">The Fleet</a>
          <a href="#">First Class</a>
          <a href="#">Destinations</a>
        </div>
        <div className="nav-actions">
          <button className="btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>Sign In</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <h1 className="animate-fade-in">Beyond First Class</h1>
          <p className="animate-fade-in delay-1">Experience the pinnacle of modern aviation. Uncompromising luxury, unparalleled speed.</p>
          <button className="btn-primary animate-fade-in delay-2">Explore the Cabin</button>
        </div>
      </section>

      <section className="booking-widget glass-panel animate-fade-in delay-2">
        <div className="input-group">
          <label>From</label>
          <input type="text" placeholder="JFK - New York" />
        </div>
        <div className="input-group">
          <label>To</label>
          <input type="text" placeholder="LAX - Los Angeles" />
        </div>
        <div className="input-group">
          <label>Date</label>
          <input type="text" placeholder="Oct 24, 2026" />
        </div>
        <div className="input-group">
          <label>Passengers</label>
          <select>
            <option>1 Adult</option>
            <option>2 Adults</option>
          </select>
        </div>
        <div className="input-group" style={{ justifyContent: 'flex-end' }}>
          <button className="btn-primary" style={{ width: '100%' }}>Book Now</button>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-text">
          <h2>Engineering Masterpiece.</h2>
          <p>Every curve, every material chosen with absolute precision. Inspired by the world's most exclusive hypercars, our cabins are crafted in carbon fiber, brushed aluminum, and hand-stitched leather. This isn't just flying; it's arriving.</p>
          <button className="btn-outline">Discover the Design</button>
        </div>
        <div className="feature-image">
          {/* We would put a secondary image here, leaving as a dark polished box for now */}
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a)' }}></div>
        </div>
      </section>
    </div>
  );
}

export default App;

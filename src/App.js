//import snapchathotdog from './snapchathotdog.JPG';
import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='LandingTitle'>
          <h1 className="Title">
            welcome
          </h1>
          <a className="App-links" href="https://www.linkedin.com/in/lucas-gaudet-0009b8239">
            linkedin
          </a>
          <a className="App-links" href="https://www.instagram.com/lucas.gaudet/">
            instagram
          </a>
          <a className="App-links" href="https://twitter.com/LucasGaudet00">
            twitter
          </a>
          <Link to="/Photos">
            <button className="App-links App-button">
              photos
            </button>
          </Link>
          <Link to="/About">
            <button className="App-links App-button">
              about
            </button>
          </Link>
        </div>

      </header>
    </div>
  );
}

export default App;

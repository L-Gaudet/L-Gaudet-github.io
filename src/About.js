import './About.css';
import React from 'react';
import {Link} from "react-router-dom";

function About() {
  return (
    <div className='About-background'>
      <header className='About-header'>
        <div className='AboutTitle'>
          <h1 className='Title'>about me</h1>
          <Link to="/">
            <button className="About-links">
              mainpage
            </button>
          </Link>
          <div className='Container'>
            <div className='Bio-background'>
              <p className='Bio'>
                hi, my name is Lucas Gaudet and I'm a computer science major living
                in southern california. i used to play hockey, but transitioned to 
                pursue my passion of science and technology. currently I've been interested
                in ai/ml engineering, software engineering, and web/app development. 
                <Link to="/Photos">
                  <button className="Inbio-links">
                    photography
                  </button>
                </Link>
                is a hobby of mine, i carry a camera with me every day for 
                whenever i see a cool shot. staying active is important to me, whether it
                be tennis, basketball, hiking or biking I'm always looking for a fun way
                to close the rings on my apple watch.
                other activities i enjoy are watching hockey, playing games with friends, 
                and spending time at cool cafes/coffee shops.
              </p>
            </div>
          </div> 
        </div>
      </header>
    </div>
  );
}


export default About;
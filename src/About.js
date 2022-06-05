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
                Hi, my name is Lucas Gaudet and I am a computer science major. 
                I used to be a hockey player, but I now enjoy photography as a 
                hobby. I am passionate about technology and its potential to 
                change the world. I believe that computer science is the key 
                to unlocking that potential and I am excited to be studying it. 
                I am also excited to see where my career takes me and to use 
                my skills to make a difference in the world.
              </p>
            </div>
          </div> 
          {/* <div className='Bio-background'>
              <p className='Bio'>
                Hi, my name is Lucas Gaudet and I am a computer science major. 
                I used to be a hockey player, but I now enjoy photography as a 
                hobby. I am passionate about technology and its potential to 
                change the world. I believe that computer science is the key 
                to unlocking that potential and I am excited to be studying it. 
                I am also excited to see where my career takes me and to use 
                my skills to make a difference in the world.
              </p>
            </div> */}
        </div>
      </header>
    </div>
  );
}


export default About;
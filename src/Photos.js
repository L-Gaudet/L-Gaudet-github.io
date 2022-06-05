import './Photos.css';
import React from 'react';
import {Link} from "react-router-dom";
import paramountSign from './webParamountSign.jpg';
import sunsetCliffs from './sunsetCliffs.JPG';
import rocks from './rocks.png';

function Photos() {
  return (
    <div className="Photos-background">
      <header className="Photos-header">
        <div className='Photos-title'>
          <h1 className="Page-title">
            photos
          </h1>
          <Link to="/">
            <button className="Photos-links">
              mainpage
            </button>
          </Link>      
          <div className='Photo-container'>
            <div className='Photo-layout'>
              <img className='Photo' src={sunsetCliffs}/>
              <img className='Photo' src={rocks}/>
              <img className='Photo' src={paramountSign}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Photos;
import React from 'react';
import './test.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-face card-front">
          <h2>Front Side</h2>
        </div>
        <div className="card-face card-back">
          <h2>Back Side</h2>
          <p>This is the back of the card!</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

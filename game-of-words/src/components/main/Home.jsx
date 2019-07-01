import React from 'react';
import Introduction from './Introduction';
import word_icon from '../../assets/img/word_icon.png';
import './style.css';

export function Home() {
  return (
    <section>
      <div>
        <img src={word_icon} alt="Word Game" className="word_icon" />
        <h3>Game</h3>
        <h1>Train Your Brain</h1>
        <Introduction />
      </div>
    </section>
  )
}

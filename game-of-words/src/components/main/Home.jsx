import React from 'react';
import Introduction from './Introduction';
import word_icon from '../../assets/img/word_icon.png';
import './style.css';

export function Home() {
    return (
        <section className="home-section">
            <div>
                <img src={word_icon} alt="Word Game" className="word_icon" />
                <h3 className="game-title">Game</h3>
                <Introduction />
            </div>
        </section>
    )
}

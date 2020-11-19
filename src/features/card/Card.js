import React, { useState } from 'react';
import './Card.css';

export function Card() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card" onClick={() => setFlipped(!flipped)}>
            <div className={`card-inner ${flipped && 'flipped'}`}>
                <div className="card-front" />
                <div className={`card-back ${flipped && 'flipped'}`}>
                    <img className="card-img" src="/logo192.png" />
                </div>
            </div>
        </div>
    );
}

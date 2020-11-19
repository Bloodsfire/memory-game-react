import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectCardById, pickCard } from "./cardsSlice";

import './Card.css';

export function Card({ cardId }) {
    const card = useSelector(state => selectCardById(state, cardId));
    const dispatch = useDispatch();

    return (
        <div className="card" onClick={() => dispatch(pickCard(cardId))}>
            <div className={`card-inner ${card.flipped && 'flipped'}`}>
                <div className="card-front" />
                <div className={`card-back ${card.flipped && 'flipped'}`}>
                    <img className="card-img" src={card.img} />
                </div>
            </div>
        </div>
    );
}

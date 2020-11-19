import React from 'react';
import { useSelector } from "react-redux";
import { selectCardsIds } from "../card/cardsSlice";

import './Field.css';
import { Card } from "../card/Card";

export function Field() {
    const cardsIds = useSelector(selectCardsIds);

    return (
        <div className="field">
            {cardsIds.map(cardId => <Card key={cardId} cardId={cardId}/>)}
        </div>
    );
}

import React from 'react';
import './Field.css';

import { Card } from "../card/Card";

export function Field() {

    const arr = [...Array(36)];

    return (
        <div className="field">
            {arr.map(() => <Card />)}
        </div>
    );
}

import React from 'react';

import './Header.css';
import { Timer } from "../timer/Timer";

export function Header() {

    return (
        <div className="header">
            <Timer />
        </div>
    );
}

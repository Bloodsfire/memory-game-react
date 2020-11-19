import React from 'react';

import './Modal.css';

export function Modal({ handleClose, callback, show, children }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                {handleClose && !callback && <button className="modal-button modal-button--close" onClick={handleClose}>✖</button>}
                {callback && !handleClose && <button className="modal-button modal-button--callback" onClick={callback}>Apply</button>}
            </section>
        </div>
    );
}

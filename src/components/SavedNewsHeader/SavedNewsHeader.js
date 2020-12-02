import React from 'react';
import './SavedNewsHeader.css';


function SavedNewsHeader() {
    return (
        <div className="SavedNewsHeader">
            <p className="savedNewsHeader__subtitle">Сохраненные статьи</p>
            <h1 className="savedNewsHeader__title">Грета, у вас 5 сохранённых статей</h1>
            <p className="savedNewsHeader__tags">По ключевым словам: <span className="savedNewsHeader__bold">Природа, Тайга</span> и <span className="savedNewsHeader__bold">2-м другим.</span></p>
        </div>
    )
}

export default SavedNewsHeader
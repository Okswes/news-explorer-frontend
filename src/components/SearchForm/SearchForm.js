import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <div className="SearchForm">
            <div className="searchform_container">
            <h1 className="searchform_title">Что творится в мире?</h1>
            <p className="searchform_subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className="searchform__form">
                <input className="searchform__input" placeholder='Введите тему новости'></input>
                <button className="searchform__button">Искать</button>
            </form>
            </div>
        </div>
    )
}

export default SearchForm
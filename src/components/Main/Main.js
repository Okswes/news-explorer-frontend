import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Main(props) {
    return (
        <div className="Main">
            <div className="header-background">
                <Header onOpenLoginPopup={props.onOpenLoginPopup} openMobileMenu={props.openMobileMenu} isOpen={props.isOpen} onClose={props.onClose} />
                <SearchForm />
            </div>
        </div>
    )
}

export default Main
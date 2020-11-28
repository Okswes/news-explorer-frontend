import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
    return (
        <div className="SavedNews">
            <Header openMobileMenu={props.openMobileMenu} isOpen={props.isOpen} onClose={props.onClose} theme="light"/>
            <SavedNewsHeader />
            <NewsCardList />
        </div>
    )
}

export default SavedNews
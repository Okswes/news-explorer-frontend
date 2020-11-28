import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
    return (
        <div className="SavedNews">
            <Header />
            <SavedNewsHeader />
            <NewsCardList />
        </div>
    )
}

export default SavedNews
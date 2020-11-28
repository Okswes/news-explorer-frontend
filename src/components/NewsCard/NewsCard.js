import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
    const [message, setMessage] = React.useState(false);
    const [marked, setMarked] = React.useState(false);
    function setCardMarked() {
        setMarked(!marked);
    }
    
    const messageStatus = message ? 'newscard__message_visible' : '';

    function showMessage(){
        setMessage(true);
    }
    function hideMessage(){
        setMessage(false);
    }

    return (
        <div className="NewsCard">
            {
                props.segment ?
                    <span className="newscard__message newscard__message-left">{props.segment}</span>
                    : ''
            }
            {
                props.state ==='search' ?
                <span className={`newscard__message newscard__message-right ${messageStatus}`}>Войдите, чтобы сохранять статьи</span>
                    : ''
            }          
            {
                props.state ==='saved' ?
                <span className={`newscard__message newscard__message-right ${messageStatus}`}>Убрать из сохранённых</span>
                    : ''
            } 
            
            <button className={`newscard__button ${marked && props.state !=='saved' ? 'newscard__button_pressed' : ''} ${props.state ==='saved' ? 'newscard__button-trash' : 'newscard__button-bookmark'}`} onClick={setCardMarked} onMouseOver={showMessage} 
                onMouseOut={hideMessage}></button>
            <img className="newscard__picture" src={props.img} alt="Обложка новости" />
            <div className="newscard__content">
                <div className="newscard__main">
                    <p className="newscard__date">{props.date}</p>
                    <h4 className="newscard__title">{props.title}</h4>
                    <p className="newscard__text">{props.text}</p>
                </div>
                <p className="newscard__source">{props.source}</p>
            </div>
        </div>
    )
}

export default NewsCard
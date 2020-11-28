import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container">
                <fieldset className="popup__fieldset">
                    <h3 className="popup__title">{props.title}</h3>
                    {props.children}
                    {
                        props.link !== 'succeed' ?
                            <button className="popup__button popup__button_disabled" type="submit" onClick={props.onSubmit}>{props.link === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
                            : ''
                    }
                </fieldset>
                <button className="popup__button-close" type="reset" onClick={props.onClose}></button>
                {
                    props.link === 'login' ?
                        <p className="popup__text">или <span className="popup__link" onClick={() => { props.onClose(); props.onOpenSignupPopup(); }}>Зарегистрироваться</span></p>
                        : ''
                }
                {
                    props.link === 'signup' ?
                        <p className="popup__text">или <span className="popup__link" onClick={() => { props.onClose(); props.onOpenLoginPopup(); }}>Войти</span></p>
                        : ''
                }
                {
                    props.link === 'succeed' ?
                        <span className="popup__link popup__link-succeed" onClick={() => { props.onClose(); props.onOpenLoginPopup(); }}>Войти</span>
                        : ''
                }

            </form>
        </div>
    )
}

export default PopupWithForm
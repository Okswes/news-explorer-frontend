import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';
import logoutblack from '../../images/logout-black.svg';

function Navigation(props) {
    return (
        <nav className="Navigation">
            {
                props.isOpen ?
                    <button className="navigation__button-menu" onClick={props.onClose}></button>
                    : <button className="navigation__button-menu" onClick={props.openMobileMenu}></button>
            }
            <ul className={`${props.isOpen ? 'navigation__container-mobile' : 'navigation__container'}`}>
                <Route exact path='/'>
                    <li><NavLink exact to='/' className={`${props.isOpen ? 'navigation__link-mobile' : 'navigation__link navigation__link-border'}`}>Главная</NavLink></li>
                    <li><NavLink to='/saved-news' className={`${props.isOpen ? 'navigation__link-mobile' : 'navigation__link'}`}>Сохранённые статьи</NavLink></li>
                    <li><span className={`${props.isOpen ? 'navigation__link-mobile navigation__button navigation__button-mobile' : 'navigation__link navigation__button'}`} onClick={props.onOpenLoginPopup}>Авторизоваться</span ></li>
                </Route>
                <Route exact path='/saved-news'>
                    <li><NavLink exact to='/' className={`navigation__link_black ${props.isOpen ? 'navigation__link-mobile' : 'navigation__link'}`}>Главная</NavLink></li>
                    <li><NavLink to='/saved-news' className={`navigation__link_black navigation__link-border navigation__link-border_black ${props.isOpen ? 'navigation__link-mobile' : 'navigation__link'}`}>Сохранённые статьи</NavLink></li>
                    <li><button className={`navigation__button navigation__button_black ${props.isOpen ? 'navigation__link-mobile' : ''}`}>Грета<img className="navigation__logout" src={logoutblack} alt="Выход" /></button></li>
                </Route>
            </ul>
        </nav >
    )
}

export default Navigation
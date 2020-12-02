import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Facebook from '../../images/facebook.png';
import Github from '../../images/github.png';

function Footer() {
    return (
        <footer className="Footer">
            <div className="footer__container">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <nav className="footer__navigation">
                <ul className="footer__links">
                    <li><NavLink exact to='/' className="footer__link">Главная</NavLink></li>
                    <li><a className="footer__link" href="https://praktikum.yandex.ru">Яндекс.Практикум</a></li>
                </ul>
                <ul className="footer__links footer__nav-links_icons">
                    <li><a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer"><img className="footer__icon" src={Github} alt="Гитхаб" /></a></li>
                    <li><a className="footer__link" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img className="footer__icon" src={Facebook} alt="Фейсбук" /></a></li>
                </ul>
            </nav>
            </div>
        </footer>
    )
}

export default Footer
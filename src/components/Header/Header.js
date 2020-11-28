import React from 'react';
import './Header.css';
import { NavLink, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <div className={`header ${props.isOpen ? 'header__mobile' : ''}`}>
            <div className='header__container'>
                <Route exact path='/'>
                    <NavLink exact to='/' className="header__logo" >NewsExplorer</NavLink>
                </Route>
                <Route exact path='/saved-news'>
                    <NavLink exact to='/' className="header__logo header__logo_black">NewsExplorer</NavLink>
                </Route>
                <Navigation onOpenLoginPopup={props.onOpenLoginPopup} openMobileMenu={props.openMobileMenu} isOpen={props.isOpen} onClose={props.onClose} />
            </div>
        </div>
    )
}

export default Header
import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { Route, Switch } from 'react-router-dom';

//Левел 3

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isSucceedPopupOpen, setIsSucceedPopupOpen] = React.useState(false);
  const [isMobileMenuOpen, setisMobileMenuOpen] = React.useState(false);

  function openLoginPopup() {
    setIsLoginPopupOpen(true);
  }

  function openSignupPopup() {
    setIsSignupPopupOpen(true);
  }

  function openSucceedPopup() {
    setIsSucceedPopupOpen(true);
  }

  function openMobileMenu() {
    setisMobileMenuOpen(true);
  }

  function closePopup() {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(false);
    setIsSucceedPopupOpen(false);
    setisMobileMenuOpen(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main onOpenLoginPopup={openLoginPopup} openMobileMenu={openMobileMenu} isOpen={isMobileMenuOpen} isLoginPopupOpen={isLoginPopupOpen} onClose={closePopup} />
          <Preloader />
          <NewsCardList />
          <About />
          <NotFound />
        </Route>
        <Route path="/saved-news">
          <SavedNews openMobileMenu={openMobileMenu} isOpen={isMobileMenuOpen} onClose={closePopup} />
        </Route>
      </Switch>
      <PopupWithForm isOpen={isLoginPopupOpen} onOpenSignupPopup={openSignupPopup} onSubmit={closePopup} onClose={closePopup} title="Вход" link="login" children={
        <>
          <label className="popup__span">Email</label>
          <input className="popup__item" type="email" placeholder="Введите почту" required />
          <span className="popup__error"></span>
          <label className="popup__span">Пароль</label>
          <input className="popup__item " type="password" placeholder="Введите пароль" required />
          <span className="popup__error popup__error_active">Недопустимый пароль</span>
        </>
      } />

      <PopupWithForm isOpen={isSignupPopupOpen} onOpenLoginPopup={openLoginPopup} onSubmit={() => { closePopup(); openSucceedPopup(); }} onClose={closePopup} title="Регистрация" link="signup" children={
        <>
          <label className="popup__span">Email</label>
          <input className="popup__item" type="email" placeholder="Введите почту" required />
          <span className="popup__error popup__error_active">Ошибка</span>
          <label className="popup__span">Пароль</label>
          <input className="popup__item" type="password" placeholder="Введите пароль" required />
          <span className="popup__error"></span>
          <label className="popup__span">Имя</label>
          <input className="popup__item" type="text" placeholder="Введите имя" required />
          <span className="popup__error"></span>
        </>
      } />

      <PopupWithForm isOpen={isSucceedPopupOpen} onOpenLoginPopup={openLoginPopup} onClose={closePopup} title="Пользователь успешно зарегистрирован!" link="succeed" />
      <Footer />
    </div>
  );
}

export default App;

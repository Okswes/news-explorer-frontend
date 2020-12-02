import React from 'react';
import './NotFound.css';
import pic from '../../images/not-found.svg';

function NotFound () {

  return (
    <div className="NotFound">
      <img className="notFound__pic" src={pic} alt="Не найдено"/>
      <h2 className="notFound__title">Ничего не найдено</h2>
      <p className="notFound__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  )
}

export default NotFound;
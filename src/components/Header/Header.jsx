import React from 'react';
import './Header.css'
import logo from '../../images/header__logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
      <img className='header__logo' src={logo} alt="Логотип"/>
      <div className='header__wrap'>
        <p className='header__registration-text'>Регистрация</p>
        <button className='header__login-button'>Войти</button>
      </div>
      </div>
    </header>
  );
}

export default Header;

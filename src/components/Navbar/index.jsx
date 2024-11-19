import React from 'react';
import style from './style.module.scss';
import UserBage from '../UserBage';

const Navbar = (props) => {
  return (
    <div className={style['navbar']}>
      <div className={style['navbar-container']}>
        <div className='logo'>
          <a href='#' className={style['logo-text']}>
            <img src='/logo.svg' alt='logo' className={style['logo-img']} />
            <h1>INSTAGRAM</h1>
          </a>
        </div>
        <UserBage nikname={props.nikname} avatar={props.avatar} id={props.id} />
      </div>
    </div>
  );
};

export default Navbar;

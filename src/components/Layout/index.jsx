import React from 'react';
import style from './style.module.scss';
import Navbar from '../Navbar';
const Layout = (props) => {
  return (
    <div className={style['main-layout']}>
      <Navbar nikname={props.nikname} avatar={props.avatar} id={props.id} />
      <main className={style['main-layout-content']}>{props.children}</main>
    </div>
  );
};

export default Layout;

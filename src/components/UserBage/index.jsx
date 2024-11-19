import React from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const UserBage = (props) => {
  const navigate = useNavigate();
  return (
    <div className={style['user-bage']} onClick={() => navigate(`/${props.id}`)}>
      <div className={style['user-bage-img']}>
        {props.avatar ? (
          <img src={props.avatar} alt='user' />
        ) : (
          <div className={style['avatar-placeholder']}></div>
        )}
      </div>
      <span className={style['user-bage-name']}>{props.nikname}</span>
    </div>
  );
};

export default UserBage;

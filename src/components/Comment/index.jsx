import React from 'react';
import style from './style.module.scss';

const Comment = ({ nikname, date, comment, avatar }) => {
  return (
    <div className={style['card-comment']}>
      <div className={style['comment-img']}>
        <img src={avatar} alt='' className={style['comment-user-img']} />
      </div>
      <div className={style['comment-info']}>
        <div className={style['comment-user-info']}>
          <span className={style['comment-user-name']}>{nikname}</span>
          <span className={style['comment-date']}>{date}</span>
        </div>
        <p className={style['comment-text']}>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;

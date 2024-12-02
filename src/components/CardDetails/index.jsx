import { useState } from 'react';
import style from './style.module.scss';
import { IoHeartSharp } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';
import { MdOutlineComment } from 'react-icons/md';
import UserBage from '../UserBage';
import Comment from '../Comment';
import { nanoid } from 'nanoid';
/* import { comments } from '../../assets/assets.js'; */

const CardDetails = (props) => {
  const [isLike, setIsLike] = useState(props.isLike);
  const [isComment, setIsComment] = useState(false);
  const renderComments = () => {
    if (props.comments.length > 2 && !isComment) {
      const commnetsCopy = [...props.comments];
      const commnetsForRenser = commnetsCopy.splice(props.comments.length - 2, 2);
      return (
        <>
          <span
            className={style['more-button']}
            onClick={() => setIsComment(true)}>{`Показать еще ${
            props.comments.length - commnetsForRenser.length
          } комментарии`}</span>
          {commnetsForRenser.map((item) => (
            <Comment
              nikname={item.nickname}
              date={item.date}
              comment={item.text}
              avatar={item.avatar}
              key={nanoid()}
            />
          ))}
        </>
      );
    }
    return (
      <>
        {props.comments.map((item) => (
          <Comment
            nikname={item.nickname}
            date={item.date}
            comment={item.text}
            avatar={item.avatar}
            key={nanoid()}
          />
        ))}
        {isComment && (
          <span className={style['more-button']} onClick={() => setIsComment(false)}>
            Скрыть комментарии
          </span>
        )}
      </>
    );
  };

  return (
    <article className={style['card-main']}>
      <header className={style['card-header']}>
        <UserBage nikname={props.nikname} avatar={props.avatar} id={props.id} />
      </header>
      <div className={style['card-img_wrap']}>
        <img src={props.imageURL} alt='img' className={style['card-img']} />
      </div>
      <div className={style['card-buttons']}>
        {isLike ? (
          <IoHeartSharp className={style['card-button']} onClick={() => setIsLike(false)} />
        ) : (
          <GoHeart className={style['card-button']} onClick={() => setIsLike(true)} />
        )}

        <MdOutlineComment className={style['card-button']} />
      </div>
      <p className={style['card-info']}>{`Оценили: ${props.likes}  человек`}</p>
      <div className={style['card-comments']}>{renderComments()}</div>
      <textarea className={style['card-comment-field']}></textarea>
    </article>
  );
};

export default CardDetails;

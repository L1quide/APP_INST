import style from './style.module.scss'
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import UserBage from '../UserBage';


const CardDetails = (props) => {
    console.log ( `react snippet works!` );

    return (
        <article className={style['card-main']}>
            <header className={style['card-header']}>
            <UserBage nikname={props.userName}  id={props.userId}/>
            </header>
            <div className={style['card-img_wrap']}><img src={props.imageURL} alt="img" className={style['card-img']}/></div>
            <div className={style['card-buttons']}>
                <button className={style['card-button']}>
                    {props.isLike ? <GrLike /> : <GrDislike />}
                </button>
                <button className={style['card-button']}>
                <MdOutlineComment />
                </button>
                </div>
            <p className={style['card-info']}>{`Оценили: ${props.cardInfo}  человек`}</p>
            <div className={style['card-comments']}>
                <p className={style['card-comment']}>{props.comment}</p>
            </div>
            <textarea name="" id="" className={style['card-comment-field']}></textarea>
        </article>
    );
}

export default CardDetails;
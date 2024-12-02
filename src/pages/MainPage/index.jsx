import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import CardDetails from '../../components/CardDetails';
import { assets } from '../../assets/assets.js';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../redux/actions/photos';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Bars } from 'react-loader-spinner';
import style from './maiPage.module.scss';

const MainPage = () => {
  const [page, setPage] = useState(1);
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.isLoading);
  const totalPhotos = useSelector((state) => state.photos.totalPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(page));
  }, [page]);

  /*  const handleScroll = () => {
    
  }; */
  return (
    <Layout nikname='Nik' id='1' avatar={assets.user}>
      {loading ? (
        <div className={style['loader-wrap']}>
          <Bars height='80' width='80' color='#000BFF' />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={photos.length}
          next={() => setPage(page + 1)}
          hasMore={photos.length < totalPhotos}
          loader={
            <div className={style['bottom-loader']}>
              <Bars height='20' width='20' color='#000BFF' />
            </div>
          }
          endMessage={'end'}>
          {photos.map(({ id, comments, author, imgUrl, likes }) => (
            <CardDetails
              key={id}
              nikname={author.nickname}
              id={author.id}
              avatar={author.avatarUrl}
              imageURL={imgUrl}
              comments={comments}
              isLike={false}
              likes={likes.length}
            />
          ))}
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default MainPage;

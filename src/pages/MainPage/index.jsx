import React from 'react';
import Layout from '../../components/Layout';
import CardDetails from '../../components/CardDetails';
import { assets } from '../../assets/assets.js';
import { comments } from '../../assets/assets.js';

const MainPage = () => {
  return (
    <Layout nikname='Nik' id='1' avatar={assets.user}>
      <CardDetails
        nikname={'Mark'}
        id={1}
        avatar={assets.user}
        imageURL={assets.girl_1}
        comments={[...comments]}
        isLike={false}
        likes={10}
      />
      <CardDetails
        nikname={'Mark'}
        id={1}
        avatar={assets.user}
        imageURL={assets.girl_1}
        comments={[...comments]}
        isLike={false}
        likes={10}
      />
    </Layout>
  );
};

export default MainPage;

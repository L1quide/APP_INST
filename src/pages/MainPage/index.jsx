import React from 'react';
import Layout from '../../components/Layout';
import CardDetails from '../../components/CardDetails';

const MainPage = () => {
  return (
    <Layout nikname='Nik' id='1'>
      <h1>MainPage</h1>
      <CardDetails nikname={'Mark'} id={1}/>
    </Layout>
  );
};

export default MainPage;

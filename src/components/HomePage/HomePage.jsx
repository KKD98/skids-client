import React from 'react';
import NavBar from '../SharedComponent/NavBar/NavBar';
import AllUsers from '../AllUsers/AllUsers';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AllUsers></AllUsers>
    </div>
  );
};

export default HomePage;
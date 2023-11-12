import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
  return (
    <nav>
      <Header></Header>
      <Outlet></Outlet>
    </nav>
  );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <nav>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </nav>
  );
};

export default Main;
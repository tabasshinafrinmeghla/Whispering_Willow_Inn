import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/room">Room</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import img from '../../img/WWI.jpg'
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <div >
        <img className='w-24 rounded-full mt-5 ms-10' src={img} alt="" />
      </div>

      <div className="navbar-center  m-10">

        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/">Home</Link>
        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/about">About</Link>
        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/room">Room</Link>
        
        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/booking">Booking</Link>
        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/contact">Contact</Link>
       
{/* 
        <Link className='m-5 ' to="/contact"><FaUser /></Link> */}
        


      </div>




    </div>


  );
};

export default Header;
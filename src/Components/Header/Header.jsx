import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import img from '../../img/WWI.jpg'

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

        {/* <details className="dropdown">
          <summary className="m-1 btn">Room</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><Link to="/vip room">VIP Room</Link> </li>
            <li><Link to="/available room ">Available Room</Link> </li>
          </ul>
        </details> */}



        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/booking">Booking</Link>
        <Link className='m-5  hover:bg-sky-800 px-3 hover:text-gray-50' to="/contact">Contact</Link>


        




      </div>




    </div>


  );
};

export default Header;
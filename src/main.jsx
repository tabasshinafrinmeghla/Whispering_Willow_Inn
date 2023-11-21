import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/pages/Home/Home';
import Main from './Components/Layout/Main';
import Room from './Components/pages/Room/Room';
import Booking from './Components/pages/Booking/Booking';
import Contact from './Components/pages/Contact/Contact';
import About from './Components/pages/About/About';
import VipRoom from './Components/pages/Room/VIPRoom/VipRoom';
import AvailableRoom from './Components/pages/Room/AvailableRoom/availableRoom';
import LogIn from './Components/Log In/LogIn';
import DifferentRoomDetails from './Components/pages/DifferentRoomDetails/DifferentRoomDetails';
import RoomsLayout from './Components/pages/RoomsLayout/RoomsLayout';
import DiffrentRoom from './Components/pages/Room/DiffrentRoom/DiffrentRoom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/room',
        element: <Room></Room>
      },
      {
        path: '/vip room',
        element: <VipRoom></VipRoom>
      },
      {
        path: '/available room',
        element: <AvailableRoom></AvailableRoom>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
      ,
      {
        path: '/category/:id',
        element:<DifferentRoomDetails></DifferentRoomDetails>
      },
      
    ]
    
    
  },

  {
    path: 'rooms',
    element: <RoomsLayout></RoomsLayout>,
    children:[
      {
        path:':id',
        element:<DiffrentRoom></DiffrentRoom>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

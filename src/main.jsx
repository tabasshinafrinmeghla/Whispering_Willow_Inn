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
        path:'/room',
        element: <Room></Room>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

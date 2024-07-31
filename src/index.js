import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Detail from './Components/Detail';
import store from './store';
import { Provider } from 'react-redux';
import StateDetails from './Components/statedetail';
import ProfileDetail from './Components/ProfileDetail';
import Profile from './Components/Profile'
import Reset from './Components/Reset';
import Forgot from './Components/Forgot';
import OTP from './Components/OTP';
import NewPassword from './Components/NewPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));

let routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Service />
  },
  {
    path: '/blogs',
    element: <Blog />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path:'/product/:id',
    element:<Detail/>
  },
  // {
  //   path:'/state/:stateName',
  //   element:<StateDetails/>
  // },
   {
    path:'/state/:id',
    element:<StateDetails/>
  },

  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/profiledetail',
    element: <ProfileDetail/>
  },
   {
    path: '/Reset',
    element: <Reset/>
  },
   {
    path: '/Forgot',
    element: <Forgot/>
  },
     {
    path: '/otp',
    element: <OTP/>
  },
     {
    path: '/newpass',
    element: <NewPassword/>
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();

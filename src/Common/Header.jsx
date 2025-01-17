import React, { useState } from 'react';
import logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className='text-white font-bold'>Academica Tours</span>
          </div>
          <div className="flex items-center lg:order-2">
            <ul className='flex'>
                <li>
            <Link to={'/login'} onClick={props.login}  className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 hover:bg-blue-800">{props.status ? "Logout" :"Login"}</Link>
            </li>
            <li>
            <Link to={'/signup'} className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 hover:bg-blue-800">Sign Up</Link></li>
            <li>
            <Link to={'/profile'} className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 hover:bg-blue-800">Profile</Link></li>
            </ul>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              type="button" 
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              aria-controls="mobile-menu-2" 
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </div>
          <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'flex' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to={'/'} className="block py-2 pr-4 pl-3 text-white hover:bg-red-800 hover:rounded-3xl" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to={'/about'} className="block py-2 pr-4 pl-3 text-white hover:bg-red-800 hover:rounded-3xl">About Us</Link>
              </li>
              <li>
                <Link to={'/services'} className="block py-2 pr-4 pl-3 text-white hover:bg-red-800 hover:rounded-3xl">Services</Link>
              </li>
              <li>
                <Link to={'/blogs'} className="block py-2 pr-4 pl-3 text-white hover:bg-red-800 hover:rounded-3xl">Tours</Link>
              </li>
              <li>
                <Link to={'/contact'} className="block py-2 pr-4 pl-3 text-white hover:bg-red-800 hover:rounded-3xl">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../appContext/ModeContext';
import { useUser } from '../appContext/UserContext';


//Main menu
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //handle darkmode
  const { isDarkMode, toggleDarkMode } = useTheme();

  //Handle Username
  const { username } = useUser();
  console.log(username)
  return (
    <div className="bg-blue-500 p-4">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <span className="text-3xl font-semibold text-white">TO-DO</span>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="md:hidden text-gray-500 hover:text-gray-700 ml-auto"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
          onClick={toggleMenu}>
          <span className="text-3xl font-semibold text-white">{isOpen ? '⇨' : '⇦'}</span>
        </button>
        <div className={`md:flex space-x-4 ${isOpen ? '' : 'hidden'}`}>
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          <Link to="/tasks" className="text-white hover:underline">Tasks</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
          <div>{username && (<p className="text-white">Usuario: {username}</p>)}
          </div>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md">
            {isDarkMode ? "🌞" : "🌕"}
          </button>
        </div>
      </div>
    </div>
  );
}
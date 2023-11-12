import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../appContext/AuthContext";
import { useTheme } from '../appContext/ModeContext';
import { useUser } from '../appContext/UserContext';

//Login Page
export default function LoginForm() {
  //Login context
  const { isLoggedIn, login } = useAuth();
  const { setUserName } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Handle darkmode
  const { isDarkMode, toggleDarkMode } = useTheme();

  //Users database
  const database = {
    username: "usuario",
    password: "demo"
  };

  //Validate login
  const handleLogin = () => {
    if (username === database.username && password === database.password) {
      login();
      setUserName(username);
    } else {
      alert("Contraseña o Usuario incorrectos");
    }
  };

  return (
    <MainLayout>
      <div className={`flex flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-3xl font-bold mb-4">Iniciar Sesión</h2>
        <input
          className={`mb-4 p-2 border rounded focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input
          className={`mb-4 p-2 border rounded focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        {isLoggedIn ? <Navigate to="/" /> : null}
        <button
          className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none ${isDarkMode ? 'dark-button' : ''}`}
          onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </MainLayout>
  );
}

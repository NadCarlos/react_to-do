import React, { useState } from 'react';
import LMain from '../layouts/LMain';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext";

function LoginForm() {
  const { isLoggedIn, login } = useAuth(); // Obtiene isLoggedIn y login del contexto

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Supongamos que tienes un objeto que almacena las credenciales del usuario
  const database = {
    username: "a",
    password: "a"
  };

  const handleLogin = () => {
    if (username === database.username && password === database.password) {
      login(); // Llama a la función login del contexto
      // Utiliza Navigate para redirigir al usuario a la página principal
    } else {
      alert("Nope");
    }
  };

  return (
    <LMain>
      <div>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoggedIn ? <Navigate to="/" /> : null}
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </LMain>
  );
}

export default LoginForm;




/*
// User Login info
const database = [
  {
    username: "a",
    password: "a"
  },
  {
    username: "user2",
    password: "pass2"
  }
];
*/
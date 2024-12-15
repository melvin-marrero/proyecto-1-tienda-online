// src/componentes/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');

  // Si no está autenticado, redirige a la página de login
  return isAuthenticated ? children : <Navigate to="/admin" />;
};


export default ProtectedRoute;


import React from "react";
import "./access.css";

const Access = () => {
  const handleLoginRedirect = () => {
    window.location.href = "/login";
  };

  return (
    <div className="auth-required-container">
      <div className="auth-content">
        <h1>Acceso Restringido</h1>
        <p>Debes iniciar sesión para acceder a esta página.</p>
        <button className="login-button" onClick={handleLoginRedirect}>
          Ir a Login
        </button>
      </div>
    </div>
  );
};

export default Access;

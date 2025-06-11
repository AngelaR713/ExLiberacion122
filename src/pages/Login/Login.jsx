// import { useAuth } from "../../hooks/useAuth";
//
// const Login = () => {
//   const {login} = useAuth();
//   return (
//     <>
//     <h1>Login page</h1>
//     <button onClick={() => login("testEmai@gmail.com")}>login</button>
//     </>
//
//   )
//
// }
// export default Login;
//
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import NetflixHeader from '../../components/NetfilxHeader/NetflixHeader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login attempt:', { email, password });
    // Add your login logic here
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
    <NetflixHeader />
      <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        
        <div className="login-form">
          <input
            type="text"
            placeholder="Email o número de celular"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          
          <button onClick={handleLogin} className="login-button">
            Iniciar sesion
          </button>
          
          <button onClick={handleRegister} className="register-button">
            Usar un codigo de inicio de sesion
          </button>
          
          <div onClick={handleForgotPassword} className="forgot-password">
            ¿Olvidaste la contraseña?
          </div>
        </div>
        
        <div className="back-link" onClick={handleBackToHome}>
          <span className="back-arrow">‹</span>
          <div className="back-text">Volver a la página de inicio</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation (you'd replace this with actual authentication)
    if (email === 'admin@example.com' && password === 'admin123') {
      // Redirect to admin dashboard on successful login
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      
      <div className="login-right">
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-decoration top-left"></div>
          <div className="form-decoration top-right"></div>
          <div className="form-decoration bottom-left"></div>
          <div className="form-decoration bottom-right"></div>
          
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="forgot-password">
            <a href="/forgot-password" className="hover-underline">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
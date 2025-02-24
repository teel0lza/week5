import React, { useState } from 'react';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true); // ให้เข้าสู่ระบบได้ทันที
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>เข้าสู่ระบบ</h2>
        <div className="input-group">
          <label>อีเมล</label>
          <input 
            type="email" 
            placeholder="กรอกอีเมล" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>รหัสผ่าน</label>
          <input 
            type="password" 
            placeholder="กรอกรหัสผ่าน" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-login">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
};

export default Login;

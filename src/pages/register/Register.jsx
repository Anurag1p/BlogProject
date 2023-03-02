import "./register.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username......."
        />
        <label htmlFor="">Email</label>
        <input
          type="mail"
          className="registerInput"
          placeholder="Enter your Email......."
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password......"
        />
        <button className="registerButton">Register</button>
      </form>
      
      <button className="loginRagisterButton">
        
        <Link to="/register" className="link">Login</Link>
        
        </button>
    </div>
  );
};

export default Register;

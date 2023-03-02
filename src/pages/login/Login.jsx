import "./login.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="mail"
          className="loginInput"
          placeholder="Enter your Email......."
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password......"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRagisterButton">
        <Link to="/register" className="link">Register</Link>
        
        </button>
    </div>
  );
};

export default Login;

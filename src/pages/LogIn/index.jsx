import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css';

const LogIn = () => {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <TextField 
        variant="outlined" 
        label="Username" 
        className="ws-login-username-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Password" 
        className="ws-login-password-input" 
      />
      <Button variant="contained">Login</Button>
      <Link to="/" >Forgot password?</Link>
      <Link to="/signup">Create an account</Link>
    </div>
  );
};

export default LogIn;
import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css';

const LogIn = () => {
  return (
    <div className="form">
      <h2>Login</h2>
      <TextField variant="standard" label="Username" />
      <TextField variant="standard" type="password" label="Password" />
      <Link to="/" className="forgotPassword">Forgot password?</Link>
      <Button variant="contained">Login</Button>
      <Link to="/signup" className="signUp">Sign up</Link>
    </div>
  );
};

export default LogIn;
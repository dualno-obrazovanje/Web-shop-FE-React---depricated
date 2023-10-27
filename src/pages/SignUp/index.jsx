import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css';

const SignUp = () => {
  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <TextField 
        variant="outlined" 
        label="Username" 
        className="ws-signup-username-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Password" 
        className="ws-signup-password-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Confirm Password" 
        className="ws-signup-confirm-password-input" 
      />
      <Button variant="contained">Sign Up</Button>
      <Link to="/">Already have an account?</Link>
    </div>
  );
};

export default SignUp;
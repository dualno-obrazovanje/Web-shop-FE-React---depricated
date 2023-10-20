import "./App.css";
import { TextField, Button } from "@mui/material";

function App() {
  return (
    <div className="form">
      <h2>Login</h2>
      <TextField variant="standard" label="Username" />
      <TextField variant="standard" type="password" label="Password" />
      <a href="#" className="forgotPassword">Forgot password?</a>
      <Button variant="contained">Login</Button>
      <a href="#" className="signUp">Sign up</a>
    </div>
  );
}

export default App;

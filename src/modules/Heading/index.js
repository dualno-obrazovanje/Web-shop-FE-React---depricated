import React from "react";
import { Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomHeadingIcon from "./CustomHeadingIcon";
import { Link } from "react-router-dom";
import './style.css';

const Heading = () => {
  return (
    <div className="heading-container">
      <div className="ws-top-level-heading">
        <CustomHeadingIcon functionalIcon CustomIcon={SearchIcon}/>
        <div className="title">
          <CustomHeadingIcon CustomIcon={ControlCameraIcon}/>
          <h1>WebShop</h1>
          <CustomHeadingIcon CustomIcon={ControlCameraIcon}/>
        </div>
        <div className="right-icon-group">
          <CustomHeadingIcon functionalIcon CustomIcon={PersonIcon}/>
          <CustomHeadingIcon functionalIcon CustomIcon={ShoppingCartIcon}/>
        </div>
      </div>
      <Divider />
      <div className="ws-bottom-level-heading">
        <Link to="/">Shop</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Backet</Link>
      </div>
       
    </div>
  );
};

export default Heading;
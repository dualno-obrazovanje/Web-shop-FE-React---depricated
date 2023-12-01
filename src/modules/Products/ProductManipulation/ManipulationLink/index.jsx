import React from "react";
import './style.scss';
const ManipulationLink = ({ isActive, label }) => {
  return <p className={`manipulation-link ${isActive ? 'active-link' : ''}`}>{label}</p>
}

export default ManipulationLink;
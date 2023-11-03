import React from "react";
import './style.css';

const CustomHeadingIcon = ({functionalIcon = false, CustomIcon}) => {
  return(<CustomIcon className={functionalIcon ? 'functional-icon' : 'decor-icon'} />);
}

export default CustomHeadingIcon;
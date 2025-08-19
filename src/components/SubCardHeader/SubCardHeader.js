import React from "react";
import "./SubCardHeader.css";

const SubCardHeader = ({ leftText, rightText }) => {
 return (
   <div className="subcard-header-container">
     <div className="left-text">{leftText}</div>
     <div className="right-text">{rightText || ""}</div>
   </div>
 );
};

export default SubCardHeader;




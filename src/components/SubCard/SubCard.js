import React from "react";
import "./SubCard.css";
import icons from "../../docs/icons/icons";
/*
         <span className="subcard-icon" role="img" aria-label="icon">
           {subHeaderIcon}
         </span>
*/

const SubCard = ({ header, subHeader, subHeaderIcon = null, bulletPoints=[] }) => {
 const icon = icons[subHeaderIcon];

 return (
   <div className="subcard">
     <div className="subcard-header">{header}</div>
     <div className="subcard-subheader">
       {subHeaderIcon && (
          <img
            src={icon}
            alt={`${subHeaderIcon} icon`}
            className="subcard-icon"
          />
       )}
       {subHeader && <span>{subHeader}</span>}
     </div>
     {bulletPoints.length > 0 && (
       <ul className="subcard-bullets">
         {bulletPoints.map((point, i) => (
           <li key={i}>{point}</li>
         ))}
       </ul>
     )}
   </div>
 );
};

export default SubCard;

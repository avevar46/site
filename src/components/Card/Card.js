import React from 'react';
import './Card.css';
import SubCard from "../SubCard/SubCard";
import SubCardHeader from "../SubCardHeader/SubCardHeader";
import companyLogos from "../../docs/logos/logos";
import icons from "../../docs/icons/icons";


const Card = ({ icon, headerLeftText, headerRightText, subCards }) => {

 const logo = companyLogos[icon];

/*
       <span role="img" aria-label="icon" className="icon">
         {logo}
       </span>
*/

 return (
   <div className="custom-card">
     <div className="left-column">

        {icon && (
          <img
            src={logo}
            alt={`${icon} logo`}
            className="icon"
          />
        )}
     </div>


     <div className="divider-container">
       <div className="divider"></div>
     </div>


     <div className="right-column">
       {headerLeftText && (
         <SubCardHeader leftText={headerLeftText} rightText={headerRightText || ""} />
       )}
       {subCards && subCards.length > 0 ? (
         subCards.map((sc, idx) => (
           <SubCard
             key={idx}
             header={sc.header}
             subHeader={sc.subHeader}
             subHeaderIcon={sc.subHeaderIcon}
             bulletPoints={sc.bulletPoints}
           />
         ))
       ) : (
         <p className="text">No content</p>
       )}
     </div>
   </div>
 );
};


export default Card;




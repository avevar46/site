import React, { useState } from "react";
import "./HeaderNavbar.css";
//import '../../Section.css';

import { Link } from "react-router-dom";

/*import myFile from "../assets/myFile.pdf";*/


/*
     <div className="header-nav-brand">Home</div>
*/
function HeaderNavbar() {
 const [isOpen, setIsOpen] = useState(false);
 const handleClick = () => {
   window.open('/sample.pdf', '_blank', 'noopener noreferrer');
 };
 /*const handleClick = (e) => {
   e.preventDefault(); // Prevent default anchor link behavior
   window.open('/docs/sample.pdf', '_blank');
 };*/



 /*
     <div className="header-nav-brand">
       <a href="#home" aria-label="Home" className="icon-link" title="Home">
         <img src="/home.png" alt="Home" />
       </a>
       <a href="#settings" aria-label="Settings" className="icon-link" title="Settings">
         <img src="/settings.png" alt="Settings" />
       </a>
     </div>

 */



     /*
       <div className="header-nav-link-container">
         <div className={`header-nav-link ${isOpen ? "open" : ""}`}>
           <a href="#highlights">Highlights</a>
         </div>
       </div>


     */


  /* TODO: clean this up :( */
  /* TODO: fix the link issue, only clicks on text, not whole box */
 return (
   <nav className="header-navbar">
     <div className="header-nav-brand">
     </div>
     <div className="header-nav-link-container-group">
       <div className="header-nav-link-container">
         <div className={`header-nav-link ${isOpen ? "open" : ""}`}>
           <Link to="/experience">Experience</Link>
         </div>
       </div>
       <div className="header-nav-link-container">
         <div className={`header-nav-link ${isOpen ? "open" : ""}`}>
           <Link to="/references">References</Link>
         </div>
       </div>
       <div className="header-nav-link-container">
         <div className={`header-nav-link ${isOpen ? "open" : ""}`}>
           <Link to="/contact">Contact</Link>
         </div>
       </div>
     </div>
   </nav>
 );


 /*
     <div className="header-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
       ☰
     </div>
 */


 /*
         <Link to="/experience" className={`header-nav-link ${isOpen ? "open" : ""}`}>
           Experience
         </Link>
 */


 /*
       <div className="header-nav-link-container">
         <div className={`header-nav-link ${isOpen ? "open" : ""}`}>
           <a href="#" onClick={handleClick}>Resume</a>
         </div>
       </div>
 */


/*
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      <a href={samplePDF} target="_blank" rel="noopener noreferrer">
        Open PDF
      </a>
      <Link to="/Experiences">Experiences</Link>
      <Link to="/References">References</Link>
    </nav>
  );*/
}



export default HeaderNavbar;

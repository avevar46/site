/*import React, { useState } from "react";*/
import React, { useState } from 'react';
import image from "../../image.png"
/*import seattle from "../../seattle.jpeg"*/
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar"


import './Header.css';
import '../../Section.css';
import bioPhoto from "../../data/bio/BioPhoto.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Avery Varhade</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header-photo-container">
        <img src={bioPhoto} alt="personal photo" className="header-photo" />
      </div>
    </header>
  );
}

/*
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-text">
          <div className="header-text">
            <h1>Avery Varhade</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
        <div className="header-photo-container">
          <img src={myPhoto} alt="Me" className="header-photo" />
        </div>
      </div>
    </header>
  );
}
*/










/*
function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const handleClick = () => {
   window.open('/sample.pdf', '_blank', 'noopener noreferrer');
 };

 return (
   <div style={{ paddingTop: '30px' }}>
     <div
       className="hero-header"
       style={{
         backgroundImage: `url(${image})`, // or remove if using CSS background-image
       }}
     >
       <div className="hero-content">
         <h1>Welcome to My Website</h1>
         <p>Build something amazing.</p>
       </div>

     </div>
   </div>
 );
}


export default Header;
*/




/*
         <button onClick={handleClick}>
           Resume
         </button>
*/




/*

        <div class="jumbotron heading paper-bg">
          <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 center">
                    <img src="image.png" width="150px" height="150px" class="img-fluid rounded-circle grayscale"/>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 center text-center">
                    <h1 class="display-5 name">Yo</h1>
                    <p class="lead center">Manager</p>
                </div>
            </div>
          </div>
        </div>




*/
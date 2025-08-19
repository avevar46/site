import React from 'react';
import Card from "./../components/Card/Card";

export default function Contact() {

 // TODO: move this data out like other pages
 const contactCard = [
   {
     icon: "emailcircle",
     headerLeftText: "Get in touch",
     headerRightText: "",
     subCards: [
       {
         header: "Email: avevar46@gmail.com",
       }
     ],
   },
 ];

    // TODO: make this nicer looking?
    return (
        <div>
            <section id="Title" className="section-card-title">
                <h1>Contact Info</h1>
            </section>
            {contactCard.map((card, index) => (
               <Card key={index} icon={card.icon} headerLeftText={card.headerLeftText} headerRightText={card.headerRightText} subCards={card.subCards} />
            ))}
        </div>
    );
}
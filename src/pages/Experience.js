import React from 'react';
import Card from './../components/Card/Card';
import experienceData from "../data/experience/experience_data.json";

export default function Experience() {
  const experience = experienceData || [];

  // TODO: fix redundant code below

    return (
        <div>
            <div>
                <section id="overview" className="section-card-title">
                    <h1>Experience</h1>
                </section>
            </div>

            <h2>Work Experience</h2>
            {experienceData?.overviewCards?.map((card, index) => (
               <Card key={index} icon={card.icon} headerLeftText={card.headerLeftText} headerRightText={card.headerRightText} subCards={card.subCards} />
            ))}

            <h2>Internships</h2>
            {experienceData?.internshipCards?.map((card, index) => (
               <Card key={index} icon={card.icon} headerLeftText={card.headerLeftText} headerRightText={card.headerRightText} subCards={card.subCards} />
            ))}

            <h2>Leadership</h2>
            {experienceData?.highlightsCards?.map((card, index) => (
               <Card key={index} icon={card.icon} headerLeftText={card.headerLeftText} headerRightText={card.headerRightText} subCards={card.subCards} />
            ))}

            <h2>Education</h2>
            {experienceData?.educationCards?.map((card, index) => (
               <Card key={index} icon={card.icon} headerLeftText={card.headerLeftText} headerRightText={card.headerRightText} subCards={card.subCards} />
            ))}
        </div>
    );
}

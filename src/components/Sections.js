import React from "react";
import "./styles.css";
import Subsections from "./Subsections";

function Sections({ sections }) {
  return (
    <div className="sections">
      {sections.map((section, index) => (
        <div key={index}>
          <img className="arrowRight" src="https://i.ibb.co/x7pvSh0/Polygon-2.png" alt="Arrow" />
          <div>{section.name ? section.name : section}</div>
          {section.name && section.subSections && (
            <Subsections subSections={section.subSections} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Sections;
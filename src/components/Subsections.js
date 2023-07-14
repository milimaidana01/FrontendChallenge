import React from "react";
import "./styles.css";

function Subsections({ subSections }) {
  return (
    <div className="subsections">
      {subSections.map((subsection, index) => (
        <div key={index}>{subsection}</div>
      ))}
    </div>
  );
}

export default Subsections;

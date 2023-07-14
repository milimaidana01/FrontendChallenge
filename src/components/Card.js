import React from "react";
import "./styles.css";

function Card({ title, subtitle, extraSubtitles }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardSubtitle">{subtitle}</div>
      <div className="cardExtraSubtitles">
        {extraSubtitles && extraSubtitles.map((extraSubtitle, index) => (
          <div key={index}>{extraSubtitle}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;

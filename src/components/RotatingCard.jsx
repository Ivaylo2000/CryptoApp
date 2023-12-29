import React from "react";

const RotatingCard = ({ watchlistOpen, frontContent, backContent }) => {
  const cardClass = watchlistOpen ? "rotated" : "";

  return (
    <div className={`rotating-card ${cardClass}`}>
      <div className="front">{frontContent}</div>
      <div className="back">{backContent}</div>
    </div>
  );
};

export default RotatingCard;

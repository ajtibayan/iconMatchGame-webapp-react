import React from "react";

const GameCard = ({ faIcon, index }) => {
  return (
    <div className={`card cNum${index}`}>
      <div className="card-back card-face">
        <i className="fa-solid fa-circle-question"></i>
      </div>
      <div className="card-front card-face">
        <i className={`card-icon ${faIcon}`}></i>
      </div>
    </div>
  );
};

export default GameCard;

import React from "react";

// Assets
import GameCard from "./GameCard";
import GameInfo from "./GameInfo";

const GameContainer = ({ cardsArray }) => {
  return (
    <div className="game-container">
      <GameInfo />

      {cardsArray.map(({ faIcon }, index) => {
        return <GameCard faIcon={faIcon} index={index} />;
      })}
    </div>
  );
};

export default GameContainer;

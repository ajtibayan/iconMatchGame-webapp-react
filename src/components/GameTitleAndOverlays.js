import React from "react";

const GameTitleAndOverlays = () => {
  return (
    <>
      <h1 className="page-title">Icon Matching Game</h1>
      <div className="overlay-text visible">Click to Start</div>
      <div id="game-over-text" className="overlay-text">
        GAME OVER
        <span className="overlay-text-small">Click to Restart</span>
      </div>
      <div id="victory-text" className="overlay-text">
        VICTORY
        <span className="overlay-text-small">Click to Restart</span>
      </div>
    </>
  );
};

export default GameTitleAndOverlays;

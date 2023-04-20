import React, { useState, useEffect } from "react";
import { MixOrMatch } from "../controllers/MixOrMatchController";
import GameContainer from "../components/GameContainer";
import GameTitleAndOverlays from "../components/GameTitleAndOverlays";

// Assets
import { cardImgs } from "../data/origCardImgs";
import "../App.css";

const GameHome = () => {
  const [cardsArray, setCardsArray] = useState(cardImgs);

  function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new MixOrMatch(100, cards);

    overlays.forEach((overlay) => {
      overlay.addEventListener("click", () => {
        shuffleCards(cardsArray);
        overlay.classList.remove("visible");
        game.startGame();
      });
    });

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        game.flipCard(card);
      });
    });
  }

  useEffect(() => {
    shuffleCards(cardsArray);
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
  }, []);

  const shuffleCards = (cArray) => {
    const nArray = [...cArray];
    for (let i = nArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [nArray[i], nArray[randIndex]] = [nArray[randIndex], nArray[i]];
    }
    setCardsArray(nArray);
  };

  return (
    <>
      <GameTitleAndOverlays />
      <GameContainer cardsArray={cardsArray} />
    </>
  );
};

export default GameHome;

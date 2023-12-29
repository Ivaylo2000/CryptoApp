import React from "react";
import CoinsHeader from "./CoinsHeader";
import "./Card.scss";
import CoinsTable from "./CoinsTable";
import { useState } from "react";
import WatchedCurrencies from "./WatchedCurrencies";
import useGetCoins from "../hooks/useGetCoins";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
// import { cryptoData } from "./cryptoData";

const Card = () => {
  const [selectedStarIndices, setSelectedStarIndices] = useState([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);

  const cryptoData = useGetCoins();
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleOpenWatchList = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const handleStarClick = (
    coinName,
    coinImage,
    coinSymbol,
    coinPrice,
    marketCap
  ) => {
    setSelectedStarIndices((prevSelectedIndices) => {
      const coinIndex = cryptoData.findIndex((coin) => coin.name === coinName);
      const indexExists = prevSelectedIndices.includes(coinIndex);

      const coinDetails = {
        name: coinName,
        image: coinImage,
        symbol: coinSymbol,
        current_price: coinPrice,
        market_cap: marketCap,
      };

      if (indexExists) {
        setSelectedCurrencies((prevSelectedCurrencies) =>
          prevSelectedCurrencies.filter(
            (currency) => currency.name !== coinName
          )
        );

        return prevSelectedIndices.filter((i) => i !== coinIndex);
      } else {
        setSelectedCurrencies((prevSelectedCurrencies) => {
          const currencyExists = prevSelectedCurrencies.some(
            (currency) => currency.name === coinName
          );

          return currencyExists
            ? prevSelectedCurrencies
            : [...prevSelectedCurrencies, coinDetails];
        });

        return [...prevSelectedIndices, coinIndex];
      }
    });
  };

  return (
    <div className={`coinsContainer ${isCardFlipped ? "watchlistOpen" : ""}`}>
      {!isCardFlipped && (
        <>
          <h1>Top 50 Cryptocurrency</h1>
          <span onClick={handleOpenWatchList}>
            <b> Open WatchList</b>
          </span>
        </>
      )}
      {isCardFlipped ? (
        <WatchedCurrencies
          onSelectedCurrencies={selectedCurrencies}
          onCardFlip={handleOpenWatchList}
          handleStarClick={handleStarClick}
          selectedStarIndices={selectedStarIndices}
          solidStar={solidStar}
          regularStar={regularStar}
        />
      ) : (
        <CoinsHeader />
      )}
      {isCardFlipped ? (
        ""
      ) : (
        <CoinsTable
          cryptoData={cryptoData}
          handleStarClick={handleStarClick}
          selectedStarIndices={selectedStarIndices}
          solidStar={solidStar}
          regularStar={regularStar}
        />
      )}
    </div>
  );
};

export default Card;

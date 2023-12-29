import CoinsTable from "./CoinsTable";
import CoinsHeader from "./CoinsHeader";
import "./WatchedCurrencies.scss";
import { faXmark as Mark } from "@fortawesome/free-solid-svg-icons";

const WatchedCurrencies = ({
  onSelectedCurrencies,
  onCardFlip,
  handleStarClick,
  selectedStarIndices,
  solidStar,
  regularStar,
}) => {
  return (
    <>
      <div className="watchListHeadler">
        <h1>Your WatchList</h1>
        <span onClick={onCardFlip}>
          <b>To Top 50</b>
        </span>
      </div>
      <div className="watchedCoinsHeader">
        <CoinsHeader />
      </div>
      <div className="watchedCoins">
        <CoinsTable
          cryptoData={onSelectedCurrencies}
          handleStarClick={handleStarClick}
          selectedStarIndices={selectedStarIndices}
          solidStar={Mark}
          regularStar={Mark}
        />
      </div>
    </>
  );
};
export default WatchedCurrencies;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";

const CoinsTable = ({
  cryptoData,
  handleStarClick,
  selectedStarIndices,
  solidStar,
  regularStar,
}) => {
  const sortedCryptoData = cryptoData.sort(
    (a, b) => b.market_cap - a.market_cap
  );
  return (
    <div className="coinsTable">
      {sortedCryptoData.map((coin, index) => (
        <div key={coin.name} className="cryptoRow">
          <p>{index + 1}</p>
          <p className="imgTd">
            <img src={coin.image} alt={coin.name} />
          </p>
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p>${coin.current_price.toFixed(2)}</p>
          <p>
            <FontAwesomeIcon
              id={coin.id}
              onClick={() =>
                handleStarClick(
                  coin.name,
                  coin.image,
                  coin.symbol,
                  coin.current_price,
                  coin.market_cap
                )
              }
              cursor={"pointer"}
              icon={
                selectedStarIndices.includes(index) ? solidStar : regularStar
              }
              size="lg"
              style={{ color: "#f6b87e" }}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default CoinsTable;

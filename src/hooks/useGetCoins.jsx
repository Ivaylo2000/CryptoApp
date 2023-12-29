import { useState, useEffect } from "react";

const useGetCoins = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&locale=en        "
      );
      const data = await response.json();
      console.log(data);
      setCryptoData(data);
    };
    fetchData();
  }, []);

  return cryptoData;
};

export default useGetCoins;

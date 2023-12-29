import { useState, useEffect } from "react";
import { backupData } from "../backupData/backupData";

const useGetCoins = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error(error);
        setCryptoData(backupData);
      }
    };

    fetchData();
  }, []);

  return cryptoData;
};

export default useGetCoins;

import  { useState, useEffect, useContext } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import CoinContext from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [ coinData, setCoinData ] = useState();
  const [ historicalData, setHistoricalData ] = useState();

  const fetchCoinData = async() => {
    const options = {
      method: "GET",
      headers: {accept: 'application/json', 'x-cg-demo-api-key':'CG-yE7VyzjRsjwC4QXvtLa2USnZ'}
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json()).then(res => {
        console.log(res);
        setCoinData(res);
      })
      .catch(err => console.error(err));
  }
  const fetchHistoricalData = async() => {
    const options = {
      method: "GET",
      headers: {accept: 'application/json', 'x-cg-demo-api-key':'CG-yE7VyzjRsjwC4QXvtLa2USnZ'}
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json()).then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency])

  if(coinData && historicalData){
    return (
    <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {(() => {
              const price = coinData.market_data?.current_price?.[currency.name] || coinData.market_data?.current_price?.usd ||
                          coinData.current_price?.[currency.name] || coinData.current_price?.usd;
              return price ? price.toLocaleString() : 'N/A';
            })()}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {(() => {
              const marketCap = coinData.market_data?.market_cap?.[currency.name] || coinData.market_data?.market_cap?.usd ||
                              coinData.market_cap?.[currency.name] || coinData.market_cap?.usd;
              return marketCap ? marketCap.toLocaleString() : 'N/A';
            })()}</li>
          </ul>
        </div>
    </div>
  )
  };
};
export default Coin;
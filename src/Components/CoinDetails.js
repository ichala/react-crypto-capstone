import millify from 'millify';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import CardSmallChart from './CardSmallChart';

function CoinDetails() {
  let coin;
  const { id } = useParams();
  const crypto = useSelector((state) => state.cryptos);
  crypto.forEach((element) => {
    if (element.uuid === id) {
      coin = element;
    }
  });
  return (
    <>
      <div className={coin.change > 0 ? ('glassSucessBG') : ('glassFailureBG')}>
        <div className="row ">
          <div className="col-8 center-block text-center">
            {' '}
            <CardSmallChart />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-start flex-column p-2 text-white">
            <img className="cryptoLogo" src={coin.iconUrl} alt="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" />
            <h3 className="m-0">{coin.name}</h3>
            Rank #
            {coin.rank}
          </div>
        </div>
      </div>
      <div className="col-12 text-white text-center p-3">
        Symbol :
        { ' ' }
        { coin.symbol }
      </div>
      <div className="col-12 text-white text-center bg-dark p-3">
        Change :
        { ' ' }
        {coin.change > 0 ? (
          <span className="successCritical">
            <i className="bi bi-arrow-up-short" />
            {coin.change}
            %
          </span>
        ) : (
          <span className="failureCritical">
            <i className="bi bi-arrow-down-short" />
            {coin.change}
            %
          </span>
        )}
      </div>
      <div className="col-12 text-white text-center p-3">
        Market Cap :
        { ' ' }
        { millify(coin.marketCap) }
      </div>
      <div className="col-12 text-white text-center bg-dark p-3">
        Price :
        {' '}
        { ' ' }
        { millify(coin.price) }
        {' '}
        $
      </div>
      <div className="col-12 text-white text-center  p-3">
        BTC Price :
        {' '}
        { ' ' }
        { Number(coin.btcPrice).toFixed(5) }
        {' '}
        $
      </div>

      <div className="col-12 text-white text-center  p-3">
        <Link to="/">
          <button type="button" className="btn btn-warning">
            {' '}
            <i className="bi bi-arrow-left-short" />
            Back
          </button>
        </Link>
        {' '}

      </div>
    </>
  );
}

export default CoinDetails;

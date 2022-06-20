import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SetCryptos } from '../Redux/crypto';
import FetchCryptos from '../Redux/api';

function Home() {
  const dispatch = useDispatch();
  const crypto = useSelector((state) => state.cryptos);
  async function intitData() {
    const data = await FetchCryptos();
    dispatch(SetCryptos(data));
  }
  if (crypto.length < 1) {
    intitData();
    return (
      <div className="text-center">
        <div className=" text-center p-4 spinner-grow text-light" role="status" />
      </div>
    );
  }
  return (
    <>

      <Link to={`/coin/${crypto[0].uuid}`}>
        {' '}
        <div className={crypto[0].change > 0 ? ('glassSucessBG') : ('glassFailureBG')}>
          <div className="row p-4">
            <div className="col-6 d-flex justify-content-center p-2"><img className="cryptoLogo" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" alt="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" /></div>
            <div className="col-6 d-flex justify-content-center align-items-start flex-column p-2 text-white">
              <h3 className="m-0">{crypto[0].name}</h3>
              {crypto[0].change > 0 ? (
                <span className="successCritical">
                  <i className="bi bi-arrow-up-short" />
                  {crypto[0].change}
                  %
                </span>
              ) : (
                <span className="failureCritical">
                  <i className="bi bi-arrow-down-short" />
                  {crypto[0].change}
                  %
                </span>
              )}
            </div>
          </div>
        </div>
        {' '}

      </Link>
      <div className="col-12 p-1 text-white" style={{ backgroundColor: 'black' }}>
        Stats by currency
      </div>
      <div className="row">
        {crypto.slice(1, crypto.length).map((item) => (
          <div key={item.uuid} className={item.change > 0 ? ('col-6 glassSucessBG') : ('col-6 glassFailureBG')}>

            {' '}
            <Link to={`/coin/${item.uuid}`}>
              <div className="col p-2 d-flex flex-column align-items-center">
                <div className="row d-flex flex-column text-white align-self-end ml-3">
                  <i className="bi bi-arrow-right-circle" />
                </div>
                <div className="row d-flex justify-content-center p-2 "><img className="cryptoLogo" src={item.iconUrl} alt={item.uuid} /></div>
                <div className="row d-flex flex-column text-white align-self-end mt-3 ml-3">
                  <h3 className="m-0 justify-content-end">{ item.symbol }</h3>
                  {item.change > 0 ? (
                    <span className="successCritical">
                      <i className="bi bi-arrow-up-short" />
                      {item.change}
                      %
                    </span>
                  ) : (
                    <span className="failureCritical">
                      <i className="bi bi-arrow-down-short" />
                      {item.change}
                      %
                    </span>
                  )}

                </div>
              </div>
            </Link>
          </div>

        ))}

      </div>
    </>
  );
}

export default Home;

const GET = 'GET_CRYPTOS';

// Reducers
export default function reducerCrypto(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function SetCryptos(crypto) {
  return { type: GET, payload: crypto };
}

export const CryptoList = (state) => state.cryptos;

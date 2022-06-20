import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCrypto from './crypto';

const allReducers = combineReducers({
  cryptos: reducerCrypto,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;

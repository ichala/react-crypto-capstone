import { SetCryptos } from '../Redux/crypto';

const GET = 'GET_CRYPTOS';

describe('Testing actions of receiving data', () => {
  it('should handle a country\'s data being added to the store', () => {
    const payload = [];
    const expected = {
      type: GET,
      payload,
    };
    expect(SetCryptos(payload)).toEqual(expected);
  });
});

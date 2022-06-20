import axios from 'axios';

const FetchCryptos = async () => {
  let data;
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Key': '9ec6b6afa2msh525393ead27bda3p1c32f0jsn2cffb1b4e514',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  await axios.request(options).then((response) => {
    data = response.data.data.coins.slice(0, 50);
  }).catch((error) => {
    data = error;
  });

  return data;
};

export default FetchCryptos;

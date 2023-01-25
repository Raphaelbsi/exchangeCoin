import axios from 'axios';
import { Exchange } from '../types/exchange';

const { API_KEY } = process.env;

export const getExchange = async (params: Exchange) => {
  const response = await axios.get(
    'https://api.apilayer.com/exchangerates_data/convert',
    {
      headers: {
        apikey: API_KEY
      },
      params: {
        from: params.from,
        to: params.to,
        amount: params.amount
      }
    }
  );

  return response;
};

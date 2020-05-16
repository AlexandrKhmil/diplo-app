// ACCOUNT
export const ACCOUNT_AUTH = '/api/account/auth';
export const ACCOUNT_LOGIN = '/api/account/login';
export const ACCOUNT_REG = '/api/account/register';

// ALGORITHM
export const ALGO_LIST = '/api/algorithm/list';
export const ALGO_ONE = '/api/algorithm/info';
  
// FINHUB
export const FINHUB_SYMBOL = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bql6il7rh5ra8kpl6eg0';
export const FINHUB_GET = ({ symbol, resolution, start, end }) => `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${start}&to=${end}&token=bql6il7rh5ra8kpl6eg0`;
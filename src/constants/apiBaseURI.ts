// Base url
const BASE_URI = `${import.meta.env.VITE_BASE_URI}/api/`;

// API query
const TRANSACTION_QUERY = `transaction`;
const TRANSACTION_SEARCH = `${TRANSACTION_QUERY}/search`;
const TRANSACTION_BOUGHT = `${TRANSACTION_QUERY}/typeBought`;

export { BASE_URI, TRANSACTION_QUERY, TRANSACTION_SEARCH, TRANSACTION_BOUGHT };

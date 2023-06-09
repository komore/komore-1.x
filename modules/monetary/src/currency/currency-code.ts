import { type currencyCodes } from './currency-codes';

/**
 * ISO 4217 currency code
 */
export type CurrencyCode = (typeof currencyCodes)[number];

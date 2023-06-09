import { type CurrencyCode } from '../currency/currency-code';

/**
 * Monetary amount
 */
export interface MonetaryAmount {
  /**
   * ISO 4217 currency code
   */
  readonly currencyCode: CurrencyCode;
  /**
   * Integer amount in the lowest available unit (e.g. cents)
   */
  readonly amount: `${number}`;
}

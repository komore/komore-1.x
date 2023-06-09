import { type CurrencyCode } from '../currency/currency-code';
import { type MonetaryAmount } from './monetary-amount';

/**
 * Creates a monetary amount
 *
 * @param amount Amount
 * @param currencyCode Currency code
 * @returns Monetary amount
 */
export function createMonetaryAmount(amount: number, currencyCode: CurrencyCode): MonetaryAmount {
  return {
    amount: `${Math.round(amount)}`,
    currencyCode,
  };
}

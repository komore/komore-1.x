import { type CurrencyCode } from '../currency/currency-code';
import { type MonetaryAmountWithTax } from './monetary-amount-with-tax';

/**
 * Creates a monetary amount with tax
 *
 * @param amount Amount
 * @param tax Tax
 * @param currencyCode Currency
 * @returns Monetary amount
 */
export function createMonetaryAmountWithTax(
  amount: number,
  tax: number,
  currencyCode: CurrencyCode
): MonetaryAmountWithTax {
  return {
    amount: `${Math.round(amount)}`,
    currencyCode,
    tax: `${Math.round(tax)}`,
  };
}

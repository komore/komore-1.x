import { type CurrencyCode } from './currency-code';
import { validateCurrencyCode } from './validate-currency-code';

/**
 * Creates a currency code from a string
 *
 * @param currencyCode Currency code as a string
 * @returns Currency code
 */
export function asCurrencyCode(currencyCode: string): CurrencyCode {
  validateCurrencyCode(currencyCode);
  return currencyCode;
}

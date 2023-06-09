import { type CurrencyCode } from './currency-code';
import { currencyCodes } from './currency-codes';

/**
 * Tests whether a string is a valid currency code
 *
 * @param currencyCode Currency code string
 * @returns true if the string is currency code string
 */
export function isCurrencyCode(currencyCode: string): currencyCode is CurrencyCode {
  return (currencyCodes as ReadonlyArray<string>).includes(currencyCode);
}

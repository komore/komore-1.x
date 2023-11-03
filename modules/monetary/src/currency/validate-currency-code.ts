import { monetaryError } from '../monetary.error';
import { type CurrencyCode } from './currency-code';
import { isCurrencyCode } from './is-currency-code';

/**
 * Validates a currency code
 *
 * @param currencyCode Currency code
 */
export function validateCurrencyCode(currencyCode: string): asserts currencyCode is CurrencyCode {
  if (!isCurrencyCode(currencyCode)) {
    throw monetaryError.invalidCurrencyCode({ currencyCode });
  }
}

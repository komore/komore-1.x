import { type CurrencyCode } from './currency-code';
import { InvalidCurrencyCodeError } from './invalid-currency-code-error';
import { isCurrencyCode } from './is-currency-code';

/**
 * Validates a currency code
 *
 * @param currencyCode Currency code
 */
export function validateCurrencyCode(currencyCode: string): asserts currencyCode is CurrencyCode {
  if (!isCurrencyCode(currencyCode)) {
    throw new InvalidCurrencyCodeError(`invalid currency code "${currencyCode}"`, currencyCode);
  }
}

import { createErrorType, errorProperties } from '@komore/error';

import { type CurrencyCode } from './currency/currency-code';
import { monetaryDomain } from './monetary.domain';

/**
 * Monetary error
 */
export const monetaryError = createErrorType(monetaryDomain, {
  currencyCodeMismatch: errorProperties<{ lhsCurrencyCode: CurrencyCode; rhsCurrencyCode: CurrencyCode }>(),
  invalidCurrencyCode: errorProperties<{ currencyCode: string }>(),
});

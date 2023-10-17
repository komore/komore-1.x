import { createErrorGroup, errorProperties } from '@komore/error';

import { type CurrencyCode } from './currency/currency-code';
import { monetaryDomain } from './monetary.domain';

/**
 * Monetary error
 */
export const monetaryError = createErrorGroup(monetaryDomain, {
  'currency.code.invalid': errorProperties<{ currencyCode: string }>(),
  'currency.code.mismatch': errorProperties<{ lhsCurrencyCode: CurrencyCode; rhsCurrencyCode: CurrencyCode }>()
});

import { createErrorCategory, errorProperties } from '@komore/error';

import { type CurrencyCode } from './currency/currency-code';
import { monetaryDomain } from './monetary.domain';

/**
 * Monetary error category
 */
export const monetaryError = createErrorCategory(monetaryDomain, 'default', {
  'currency.code.invalid': ['invalid currency code "${currencyCode}"', errorProperties<{ currencyCode: string }>()],
  'currency.code.mismatch': [
    'mismatched currency codes "${lhsCurrencyCode}" "${rhsCurrencyCode}"',
    errorProperties<{ lhsCurrencyCode: CurrencyCode; rhsCurrencyCode: CurrencyCode }>(),
  ],
});

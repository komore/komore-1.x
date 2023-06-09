import { currencyCodes } from './currency-codes';
import { isCurrencyCode } from './is-currency-code';

describe('Is currency code', () => {
  it.each([
    ...currencyCodes.map(currencyCode => ({ currencyCode, expectedValue: true })),
    ...['JPY', 'NOK', 'invalid'].map(currencyCode => ({ currencyCode, expectedValue: false })),
  ])('returns $expectedValue for currency code "$currencyCode"', ({ currencyCode, expectedValue }) => {
    // given: a currency code

    // then: true is returned when the currency code is valid
    expect(isCurrencyCode(currencyCode)).toBe(expectedValue);
  });
});

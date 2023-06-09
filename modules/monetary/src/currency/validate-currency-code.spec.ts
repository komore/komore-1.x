import { currencyCodes } from './currency-codes';
import { InvalidCurrencyCodeError } from './invalid-currency-code-error';
import { validateCurrencyCode } from './validate-currency-code';

describe('Validate currency code', () => {
  it.each(currencyCodes.map(currencyCode => ({ currencyCode })))(
    'accepts currency code "$currencyCode"',
    ({ currencyCode }) => {
      // given a valid currency code

      // expect: no error to be thrown when passing a valid currency code
      expect(() => validateCurrencyCode(currencyCode)).not.toThrowError();
    }
  );

  it('throws when a currency code string is not valid', () => {
    // given: an invalid currency code
    const currencyCode = 'invalid';

    // expect: an error to be thrown when passing an currency code
    const expectedError = new InvalidCurrencyCodeError(`invalid currency code "${currencyCode}"`, currencyCode);
    expect(() => validateCurrencyCode(currencyCode)).toThrowError(expectedError);
  });
});

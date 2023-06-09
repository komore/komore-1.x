/**
 * Invalid currency code errror
 */
export class InvalidCurrencyCodeError extends Error {
  override readonly name = 'InvalidCurrencyCodeError';
  readonly currencyCode: string;

  /**
   * Class constructor
   *
   * @param message Message
   * @param currencyCode Currency code
   */
  constructor(message: string, currencyCode: string) {
    super(message);
    this.currencyCode = currencyCode;
  }
}

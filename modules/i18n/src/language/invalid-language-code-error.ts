/**
 * Invalid language code error
 */
export class InvalidLanguageCodeError extends Error {
  override readonly name = 'InvalidLanguageCodeError';
  readonly languageCode: string;

  /**
   * Class constructor
   *
   * @param message Message
   * @param languageCode Language code string
   */
  constructor(message: string, languageCode: string) {
    super(message);
    this.languageCode = languageCode;
  }
}

/**
 * Validator options
 */
export interface ValidatorOptions {
  /**
   * Allow string values to be treated as dates
   *
   * @defaultValue `true`
   */
  readonly stringAsDate: boolean;
  /**
   * Allow string values to be treated as numbers
   *
   * @defaultValue `true`
   */
  readonly stringAsNumber: boolean;
}

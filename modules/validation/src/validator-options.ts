/**
 * Validator options
 */
export interface ValidatorOptions {
  /**
   * Allow string values to be treated as dates
   *
   * @default true
   */
  readonly stringAsDate: boolean;
  /**
   * Allow string values to be treated as numbers
   *
   * @default true
   */
  readonly stringAsNumber: boolean;
}

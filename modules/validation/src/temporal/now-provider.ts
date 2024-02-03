/**
 * Now provider
 */
export interface NowProvider {
  /**
   * Returns the date and time which serves as a reference for now
   *
   * @returns Date and time representing now
   */
  (): Temporal.PlainDateTime;
}

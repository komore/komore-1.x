/**
 * Date provider
 */
export interface DateProvider {
  /**
   * Returns the date which serves as a reference for now
   * @returns Date representing now
   */
  getDate(): Date;
}

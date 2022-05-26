/**
 * Reported expectation value
 */
export interface ReportedExpectationValue<T> {
  /**
   * Token
   */
  readonly token: string;
  /**
   * Value
   */
  readonly value: T;
}

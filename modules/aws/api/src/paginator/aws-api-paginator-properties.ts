/**
 * AWS API paginator properties
 */
export interface AwsApiPaginatorProperties {
  /**
   * Input token
   */
  readonly input_token: string;
  /**
   * Limit key
   */
  readonly limit_key: string;
  /**
   * Output token
   */
  readonly output_token: string;
  /**
   * Result key
   */
  readonly result_key: string;
}

import { type HttpMethod } from '@komore/http';

/**
 * AWS API JSON error result to API error options
 */
export interface AwsApiJsonErrorResultToApiErrorOptions {
  /**
   * HTTP method
   */
  readonly method: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * URL
   */
  readonly url: URL;
}

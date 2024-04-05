import { type HttpMethod } from '@komore/http';

/**
 * AWS API error result to API error options
 */
export interface AwsApiErrorResultToApiErrorOptions {
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

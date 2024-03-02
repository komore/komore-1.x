import { type HttpMethod } from '@komore/http';

/**
 * AWS API client operation to HTTP client request parameters
 */
export interface AwsApiClientOperationToHttpClientRequestParameters {
  /**
   * Date-time
   */
  readonly dateTime: Temporal.PlainDateTime;
  /**
   * HTTP method
   */
  readonly method: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * Parameters
   */
  readonly parameters: unknown;
}

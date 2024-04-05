import { type HttpMethod, type HttpHeader } from '@komore/http';

import { type AwsRegion } from '../region/aws-region';

/**
 * AWS API client base parameters
 */
export interface AwsApiClientBaseParameters {
  /**
   * Additional HTTP headers
   */
  readonly headers?: ReadonlyArray<HttpHeader>;
  /**
   * Host override
   */
  readonly host?: URL;
  /**
   * HTTP method
   *
   * @note Defaults to `POST`
   */
  readonly method?: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * Parameters
   */
  readonly parameters?: unknown;
  /**
   * AWS region
   */
  readonly region?: AwsRegion;
  /**
   * Resource path
   */
  readonly resourcePath?: string;
  /**
   * Search parameters
   */
  readonly searchParams?: URLSearchParams;
}

import { type HttpMethod, type HttpHeader } from '@komore/http';

/**
 * AWS API client parameters
 */
export interface AwsApiClientParameters {
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
   * Resource path
   */
  readonly resourcePath?: string;
  /**
   * Search parameters
   */
  readonly searchParams?: URLSearchParams;
}

import { type HttpHeader } from '@komore/http';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS API client signature strategy result
 */
export interface AwsApiClientSignatureStrategyResult {
  /**
   * HTTP headers
   */
  readonly headers?: ReadonlyArray<HttpHeader>;
  /**
   * Query parameters
   */
  readonly queryParameters?: ReadonlyRecord<string, string>;
}

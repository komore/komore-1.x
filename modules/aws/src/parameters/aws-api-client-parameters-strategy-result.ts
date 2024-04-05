import { type HttpHeader } from '@komore/http';

/**
 * AWS API client parameters strategy result
 */
export interface AwsApiClientParametersStrategyResult {
  /**
   * Body
   */
  readonly body?: string;
  /**
   * Headers
   */
  readonly headers?: ReadonlyArray<HttpHeader>;
}

import { type MediaType } from '@komore/http';

import { type AwsApiClientResultStrategyResult } from './aws-api-client-result-strategy-result';
import { type AwsApiClientResultStrategyParameters } from './aws-api-client-result-strategy-parameters';

/**
 * AWS API client result strategy
 */
export interface AwsApiClientResultStrategy {
  /**
   * Media types the strategy applies to
   */
  readonly mediaTypes: ReadonlySet<MediaType>;
  /**
   * Returns a result, given an HTTP client response
   *
   * @param parameters Client result strategy parameters
   * @returns Client result strategy result
   */
  <T>(parameters: AwsApiClientResultStrategyParameters): Observable<AwsApiClientResultStrategyResult<T>>;
}

import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS API client query parameters strategy options
 */
export interface AwsApiClientQueryParametersStrategyOptions {
  /**
   * Additional parameters
   */
  readonly additionalParameters?: ReadonlyRecord<string, string>;
}

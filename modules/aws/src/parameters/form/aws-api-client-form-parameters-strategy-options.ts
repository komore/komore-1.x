import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS API client form parameters strategy options
 */
export interface AwsApiClientFormParametersStrategyOptions {
  /**
   * Additional parameters
   */
  readonly additionalParameters?: ReadonlyRecord<string, string>;
}

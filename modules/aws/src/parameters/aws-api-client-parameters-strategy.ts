import { type AwsApiClientParametersStrategyParameters } from './aws-api-client-parameters-strategy-parameters';
import { type AwsApiClientParametersStrategyResult } from './aws-api-client-parameters-strategy-result';

/**
 * AWS API client parameters strategy
 */
export interface AwsApiClientParametersStrategy {
  (parameters: AwsApiClientParametersStrategyParameters): AwsApiClientParametersStrategyResult;
}

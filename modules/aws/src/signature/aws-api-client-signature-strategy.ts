import { type AwsApiClientSignatureStrategyParameters } from './aws-api-client-signature-strategy-parameters';
import { type AwsApiClientSignatureStrategyResult } from './aws-api-client-signature-strategy-result';

/**
 * AWS API client signature strategy
 */
export interface AwsApiClientSignatureStrategy {
  (parameters: AwsApiClientSignatureStrategyParameters): AwsApiClientSignatureStrategyResult;
}

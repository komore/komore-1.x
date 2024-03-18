import { type AwsApiClientParametersStrategy } from './parameters/aws-api-client-parameters-strategy';
import { type AwsApiClientResultStrategy } from './result/aws-api-client-result-strategy';

/**
 * AWS API client strategy
 */
export type AwsApiClientStrategy = AwsApiClientParametersStrategy | AwsApiClientResultStrategy;

import { type AwsApiClientParametersStrategy } from './aws-api-client-parameters-strategy';

/**
 * Creates an AWS API client target prefix parameters strategy
 *
 * @param targetPrefix Target prefix
 * @returns AWS API client target prefix parameters strategy
 */
export function awsApiClientTargetPrefixParametersStrategy(targetPrefix: string): AwsApiClientParametersStrategy {
  // TODO: creates a target, with `${targetPrefix}.${operation}`
}

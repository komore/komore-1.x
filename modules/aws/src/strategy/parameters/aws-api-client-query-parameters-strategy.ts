import { type ReadonlyRecord } from '@komore/typescript';
import { type AwsApiClientParametersStrategy } from './aws-api-client-parameters-strategy';

/**
 * Creates an AWS API client query parameters strategy
 *
 * This strategy passes parameters via query parameters, while also adding:
 *
 * - `Action` for the operation
 * - `AUTHPARAMS`
 * @param additionalQueryParameters
 */
export function awsApiClientQueryParametersStrategy(
  additionalQueryParameters: ReadonlyRecord<string, string>
): AwsApiClientParametersStrategy {}

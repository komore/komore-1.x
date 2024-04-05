import { type PickCallSignature } from '@komore/typescript';

import { type AwsApiClientUrlStrategy } from './aws-api-client-url-strategy';

/**
 * Creates an AWS API client URL strategy
 *
 * @param transform Transform function
 * @returns AWS API client URL strategy
 */
export function createAwsApiClientUrlStrategy(
  transform: PickCallSignature<AwsApiClientUrlStrategy>
): AwsApiClientUrlStrategy {
  return transform;
}

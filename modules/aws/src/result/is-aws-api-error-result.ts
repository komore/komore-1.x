import { type AwsApiErrorResult } from './aws-api-error-result';

/**
 * Tests whether a value is an AWS API error result
 *
 * @param value Value
 * @returns true if the value is an AWS API error result
 */
export function isAwsApiErrorResult(value: unknown): value is AwsApiErrorResult {
  return typeof value === 'object' && value !== null && '__type' in value && typeof value['__type'] === 'string';
}

import { type AwsApiJsonErrorResult } from './aws-api-json-error-result';

/**
 * Tests whether a value is an AWS API error result
 *
 * @param value Value
 * @returns true if the value is an AWS API error result
 */
export function isAwsApiJsonErrorResult(value: unknown): value is AwsApiJsonErrorResult {
  if (typeof value === 'object' && value !== null) {
    return (
      ('__type' in value && typeof value.__type === 'string') ||
      ('Message' in value && typeof value.Message === 'string')
    );
  }
  return false;
}

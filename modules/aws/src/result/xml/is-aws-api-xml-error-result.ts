import { type AwsApiXmlErrorResult } from './aws-api-xml-error-result';

/**
 * Tests whether a value is an AWS API XML error result
 *
 * @param value Value
 * @returns true if the value is an AWS API XML error result
 */
export function isAwsApiXmlErrorResult(value: unknown): value is AwsApiXmlErrorResult {
  return typeof value === 'object' && value !== null && 'ErrorResponse' in value;
}

import { type AwsApiErrorMessageResult } from './aws-api-error-message-result';
import { type AwsApiErrorTypeResult } from './aws-api-error-type-result';

/**
 * AWS API error result
 */
export type AwsApiErrorResult = AwsApiErrorMessageResult | AwsApiErrorTypeResult;

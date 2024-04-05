import { type AwsApiErrorResult } from '../error/aws-api-error-result';
import { type AwsApiJsonErrorTypeResult } from './aws-api-json-error-type-result';

/**
 * AWS API JSON error result
 */
export type AwsApiJsonErrorResult = AwsApiErrorResult | AwsApiJsonErrorTypeResult;

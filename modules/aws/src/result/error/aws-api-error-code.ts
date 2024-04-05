import { type awsApiErrorCodes } from './aws-api-error-codes';

/**
 * AWS API error code
 */
export type AwsApiErrorCode = (typeof awsApiErrorCodes)[number];

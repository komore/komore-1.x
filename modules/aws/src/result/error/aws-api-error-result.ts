import { type AwsApiErrorCode } from './aws-api-error-code';

/**
 * AWS API error result
 */
export interface AwsApiErrorResult {
  /**
   * Code
   */
  readonly Code?: AwsApiErrorCode;
  /**
   * Type
   */
  readonly Type?: 'Sender';
  /**
   * Message
   */
  readonly Message: string;
}

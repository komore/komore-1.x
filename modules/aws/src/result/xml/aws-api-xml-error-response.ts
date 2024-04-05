import { type AwsApiErrorResult } from '../error/aws-api-error-result';

/**
 * AWS API XML error response
 */
export interface AwsApiXmlErrorResponse {
  /**
   * Error
   */
  readonly Error: AwsApiErrorResult;
  /**
   * Request identifier
   */
  readonly RequestId: string; // TODO: typed?
  /**
   * XML namespace
   */
  readonly '@_xmlns': `https://${string}.amazonaws.com/${string}`;
}

import { type AwsAccessKeyCredentials } from '../credentials/aws-access-key-credentials';
import { type AwsRegion } from '../region/aws-region';

/**
 * HTTP client request to AWS signature HTTP header options
 */
export interface HttpClientRequestToAwsSignatureAuthorizationHttpHeaderOptions {
  /**
   * Credentials
   */
  readonly credentials: AwsAccessKeyCredentials;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * AWS service
   */
  readonly service: string;
}

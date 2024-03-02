import { type AwsRegion } from '../region/aws-region';
import { type AwsAccessKeyCredentials } from '../credentials/aws-access-key-credentials';

/**
 * HTTP client request with AWS authorization header options
 */
export interface HttpClientRequestWithAwsAuthorizationHeaderOptions {
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

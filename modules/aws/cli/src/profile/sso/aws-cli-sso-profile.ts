import { type AwsCliBaseProfile } from '../aws-cli-base-profile';
import { type AwsCliSsoProfileSso } from './aws-cli-sso-profile-sso';

/**
 * AWS CLI SSO profile
 */
export interface AwsCliSsoProfile extends AwsCliBaseProfile {
  /**
   * SSO information
   */
  readonly sso: AwsCliSsoProfileSso;
}

import { type AwsCliBaseProfile } from '../aws-cli-base-profile';
import { type AwsCliTokenProfileToken } from './aws-cli-token-profile-token';

/**
 * AWS CLI token profile
 */
export interface AwsCliTokenProfile extends AwsCliBaseProfile {
  /**
   * Token information
   */
  readonly token: AwsCliTokenProfileToken;
}

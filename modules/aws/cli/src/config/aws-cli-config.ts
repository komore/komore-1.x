import { type AwsCliProfile } from '../profile/aws-cli-profile';
import { type AwsCliSsoSession } from '../session/aws-cli-sso-session';

/**
 * AWS CLI configuration
 */
export interface AwsCliConfig {
  /**
   * Profiles
   */
  readonly profiles: ReadonlyArray<AwsCliProfile>;
  /**
   * Sessions
   */
  readonly ssoSessions: ReadonlyArray<AwsCliSsoSession>;
}

import { type AwsCliBaseProfile } from './aws-cli-base-profile';
import { type AwsCliSsoProfile } from './sso/aws-cli-sso-profile';
import { type AwsCliTokenProfile } from './token/aws-cli-token-profile';

/**
 * AWS CLI profile
 */
export type AwsCliProfile = AwsCliBaseProfile | AwsCliSsoProfile | AwsCliTokenProfile;

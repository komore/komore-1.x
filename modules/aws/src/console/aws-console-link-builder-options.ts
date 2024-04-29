import { type AwsAccountId } from '../account/id/aws-account-id';

/**
 * AWS console link builder options
 */
export interface AwsConsoleLinkBuilderOptions {
  /**
   * Account identifier
   */
  readonly accountId: AwsAccountId;
  /**
   * AWS access portal subdomain, i.e. `https://<subdomain>.awsapps.com/`
   */
  readonly subdomain: string;
}

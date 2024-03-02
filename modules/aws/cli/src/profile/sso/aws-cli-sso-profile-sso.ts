import { type AwsAccountId } from '@komore/aws';

/**
 * AWS CLI SSO profile SSO
 */
export interface AwsCliSsoProfileSso {
  /**
   * Account identifier
   */
  readonly accountId: AwsAccountId;
  /**
   * Role name
   */
  readonly roleName: string;
  /**
   * Session name
   */
  readonly sessionName: string;
}

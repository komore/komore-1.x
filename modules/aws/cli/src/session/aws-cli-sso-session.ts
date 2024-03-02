import { type AwsRegion } from '@komore/aws';

/**
 * AWS CLI SSO session
 */
export interface AwsCliSsoSession {
  /**
   * Session name
   */
  readonly name: string;
  /**
   * AWS region
   */
  readonly region: AwsRegion;
  /**
   * Registration scopes
   */
  readonly registrationScopes: ReadonlyArray<`sso:account:access`>; // TODO: proper type
  /**
   * Start URL
   */
  readonly startUrl: URL;
}

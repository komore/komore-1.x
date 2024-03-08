import { type DateTimeString } from '@komore/temporal';

import { type CognitoUserName } from './name/cognito-user-name';
import { type CognitoUserAttribute } from './attribute/cognito-user-attribute';
import { type CognitoUserStatus } from './status/cognito-user-status';

/**
 * Cognito user
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserType.html UserType}
 */
export interface CognitoUser {
  /**
   * List of attributes
   */
  readonly Attributes: ReadonlyArray<CognitoUserAttribute>;
  /**
   * Whether the user is enabled
   */
  readonly Enabled: boolean;
  /**
   * List of MFA options
   */
  readonly MFAOptions: ReadonlyArray<unknown>; // TODO: MFAOption
  /**
   * Creation date and time
   */
  readonly UserCreateDate: DateTimeString;
  /**
   * Last modification date and time
   */
  readonly UserLastModifiedDate: DateTimeString;
  /**
   * User name
   */
  readonly Username: CognitoUserName;
  /**
   * User status
   */
  readonly UserStatus: CognitoUserStatus;
}

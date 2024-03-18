import { type CognitoUserPoolId } from '../../user-pool/id/cognito-user-pool-id';

/**
 * Admin disable Cognito user parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html#API_AdminDisableUser_RequestParameters AdminDisableUser Request Parameters}
 */
export interface AdminDisableCognitoUserParameters {
  /**
   * User name
   */
  readonly Username: string;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

import { type CognitoUserPoolId } from '../../user-pool/id/cognito-user-pool-id';

/**
 * Admin enable Cognito user parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html#API_AdminEnableUser_RequestParameters AdminEnableUser Request Parameters}
 */
export interface AdminEnableCognitoUserParameters {
  /**
   * User name
   */
  readonly Username: string;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

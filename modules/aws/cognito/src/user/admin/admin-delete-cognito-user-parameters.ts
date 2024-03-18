import { type CognitoUserPoolId } from '../../user-pool/id/cognito-user-pool-id';

/**
 * Admin delete Cognito user parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html#API_AdminDeleteUser_RequestParameters AdminDeleteUser Request Parameters}
 */
export interface AdminDeleteCognitoUserParameters {
  /**
   * User name
   */
  readonly Username: string;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

import { type CognitoUserPoolId } from '../../user-pool/id/cognito-user-pool-id';

/**
 * Admin get Cognito user parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html#API_AdminGetUser_RequestParameters AdminGetUser Request Parameters}
 */
export interface AdminGetCognitoUserParameters {
  /**
   * User name
   */
  readonly Username: string;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

import { type CognitoUserPoolId } from '../user-pool/id/cognito-user-pool-id';
import { type CognitoGroupName } from './name/cognito-group-name';

/**
 * Delete Cognito group parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html#API_DeleteGroup_RequestParameters DeleteGroup Request Parameters}
 */
export interface DeleteCognitoGroupParameters {
  /**
   * Group name
   */
  readonly GroupName: CognitoGroupName;
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

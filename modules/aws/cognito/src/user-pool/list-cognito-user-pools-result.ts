import { type CognitoUserPoolDescription } from './cognito-user-pool-description';
import { type ListCognitoUserPoolsNextToken } from './list-cognito-user-pools-next-token';

/**
 * List Cognito user pools result
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html#API_ListUserPools_ResponseElements ListUserPools Response Elements}
 */
export interface ListCognitoUserPoolsResult {
  /**
   * Next token
   */
  readonly NextToken?: ListCognitoUserPoolsNextToken;
  /**
   * List of user pools
   */
  readonly UserPools: ReadonlyArray<CognitoUserPoolDescription>;
}

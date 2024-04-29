import { type ListCognitoUserPoolsNextToken } from './list-cognito-user-pools-next-token';

/**
 * List Cognito user pools parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html#API_ListUserPools_RequestParameters ListUserPools Request Parameters}
 */
export interface ListCognitoUserPoolsParameters {
  /**
   * Maximum number of results
   */
  readonly MaxResult: number;
  /**
   * Next token
   */
  readonly NextToken?: ListCognitoUserPoolsNextToken;
}

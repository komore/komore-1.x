import { type CognitoUser } from './cognito-user';

/**
 * List Cognito users result
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html#API_ListUsers_ResponseElements ListUsers Response Elements}
 */
export interface ListCognitoUsersResult {
  /**
   * Pagination token
   */
  readonly PaginationToken: string; // TODO: typed + check if always present
  /**
   * List of users
   */
  readonly Users: ReadonlyArray<CognitoUser>;
}

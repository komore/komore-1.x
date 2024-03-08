import { type CognitoUserPoolId } from '../user-pool/id/cognito-user-pool-id';
import { type CognitoUserAttributeName } from './attribute/name/cognito-user-attribute-name';
import { type StandardCognitoUserAttributeName } from './attribute/name/standard-cognito-user-attribute-name';

/**
 * List Cognito users parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html#API_ListUsers_RequestParameters ListUsers Request Parameters}
 */
export interface ListCognitoUsersParameters {
  /**
   * List of attributes to retrieve
   */
  readonly AttributesToGet?: ReadonlyArray<CognitoUserAttributeName>;
  /**
   * Filter string
   */
  readonly Filter?: ReadonlyArray<`${StandardCognitoUserAttributeName} ${'=' | '^='} ${string}`>;
  /**
   * Maximum number of users to return
   */
  readonly Limit?: number;
  /**
   * Pagination token
   */
  readonly PaginationToken?: string; // TODO: typed
  /**
   * User pool identifier
   */
  readonly UserPoolId: CognitoUserPoolId;
}

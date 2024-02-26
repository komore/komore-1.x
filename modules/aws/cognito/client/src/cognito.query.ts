import { type ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';

import { awsQueryProperties } from '@komore/aws';
import { createQueryType } from '@komore/query';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito query
 */
export const cognitoQuery = createQueryType(cognitoDomain, {
  /**
   * Returns a list of Cognito users
   *
   * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html ListUsers}
   */
  listUsers: awsQueryProperties<ListUsersCommand>(),
});

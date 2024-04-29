import { matchQuery } from '@komore/query';
import { listCognitoUsers } from '@komore/aws/cognito';

import { type CognitoQueryHandler } from './cognito-query-handler';
import { type CognitoQueryHandlerOptions } from './cognito-query-handler-options';

/**
 * Creates a Cognito query handler
 *
 * @param handlerOptions Cognito query handler options
 * @returns Cognito query handler
 */
export function createCognitoQueryHandler(handlerOptions: CognitoQueryHandlerOptions): CognitoQueryHandler {
  const { apiClient } = handlerOptions;
  const listUsers = listCognitoUsers(apiClient);

  return query =>
    matchQuery(query, {
      listUsers: () => listUsers(),
    });
}

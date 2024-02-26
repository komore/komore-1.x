import { ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';
import { type CognitoQueryHandler } from './cognito-query-handler';
import { type CognitoQueryHandlerOptions } from './cognito-query-handler-options';
import { matchQuery } from '@komore/query';

/**
 * Creates a Cognito query handler
 *
 * @param handlerOptions Cognito query handler options
 * @returns Cognito query handler
 */
export function createCognitoQueryHandler(handlerOptions: CognitoQueryHandlerOptions): CognitoQueryHandler {
  const { client$ } = handlerOptions;

  return query =>
    matchQuery(query, {
      listUsers: () => new ListUsersCommand(),
    });
}

import { createAwsClient } from '@komore/aws/client';

import { cognitoCommand } from '../cognito.command';
import { cognitoError } from '../cognito.error';
import { cognitoEvent } from '../cognito.event';
import { cognitoQuery } from '../cognito.query';
import { type CognitoClient } from './cognito-client';
import { createCognitoQueryHandler } from '../query/create-cognito-query-handler';
import { type CognitoClientOptions } from './cognito-client-options';

/**
 * Creates a Cognito client
 *
 * @param clientOptions Cognito client options
 * @returns Cognito client
 */
export function createCognitoClient(clientOptions: CognitoClientOptions): CognitoClient {
  const { apiClient } = clientOptions;
  return createAwsClient({
    command: cognitoCommand,
    commandEventMap: cognitoClientCommandEventMap,
    commandHandler: toEvents => createCognitoCommandHandler({ apiClient, toEvents }),
    event: cognitoEvent,
    error: cognitoError,
    query: cognitoQuery,
    queryHandler: () => createCognitoQueryHandler({ apiClient }),
  });
}

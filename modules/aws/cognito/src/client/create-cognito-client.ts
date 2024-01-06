import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

import { createAwsClient } from '@komore/aws';
import { type CognitoClientOptions } from './cognito-client-options';
import { cache, deferValue } from '@komore/reactive';

import { cognitoCommand } from '../cognito.command';
import { cognitoError } from '../cognito.error';
import { cognitoEvent } from '../cognito.event';
import { cognitoQuery } from '../cognito.query';
import { type CognitoClient } from './cognito-client';

/**
 * Creates a Cognito client
 *
 * @param clientOptions Cognito client options
 * @returns Cognito client
 */
export function createCognitoClient(clientOptions: CognitoClientOptions): CognitoClient {
  const client$ = deferValue(() => new CognitoIdentityProviderClient(clientOptions)).pipe(cache());
  return createAwsClient({
    client: () => client$,
    command: cognitoCommand,
    commandEventMap,
    commandHandler: events => createCognitoCommandHandler({ client$, events }),
    event: cognitoEvent,
    error: cognitoError,
    query: cognitoQuery,
    queryHandler: () => createCognitoQueryHandler({ client$ }),
  });
}

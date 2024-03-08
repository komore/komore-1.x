import { SESv2Client } from '@aws-sdk/client-sesv2';

import { createAwsClient } from '@komore/aws';

import { createSesCommandHandler } from '../command/create-ses-command-handler';
import { sesCommand } from '../ses.command';
import { sesError } from '../ses.error';
import { sesEvent } from '../ses.event';
import { sesQuery } from '../ses.query';
import { type SesClient } from './ses-client';
import { type SesClientOptions } from './ses-client-options';
import { sesCommandEventMapping } from './ses-command-event-mapping';

/**
 * Creates an SES client
 *
 * @param clientOptions SES client options
 * @returns SES client
 */
export function createSesClient(clientOptions: SesClientOptions): SesClient {
  return createAwsClient({
    clientClass: SESv2Client,
    clientOptions,
    commandEventMapping: sesCommandEventMapping,
    commandType: sesCommand,
    commandHandler: ({ client, events }) => createSesCommandHandler({ ...clientOptions, client, events }),
    errorType: sesError,
    eventType: sesEvent,
    queryType: sesQuery,
  });
}

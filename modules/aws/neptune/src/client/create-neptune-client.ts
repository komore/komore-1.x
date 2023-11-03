import { NeptuneClient as AwsSdkNeptuneClient } from '@aws-sdk/client-neptune';

import { createAwsClient } from '@komore/aws';

import { neptuneCommand } from '../neptune.command';
import { neptuneError } from '../neptune.error';
import { neptuneEvent } from '../neptune.event';
import { neptuneQuery } from '../neptune.query';
import { type NeptuneClient } from './neptune-client';
import { type NeptuneClientOptions } from './neptune-client-options';
import { neptuneCommandEventMapping } from './neptune-command-event-mapping';

/**
 * Creates an Neptune client
 *
 * @param clientOptions Neptune client options
 * @returns Neptune client
 */
export function createNeptuneClient(clientOptions: NeptuneClientOptions): NeptuneClient {
  return createAwsClient({
    clientClass: AwsSdkNeptuneClient,
    clientOptions,
    commandEventMapping: neptuneCommandEventMapping,
    commandType: neptuneCommand,
    errorType: neptuneError,
    eventType: neptuneEvent,
    queryType: neptuneQuery,
  });
}

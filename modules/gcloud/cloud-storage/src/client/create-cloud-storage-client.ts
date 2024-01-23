import { createClient } from '@komore/client';

import { cloudStorageCommand } from '../cloud-storage.command';
import { cloudStorageError } from '../cloud-storage.error';
import { cloudStorageEvent } from '../cloud-storage.event';
import { cloudStorageQuery } from '../cloud-storage.query';
import { type CloudStorageClient } from './cloud-storage-client';
import { type CloudStorageClientOptions } from './cloud-storage-client-options';
import { cloudStorageCommandEventMap } from './cloud-storage-command-event-map';
import { createCloudStorageCommandHandler } from '../handler/create-cloud-storage-command-handler';
import { Storage } from '@google-cloud/storage';

/**
 * Creates a Cloud Storage client
 *
 * @param clientOptions Cloud Storage client options
 * @returns Cloud Storage client
 */
export function createCloudStorageClient(clientOptions: CloudStorageClientOptions): CloudStorageClient {
  const { projectId } = clientOptions;
  const storage = new Storage({ projectId });
  return createClient({
    command: cloudStorageCommand,
    commandEventMap: cloudStorageCommandEventMap,
    commandHandler: toEvents => createCloudStorageCommandHandler({ storage, toEvents }),
    error: cloudStorageError,
    event: cloudStorageEvent,
    query: cloudStorageQuery,
    queryHandler: () => createCloudStorageQueryHandler({ storage }),
  });
}

import { createClient } from '@komore/client';
import { cache } from '@komore/reactive';

import { blobStorageCommand } from '../blob-storage.command';
import { blobStorageEvent } from '../blob-storage.event';
import { blobStorageError } from '../blob-storage.error';
import { blobStorageQuery } from '../blob-storage.query';
import { type BlobStorageClient } from './blob-storage-client';
import { type BlobStorageClientOptions } from './blob-storage-client-options';
import { createDeferredBlobServiceClient } from './create-deferred-blob-service-client';

/**
 * Creates a Blob Storage client
 *
 * @param clientOptions Blob Storage client options
 * @returns Blob Storage client
 */
export function createBlobStorageClient(clientOptions: BlobStorageClientOptions): BlobStorageClient {
  const client$ = createDeferredBlobServiceClient(clientOptions).pipe(cache());

  return createClient({
    command: blobStorageCommand,
    commandEventMap: blobStorageCommandEventMap,
    commandHandler: toEvents => createBlobStorageCommandHandler({ client$, toEvents }),
    error: blobStorageError,
    event: blobStorageEvent,
    query: blobStorageQuery,
    queryHandler: () => createBlobStorageQueryHandler({ client$ }),
  });
}

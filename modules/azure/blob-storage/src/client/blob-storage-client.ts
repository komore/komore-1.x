import { type Client } from '@komore/client';

import { type blobStorageCommand } from '../blob-storage.command';
import { type blobStorageEvent } from '../blob-storage.event';
import { type blobStorageQuery } from '../blob-storage.query';
import { type blobStorageError } from '../blob-storage.error';

/**
 * Blob Storage client
 */
export type BlobStorageClient = Client<
  typeof blobStorageCommand,
  typeof blobStorageEvent,
  typeof blobStorageQuery,
  typeof blobStorageError,
  typeof blobStorageCommandEventMap
>;

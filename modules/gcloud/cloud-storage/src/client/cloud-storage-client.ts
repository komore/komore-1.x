import { type Client } from '@komore/client';

import { type cloudStorageCommand } from '../cloud-storage.command';
import { type cloudStorageEvent } from '../cloud-storage.event';
import { type cloudStorageQuery } from '../cloud-storage.query';
import { type cloudStorageError } from '../cloud-storage.error';
import { type cloudStorageCommandEventMap } from './cloud-storage-command-event-map';

/**
 * Cloud Storage client
 */
export type CloudStorageClient = Client<
  typeof cloudStorageCommand,
  typeof cloudStorageEvent,
  typeof cloudStorageQuery,
  typeof cloudStorageError,
  typeof cloudStorageCommandEventMap
>;

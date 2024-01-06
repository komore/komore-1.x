import { createEventType } from '@komore/event';

import { blobStorageDomain } from './blob-storage.domain';

/**
 * Blob Storage event
 */
export const blobStorageEvent = createEventType(blobStorageDomain, {});

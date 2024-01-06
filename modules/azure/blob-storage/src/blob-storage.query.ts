import { createQueryType } from '@komore/query';

import { blobStorageDomain } from './blob-storage.domain';

/**
 * Blob Storage query
 */
export const blobStorageQuery = createQueryType(blobStorageDomain, {});

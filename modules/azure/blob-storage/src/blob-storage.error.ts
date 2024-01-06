import { createErrorType } from '@komore/error';

import { blobStorageDomain } from './blob-storage.domain';

/**
 * Blob Storage error
 */
export const blobStorageError = createErrorType(blobStorageDomain, {});

import { createCommandType } from '@komore/command';

import { blobStorageDomain } from './blob-storage.domain';

/**
 * Blob Storage command
 */
export const blobStorageCommand = createCommandType(blobStorageDomain, {});

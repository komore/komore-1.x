import { createQueryType } from '@komore/query';

import { cloudStorageDomain } from './cloud-storage.domain';

/**
 * Cloud Storage query
 */
export const cloudStorageQuery = createQueryType(cloudStorageDomain, {});

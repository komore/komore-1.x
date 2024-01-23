import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type cloudStorageQuery } from '../cloud-storage.query';

/**
 * Cloud Storage query handler
 */
export type CloudStorageQueryHandler = QueryHandler<QueryFromType<typeof cloudStorageQuery>>;

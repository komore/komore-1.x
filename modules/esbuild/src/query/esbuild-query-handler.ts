import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type esbuildQuery } from '../esbuild.query';

/**
 * esbuild query handler
 */
export type EsbuildQueryHandler = QueryHandler<QueryFromType<typeof esbuildQuery>>;

import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type esLintQuery } from '../eslint.query';

/**
 * ESLint query handler
 */
export type EsLintQueryHandler = QueryHandler<QueryFromType<typeof esLintQuery>>;

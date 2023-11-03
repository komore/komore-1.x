import { type GenericDomain } from '@komore/domain';

import { type QueryType } from './query-type';
import { type GenericQueryType } from './generic-query-type';

/**
 * Query type definitions, given a query type
 *
 * @template T Query type
 * @private
 */
export type QueryTypeDefinitions<T extends GenericQueryType> = T extends QueryType<GenericDomain, infer Definitions>
  ? Definitions
  : never;

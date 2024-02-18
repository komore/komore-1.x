import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type QueryType } from './query-type';

/**
 * Generic query type
 */
export type GenericQueryType = QueryType<
  Domain,
  ReadonlyRecord<string, readonly [resultType: any, parametersType: any]>
>;

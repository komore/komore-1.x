import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type QueryPropertiesSchema } from '../properties/query-properties-schema';
import { type QueryType } from './query-type';

/**
 * Generic query type
 */
export type GenericQueryType = QueryType<
  GenericDomain,
  ReadonlyRecord<string, QueryPropertiesSchema<ReadonlyRecord<string, unknown>>>
>;

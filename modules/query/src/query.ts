import { type TypeSchemaType } from '@komore/typescript';

import { type QueryTypeDefinitions } from './type/query-type-definitions';
import { type GenericQueryType } from './type/generic-query-type';

/**
 * Query
 *
 * @template QueryType Query type
 * @template QueryName Query name
 */
export interface Query<QueryType extends GenericQueryType, QueryName extends keyof QueryTypeDefinitions<QueryType>> {
  /**
   * Query name
   */
  readonly name: QueryName;
  /**
   * Query parameters
   */
  readonly parameters: TypeSchemaType<QueryTypeDefinitions<QueryType>[QueryName]>;
  /**
   * Query type
   */
  readonly type: QueryType;
}

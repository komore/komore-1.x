import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type QueryPropertiesSchema } from '../properties/query-properties-schema';
import { type Query } from '../query';

/**
 * Query type
 *
 * @template DomainType Domain type
 * @template Definitions Query definitions
 */
export interface QueryType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, QueryPropertiesSchema<readonly [unknown, unknown]>>,
> {
  /**
   * Definitions
   */
  readonly definitions: Definitions;
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Creates a new query
   *
   * @param queryName Query name
   * @param queryParameters Query parameters
   * @returns Query
   * @template QueryName Query name
   */
  <QueryName extends keyof Definitions & string>(
    queryName: QueryName,
    queryParameters: TypeSchemaType<Definitions[QueryName]>
  ): Query<this, QueryName>;
}

import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type Query } from '../query';
import { type QueryPropertiesSchema } from '../properties/query-properties-schema';
import { type QueryType } from './query-type';

/**
 * Creates a query type
 *
 * @param domain Domain
 * @param definitions Query definitions
 * @returns Query group
 * @template DomainType Domain type
 * @template Definitions Query definitions
 */
export function createQueryType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, QueryPropertiesSchema<readonly [unknown, unknown]>>,
>(domain: DomainType, definitions: Definitions): QueryType<DomainType, Definitions> {
  const queryType: Omit<QueryType<DomainType, Definitions>, 'definitions' | 'domain'> = <
    QueryName extends keyof Definitions & string,
  >(
    name: QueryName,
    parameters: TypeSchemaType<Definitions[QueryName]>
  ) =>
    ({
      type: queryType as QueryType<DomainType, Definitions>,
      name,
      parameters,
    }) satisfies Query<QueryType<DomainType, Definitions>, QueryName>;

  Object.defineProperties(queryType, {
    definitions: { enumerable: false, value: definitions, writable: false },
    domain: { enumerable: false, value: domain, writable: false },
  });

  return queryType as QueryType<DomainType, Definitions>;
}

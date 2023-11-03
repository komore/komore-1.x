import { type GenericDomain } from '@komore/domain';
import { createQueryType, type QueryPropertiesSchema } from '@komore/query';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates an AWS query type
 *
 * @param domain Domain
 * @param definitions Query definitions
 * @returns AWS query type
 * @template DomainType Domain type
 * @template Definitions Query definitions
 */
export function createAwsQueryType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, QueryPropertiesSchema<[unknown, unknown?]>>,
>(domain: DomainType, definitions: Definitions) {
  return createQueryType(domain, definitions);
}

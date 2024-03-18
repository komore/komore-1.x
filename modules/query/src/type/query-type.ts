import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type QueryCreator } from '../creator/query-creator';
import { type Query } from '../query';

/**
 * Event type
 *
 * @template DomainType Domain type
 * @template QueryParametersResultByQueryName Query parameters and result by query name
 */
export type QueryType<
  DomainType extends Domain = Domain,
  QueryPropertiesResultByByQueryName extends ReadonlyRecord<
    string,
    readonly [resultType: any, parametersType: any]
  > = ReadonlyRecord<string, readonly [resultType: any, parametersType: any]>,
> = {
  /**
   * Creates a new query
   *
   * @param parameters Query parameters
   * @returns Query
   */
  readonly [QueryName in keyof QueryPropertiesResultByByQueryName & string]: QueryCreator<
    QueryName,
    QueryPropertiesResultByByQueryName[QueryName][1] extends void
      ? () => Query<DomainType, QueryName, QueryPropertiesResultByByQueryName[QueryName]>
      : (
          properties: QueryPropertiesResultByByQueryName[QueryName][1]
        ) => Query<DomainType, QueryName, QueryPropertiesResultByByQueryName[QueryName]>
  >;
};

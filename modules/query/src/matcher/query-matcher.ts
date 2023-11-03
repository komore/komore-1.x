import { type Query } from '../query';
import { type GenericQuery } from '../generic-query';

/**
 * Query matcher
 *
 * @template Querys Possible query types
 * @template Result Result type
 */
export type QueryMatcher<QueryType extends GenericQuery, Result = void> = {
  [QueryName in keyof QueryType['type']['definitions']]: (
    parameters: Query<QueryType['type'], QueryName>['parameters'],
    query: Query<QueryType['type'], QueryName>
  ) => Result;
};

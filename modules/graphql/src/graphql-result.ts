import { type GraphQLError } from './graphql-error';

/**
 * GraphQL result
 *
 * @template T Data type
 */
export interface GraphQLResult<T> {
  readonly data?: T;
  readonly errors?: ReadonlyArray<GraphQLError>;
}

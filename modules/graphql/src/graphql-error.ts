import { type ReadonlyRecord } from '@komore/typescript';

import { type GraphQLErrorLocation } from './graphql-error-location';

/**
 * GraphQL error
 */
export interface GraphQLError {
  readonly extensions: ReadonlyRecord<string, string>;
  readonly locations: ReadonlyArray<GraphQLErrorLocation>;
  readonly message: string;
  readonly path: ReadonlyArray<string>;
}

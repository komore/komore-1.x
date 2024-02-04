import { type ReadonlyRecord } from '@komore/typescript';

import { type GraphQLSchema } from './graphql-schema';

export type GraphQLSchemaQueryType<T extends GraphQLSchema> =
  T extends GraphQLSchema<
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>,
    infer QueryType,
    ReadonlyRecord<string, unknown>
  >
    ? QueryType
    : never;

import { type ReadonlyRecord } from '@komore/typescript';

import { type GraphQLSchema } from './graphql-schema';

export type GraphQLSchemaTypes<T extends GraphQLSchema> =
  T extends GraphQLSchema<
    infer Types,
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>
  >
    ? Types
    : never;

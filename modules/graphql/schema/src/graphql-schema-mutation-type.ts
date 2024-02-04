import { type ReadonlyRecord } from '@komore/typescript';

import { type GraphQLSchema } from './graphql-schema';

export type GraphQLSchemaMutationType<T extends GraphQLSchema> =
  T extends GraphQLSchema<
    ReadonlyRecord<string, unknown>,
    infer MutationType,
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>
  >
    ? MutationType
    : never;

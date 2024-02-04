import { type ReadonlyRecord } from '@komore/typescript';

import { type GraphQLSchema } from './graphql-schema';

export type GraphQLSchemaSubscriptionType<T extends GraphQLSchema> =
  T extends GraphQLSchema<
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>,
    ReadonlyRecord<string, unknown>,
    infer SubscriptionType
  >
    ? SubscriptionType
    : never;

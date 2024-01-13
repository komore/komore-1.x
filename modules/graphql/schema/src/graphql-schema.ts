import { type ReadonlyRecord } from '@komore/typescript';

/**
 * GraphQL schema
 */
export interface GraphQLSchema<
  Types extends ReadonlyRecord<string, unknown>,
  MutationType extends ReadonlyRecord<string, unknown>,
  QueryType extends ReadonlyRecord<string, unknown>,
  SubscriptionType extends ReadonlyRecord<string, unknown>,
> {
  readonly Mutation: MutationType;
  readonly Query: QueryType;
  readonly Subscription: SubscriptionType;
  readonly Types: Types;
}

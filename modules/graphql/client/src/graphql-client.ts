import {
  type GraphQLSchema,
  type GraphQLSchemaMutationType,
  type GraphQLSchemaQueryType,
  type GraphQLSchemaSubscriptionType,
} from '@komore/graphql/schema';

/**
 * GraphQL client
 *
 * @template Schema Schema type
 */
export interface GraphQLClient<Schema extends GraphQLSchema> {
  /**
   * Executes a GraphQL mutation
   *
   * @param mutationName Mutation name
   * @param parameters Mutation parameters
   * @returns Mutation result
   * @template MutationName Mutation name
   */
  <MutationName extends keyof GraphQLSchemaMutationType<Schema> & string>(
    mutationName: MutationName,
    parameters?: unknown
  ): Observable<unknown>;
  /**
   * Executes a GraphQL query
   *
   * @param queryName Query name
   * @param parameters Query parameters
   * @returns Query result
   * @template QueryName Query name
   */
  query<QueryName extends keyof GraphQLSchemaQueryType<Schema> & string>(
    queryName: QueryName,
    parameters?: unknown
  ): Observable<unknown>;
  /**
   * Observes a GraphQL subscription
   *
   * @param subscriptionName Subscription name
   * @param parameters Subscription parameters
   */
  observe<SubscriptionName extends keyof GraphQLSchemaSubscriptionType<Schema> & string>(
    subscriptionName: SubscriptionName,
    parameters?: unknown
  ): Observable<unknown>;
}

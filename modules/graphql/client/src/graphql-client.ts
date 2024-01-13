import { type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * GraphQL client
 *
 * @template SchemaType Schema type
 */
export interface GraphQLClient<
  MutationType extends ReadonlyRecord<string, unknown>,
  QueryType extends ReadonlyRecord<string, unknown>,
  SubscriptionType extends ReadonlyRecord<string, unknown>,
> {
  <MutationName extends keyof MutationType>(mutationName: MutationName, parameters?: unknown): Observable<unknown>;
  /**
   * Executes a GraphQL query
   *
   * @param queryName Query name
   * @param parameters Query parameters
   * @returns Query result
   * @template QueryName Query name
   */
  query<QueryName extends keyof QueryType>(queryName: QueryName, parameters?: unknown): Observable<unknown>;
  /**
   * Observes a GraphQL subscription
   *
   * @param subscriptionName Subscription name
   * @param parameters Subscription parameters
   */
  observe<SubscriptionName extends SubscriptionType>(
    subscriptionName: SubscriptionName,
    parameters?: unknown
  ): Observable<unknown>;
}

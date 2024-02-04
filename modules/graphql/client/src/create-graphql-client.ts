import { objectWithProperties } from '@komore/functional';
import {
  type GraphQLSchema,
  type GraphQLSchemaMutationType,
  type GraphQLSchemaQueryType,
  type GraphQLSchemaSubscriptionType,
} from '@komore/graphql/schema';

import { executeGraphQLQuery } from './execute-graphql-query';
import { type GraphQLClient } from './graphql-client';
import { type GraphQLClientOptions } from './graphql-client-options';
import { mutationToGraphQLQuery } from './mutation/mutation-to-graphql-query';
import { queryToGraphQLQuery } from './query/query-to-graphql-query';
import { subscriptionToGraphQLQuery } from './subscription/subscription-to-graphql-query';

/**
 * Creates a GraphQL client
 *
 * @param clientOptions GraphQL client options
 * @returns GraphQL client
 * @template SchemaType Schema type
 */
export function createGraphQLClient<Schema extends GraphQLSchema>(
  clientOptions: GraphQLClientOptions<Schema>
): GraphQLClient<Schema> {
  const { schema } = clientOptions;
  const executeQuery = executeGraphQLQuery(clientOptions);
  const mutationToQuery = mutationToGraphQLQuery(schema.Mutation);
  const queryToQuery = queryToGraphQLQuery(schema.Mutation);
  const subscriptionToQuery = subscriptionToGraphQLQuery(schema.Mutation);

  const mutate = <MutationName extends keyof GraphQLSchemaMutationType<Schema> & string>(
    mutationName: MutationName,
    parameters?: unknown
  ): Observable<unknown> => {
    console.log('gotta mutate', mutationName, parameters);
    const query = mutationToQuery(mutationName, parameters);
    return executeQuery(query);
  };

  const query = <QueryName extends keyof GraphQLSchemaQueryType<Schema> & string>(
    queryName: QueryName,
    parameters?: unknown
  ): Observable<unknown> => {
    console.log('gotta query', queryName, parameters);
    const query = queryToQuery(queryName, parameters);
    return executeQuery(query);
  };

  const observe = <SubscriptionName extends keyof GraphQLSchemaSubscriptionType<Schema> & string>(
    subscriptionName: SubscriptionName,
    parameters?: unknown
  ): Observable<unknown> => {
    console.log('gotta sub', subscriptionName, parameters);
    const query = subscriptionToQuery(subscriptionName, parameters);
    return executeQuery(query);
  };

  return objectWithProperties(
    {
      query,
      observe,
    },
    {
      configurable: false,
      enumerable: false,
      writable: false,
    }
  )(mutate);
}

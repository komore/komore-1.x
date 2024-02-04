import { type GraphQLQuery } from '@komore/graphql';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a GraphQL query, given a query and its parameters
 *
 * @param queries Schema queries
 * @returns Function that returns a GraphQL query, given a query and its parameters
 */
export function queryToGraphQLQuery<Querys extends ReadonlyRecord<string, unknown>>(
  queries: Querys
): <QueryName extends keyof Querys & string>(queryName: QueryName, parameters?: unknown) => GraphQLQuery {
  return (queryName, parameters) => {
    console.log('weee q', queryName, parameters);
    const query = queries[queryName];
    query;
    return {
      query: `query { ${queryName} { name } }`,
    };
  };
}

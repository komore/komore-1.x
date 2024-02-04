import { type GraphQLQuery } from '@komore/graphql';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a GraphQL query, given a mutation and its parameters
 *
 * @param mutations Schema mutations
 * @returns Function that returns a GraphQL query, given a mutation and its parameters
 */
export function mutationToGraphQLQuery<Mutations extends ReadonlyRecord<string, unknown>>(
  mutations: Mutations
): <MutationName extends keyof Mutations & string>(mutationName: MutationName, parameters?: unknown) => GraphQLQuery {
  return (mutationName, parameters) => {
    console.log('weee m', mutationName, parameters);
    const mutation = mutations[mutationName];
    mutation;
    return {
      query: `mutation ${mutationName}()`,
    };
  };
}

import { type GraphQLDocumentNode } from '@komore/graphql/ast';

import { gqlParametersToResultString } from './gql-parameters-to-result-string';
import { parseGraphQLDocument } from './parse-graphql-document';

export function gql(
  literals: string | ReadonlyArray<string>,
  ...parameters: ReadonlyArray<unknown>
): GraphQLDocumentNode {
  const literalList = typeof literals === 'string' ? [literals] : literals;
  const toResultString = gqlParametersToResultString(literalList);
  const result = parameters.reduce(toResultString, literalList[0] ?? '');
  return parseGraphQLDocument(result);
}

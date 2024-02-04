import { type GraphQLAstNode } from './graphql-ast-node';

/**
 * Tests whether a value is a GraphQL node
 *
 * @param value Value
 * @returns true if the value is a GraphQL node
 */
export function isGraphQLAstNode(value: unknown): value is GraphQLAstNode {
  return typeof value === 'object' && value !== null && 'kind' in value && typeof value.kind === 'string';
}

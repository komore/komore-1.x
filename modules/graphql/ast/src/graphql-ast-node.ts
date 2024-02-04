import { type GraphQLAstNodes } from './graphql-ast-nodes';

/**
 * GraphQL AST node
 */
export type GraphQLAstNode = GraphQLAstNodes[keyof GraphQLAstNodes];

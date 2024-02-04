import { type GraphQLDirectiveDefinitionNode } from '../directive/graphql-directive-definition-node';
import { type GraphQLSchemaDefinitionNode } from '../schema/graphql-schema-definition-node';
import { type GraphQLTypeDefinitionNode } from './graphql-type-definition-node';

/**
 * GraphQL type system definition node
 */
export type GraphQLTypeSystemDefinitionNode =
  | GraphQLDirectiveDefinitionNode
  | GraphQLSchemaDefinitionNode
  | GraphQLTypeDefinitionNode;

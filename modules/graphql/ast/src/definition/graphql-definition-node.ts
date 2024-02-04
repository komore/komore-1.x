import { type GraphQLTypeSystemDefinitionNode } from '../type/graphql-type-system-definition-node';
import { type GraphQLExecutableDefinitionNode } from './graphql-executable-definition-node';
import { type GraphQLSystemExtensionNode } from './graphql-system-extension-node';

/**
 * GraphQL definition node
 */
export type GraphQLDefinitionNode =
  | GraphQLExecutableDefinitionNode
  | GraphQLSystemExtensionNode
  | GraphQLTypeSystemDefinitionNode;

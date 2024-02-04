import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLNamedTypeNode } from '../type/graphql-named-type-node';
import { type GraphQLOperationType } from './graphql-operation-type';

/**
 * GraphQL operation type definition node
 */
export interface GraphQLOperationTypeDefinitionNode extends GraphQLBaseAstNode {
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.OperationTypeDefinition;
  /**
   * Operation type
   */
  readonly operationType: GraphQLOperationType;
  /**
   * Type
   */
  readonly type: GraphQLNamedTypeNode;
}

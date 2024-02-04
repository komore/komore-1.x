import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';
import { type GraphQLTypeNode } from '../type/graphql-type-node';
import { type GraphQLConstantValueNode } from '../value/graphql-constant-value-node';

/**
 * GraphQL input value definition node
 */
export interface GraphQLInputValueDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Default value
   */
  readonly defaultValue?: GraphQLConstantValueNode;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.InputValueDefinition;
  /**
   * Type
   */
  readonly type: GraphQLTypeNode;
}

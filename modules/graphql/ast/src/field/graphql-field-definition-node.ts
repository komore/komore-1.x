import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLInputValueDefinitionNode } from '../input/graphql-input-value-definition-node';
import { type GraphQLTypeNode } from '../type/graphql-type-node';
import { type GraphQLBaseTypeDefinitionNode } from '../type/graphql-base-type-definition-node';

/**
 * GraphQL field definition node
 */
export interface GraphQLFieldDefinitionNode extends GraphQLBaseTypeDefinitionNode {
  /**
   * Arguments
   */
  readonly arguments: ReadonlyArray<GraphQLInputValueDefinitionNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.FieldDefinition;
  /**
   * Type
   */
  readonly type: GraphQLTypeNode;
}

import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLConstantObjectFieldNode } from '../object/graphql-constant-object-field-node';

/**
 * GraphQL constant object value node
 */
export interface GraphQLConstantObjectValueNode extends GraphQLBaseAstNode {
  /**
   * Fields
   */
  readonly fields: ReadonlyArray<GraphQLConstantObjectFieldNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ObjectValue;
}

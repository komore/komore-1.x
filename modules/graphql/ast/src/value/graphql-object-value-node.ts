import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';
import { type GraphQLObjectFieldNode } from '../object/graphql-object-field-node';

/**
 * GraphQL object value node
 */
export interface GraphQLObjectValueNode extends GraphQLBaseAstNode {
  /**
   * Fields
   */
  readonly fields: ReadonlyArray<GraphQLObjectFieldNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.ObjectValue;
}

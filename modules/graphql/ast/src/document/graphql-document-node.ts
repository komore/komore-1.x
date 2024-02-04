import { type GraphQLDefinitionNode } from '../definition/graphql-definition-node';
import { type graphQLAstNodeKinds } from '../graphql-ast-node-kinds';
import { type GraphQLBaseAstNode } from '../graphql-base-ast-node';

/**
 * GraphQL document node
 */
export interface GraphQLDocumentNode extends GraphQLBaseAstNode {
  /**
   * Definitions
   */
  readonly definitions: ReadonlyArray<GraphQLDefinitionNode>;
  /**
   * Node kind
   */
  readonly kind: typeof graphQLAstNodeKinds.Document;
}

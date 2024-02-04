import { type GraphQLDocumentNode } from '@komore/graphql/ast';

export function parseGraphQLDocument(source: string): GraphQLDocumentNode {
  return {
    kind: 'Document',
  };
}

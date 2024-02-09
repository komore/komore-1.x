import { type GraphQLDocumentNode } from '@komore/graphql/ast';
import { parseGraphQLSource } from '@komore/graphql/parser';

export function parseGraphQLDocument(source: string): GraphQLDocumentNode {
  const parsedSource = parseGraphQLSource(source);
  return {
    definitions: [],
    kind: 'Document',
    location: {
      end: 1,
      start: 0,
      source: {
        content: 'x',
        location: { column: 1, line: 1 },
        name: 'xyz',
      },
    },
  };
}

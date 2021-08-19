import { MARKDOWN_METADATA_DEFINITION_PREFIX } from './markdown-metadata-definition-prefix';

/**
 * Tests whether a definition string is a Markdown metadata definition
 * @param definitionString Definition string
 * @returns true if the definition string is a Markdown metadata definition
 */
export function isMarkdownMetadataDefinition(definitionString: string): boolean {
  return definitionString.startsWith(MARKDOWN_METADATA_DEFINITION_PREFIX);
}

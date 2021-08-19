import type { MarkdownMetadataDefinition } from './markdown-metadata-definition';
import { MARKDOWN_METADATA_DEFINITION_PREFIX } from './markdown-metadata-definition-prefix';

/**
 * Markdown metadata definition regular expression
 */
const MARKDOWN_METADATA_DEFINITION_REGEXP = /^\s*#([^\s]+)\s+\((.+)\)$/;

/**
 * Returns a Markdown metadata definition from a Markdown definition string
 * @param definitionString Markdown definition string
 * @returns Markdown metadata definition
 */
export function toMarkdownMetadataDefinition(definitionString: string): MarkdownMetadataDefinition {
  const start = MARKDOWN_METADATA_DEFINITION_PREFIX.length;
  const endIndex = definitionString.indexOf('\n', start);
  const end = endIndex !== -1 ? endIndex : undefined;
  const definitionLine = definitionString.substring(start, end);
  const matches = definitionLine.match(MARKDOWN_METADATA_DEFINITION_REGEXP);
  if (matches === null) {
    throw new Error(`invalid Markdown metadata definition "${definitionString}"`);
  }

  const kind = matches[1].toLocaleLowerCase();
  const value = matches[2].trim();

  return {
    kind,
    value
  };
}

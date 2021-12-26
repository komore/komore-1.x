import { type MetadataDefinition } from './metadata-definition';
import { METADATA_DEFINITION_PREFIX } from './metadata-definition-prefix';

/**
 * Metadata definition regular expression
 */
const METADATA_DEFINITION_REGEXP = /^\s*#([^\s]+)\s+\((.+)\)$/;

/**
 * Creates a metadata definition from a definition string
 * @param definitionString Definition string
 * @returns Metadata definition
 */
export function toMetadataDefinition(definitionString: string): MetadataDefinition {
  const start = METADATA_DEFINITION_PREFIX.length;
  const newLineIndex = definitionString.indexOf('\n', start);
  const end = newLineIndex !== -1 ? newLineIndex : undefined;
  const definitionLine = definitionString.substring(start, end);
  const matches = definitionLine.match(METADATA_DEFINITION_REGEXP);
  if (matches === null) {
    throw new Error(`invalid metadata definition "${definitionString}"`);
  }

  const name = matches[1];
  const value = matches[2];

  return {
    name,
    value
  };
}

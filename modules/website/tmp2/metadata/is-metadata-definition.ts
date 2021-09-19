import { METADATA_DEFINITION_PREFIX } from './metadata-definition-prefix';

/**
 * Tests whether a definition is a metadata definition
 * @param definitionString Definition text
 * @returns true if the definition is a metadata definition
 */
export function isMetadataDefinition(definitionString: string): boolean {
  return definitionString.startsWith(METADATA_DEFINITION_PREFIX);
}

import { type Tokenizer } from 'marked';

import { DocumentationMetadataKind } from '../metadata/documentation-metadata-kind';
import { type DocumentationMetadataRecorder } from '../metadata/documentation-metadata-recorder';
import { isMetadataDefinition } from '../metadata/is-metadata-definition';
import { toMetadataDefinition } from '../metadata/to-metadata-definition';
import { toMetadataSeeAlso } from '../metadata/to-metadata-seealso';

/**
 * Creates a documentation tokenizer
 *
 * @param metadataRecorder Metadata recorder
 * @returns Documentation tokenizer
 */
export function createDocumentationTokenizer(metadataRecorder: DocumentationMetadataRecorder): Partial<Tokenizer> {
  const metadataHandlers = new Map<string, (value: string, name: string) => void>([
    [DocumentationMetadataKind.DESCRIPTION, description => metadataRecorder.setDescription(description)],
    [
      DocumentationMetadataKind.SEE_ALSO,
      value => {
        const [url, title] = toMetadataSeeAlso(value);
        metadataRecorder.addSeeAlso(url, title);
      },
    ],
    [DocumentationMetadataKind.TITLE, title => metadataRecorder.setTitle(title)],
  ]);
  return {
    def: definitionString => {
      if (isMetadataDefinition(definitionString)) {
        const { name, value } = toMetadataDefinition(definitionString);
        const metadataHandler = metadataHandlers.get(name);
        if (metadataHandler !== undefined) {
          metadataHandler(value, name);
        } else {
          console.warn(`unknown metadata type "${name}"`);
        }
      }
      return false;
    },
  };
}

import type { DocumentationMetadataRecorder } from '../metadata/documentation-metadata-recorder';
import { createDocumentationTokenizer } from './create-documentation-tokenizer';

/**
 * Creates a documentation extension
 * @param metadataRecorder Metaadata recorder
 * @returns 
 */
export function createDocumentationExtension(metadataRecorder: DocumentationMetadataRecorder): marked.MarkedExtension {
  const tokenizer = createDocumentationTokenizer(metadataRecorder);
  return {
    tokenizer,
    walkTokens: token => {
      console.log('token', token.type);
    }
  };
}

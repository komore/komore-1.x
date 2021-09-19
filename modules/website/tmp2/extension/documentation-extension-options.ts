import type { DocumentationMetadataRecorder } from '../metadata/documentation-metadata-recorder';

/**
 * Documentation extension options
 */
export interface DocumentationExtensionOptions {
  readonly metadataRecorder: DocumentationMetadataRecorder;
}
